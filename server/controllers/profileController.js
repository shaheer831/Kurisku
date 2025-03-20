const User = require("../models/User")
const fs = require("fs")

// Get Profile by ID
exports.getProfile = async (req, res) => {
  const user = req.user

  try {
    res.status(200).json({
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        status: user.status,
        dateOfBirth: user.dateOfBirth,
        gender: user.gender,
        phoneNumber: user.phoneNumber,
        picture: user.picture ? `${process.env.LINK}${user.picture}` : null,
        address: user.address || [],
      },
    })
  } catch (error) {
    res.status(500).json({ message: "Error retrieving profile", error })
  }
}

exports.updateProfile = async (req, res) => {
  const filePath = req.file ? `/uploads/${req.file.filename}` : undefined

  const userId = req.user._id // Ensure the correct field is used
  if (!userId) {
    return res.status(400).json({ message: "User ID is required" })
  }

  const { dateOfBirth, gender, phoneNumber, username } = req.body

  // Validate username
  if (!username) {
    return res.status(400).json({ message: "Username is required" })
  }

  // Validate date of birth
  if (!dateOfBirth) {
    return res.status(400).json({ message: "Date of Birth is required" })
  } else if (isNaN(Date.parse(dateOfBirth))) {
    return res.status(400).json({ message: "Invalid Date of Birth format" })
  }

  // Validate gender
  const allowedGenders = ["male", "female", "other"]
  if (!gender) {
    return res.status(400).json({ message: "Gender is required" })
  } else if (!allowedGenders.includes(gender.toLowerCase())) {
    return res.status(400).json({
      message: `Gender must be one of the following: ${allowedGenders.join(", ")}`,
    })
  }

  // Validate phone number
  const phoneRegex = /^\+?[1-9]\d{1,14}$/ // E.164 format (international standard)
  if (!phoneNumber) {
    return res.status(400).json({ message: "Phone number is required" })
  } else if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).json({ message: "Invalid phone number format" })
  }

  try {
    // Fetch the current user's profile to get the existing picture
    const existingUser = await User.findById(userId)
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" })
    }

    // Delete the previous picture if a new one is uploaded
    if (req.file && existingUser.picture) {
      const oldPicture = `.${existingUser.picture}`
      try {
        fs.unlinkSync(oldPicture) // Attempt to delete the old picture
      } catch (error) {
        console.log(`Failed to delete file: ${oldPicture}. Skipping...`)
      }
    }

    // Update the user's profile
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { dateOfBirth, gender, phoneNumber, username, picture: filePath },
      { new: true }, // This option returns the updated document
    )

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" })
    }

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        status: updatedUser.status,
        dateOfBirth: updatedUser.dateOfBirth,
        gender: updatedUser.gender,
        phoneNumber: updatedUser.phoneNumber,
        picture: updatedUser.picture ? `${process.env.LINK}${updatedUser.picture}` : null,
        address: updatedUser.address || [],
      },
    })
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error })
  }
}

// Add a new address to user profile
exports.addAddress = async (req, res) => {
  const userId = req.user._id
  const { street, city, state, zipCode, country, isDefault } = req.body

  // Basic validation
  if (!street || !city || !state || !zipCode || !country) {
    return res.status(400).json({ message: "All address fields are required" })
  }

  try {
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    const newAddress = {
      street,
      city,
      state,
      zipCode,
      country,
      isDefault: isDefault || false,
    }

    // If this is set as default, update any existing default address
    if (isDefault) {
      user.address.forEach((addr) => {
        if (addr.isDefault) addr.isDefault = false
      })
    }

    // If this is the first address, make it default
    if (user.address.length === 0) {
      newAddress.isDefault = true
    }

    user.address.push(newAddress)
    await user.save()

    res.status(201).json({
      message: "Address added successfully",
      address: newAddress,
      addresses: user.address,
    })
  } catch (error) {
    res.status(500).json({ message: "Error adding address", error })
  }
}

// Update an existing address
exports.updateAddress = async (req, res) => {
  const userId = req.user._id
  const addressId = req.params.addressId
  const { street, city, state, zipCode, country, isDefault } = req.body

  if (!addressId) {
    return res.status(400).json({ message: "Address ID is required" })
  }

  try {
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Find the address index
    const addressIndex = user.address.findIndex((addr) => addr._id.toString() === addressId)

    if (addressIndex === -1) {
      return res.status(404).json({ message: "Address not found" })
    }

    // Update address fields if provided
    if (street) user.address[addressIndex].street = street
    if (city) user.address[addressIndex].city = city
    if (state) user.address[addressIndex].state = state
    if (zipCode) user.address[addressIndex].zipCode = zipCode
    if (country) user.address[addressIndex].country = country

    // Handle default address logic
    if (isDefault) {
      user.address.forEach((addr, idx) => {
        user.address[idx].isDefault = idx === addressIndex
      })
    }

    await user.save()

    res.status(200).json({
      message: "Address updated successfully",
      addresses: user.address,
    })
  } catch (error) {
    res.status(500).json({ message: "Error updating address", error })
  }
}

// Delete an address
exports.deleteAddress = async (req, res) => {
  const userId = req.user._id
  const addressId = req.params.addressId

  if (!addressId) {
    return res.status(400).json({ message: "Address ID is required" })
  }

  try {
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Find the address index
    const addressIndex = user.address.findIndex((addr) => addr._id.toString() === addressId)

    if (addressIndex === -1) {
      return res.status(404).json({ message: "Address not found" })
    }

    const wasDefault = user.address[addressIndex].isDefault

    // Remove the address
    user.address.splice(addressIndex, 1)

    // If the deleted address was the default and there are other addresses,
    // set the first one as default
    if (wasDefault && user.address.length > 0) {
      user.address[0].isDefault = true
    }

    await user.save()

    res.status(200).json({
      message: "Address deleted successfully",
      addresses: user.address,
    })
  } catch (error) {
    res.status(500).json({ message: "Error deleting address", error })
  }
}

// Get user's wishlist
exports.getWishlist = async (req, res) => {
  const userId = req.user._id

  try {
    const user = await User.findById(userId).populate("wishlist")
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.status(200).json({
      wishlist: user.wishlist || [],
    })
  } catch (error) {
    res.status(500).json({ message: "Error retrieving wishlist", error })
  }
}

// Get user's orders
exports.getOrders = async (req, res) => {
  const userId = req.user._id

  try {
    const user = await User.findById(userId).populate("orders")
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.status(200).json({
      orders: user.orders || [],
    })
  } catch (error) {
    res.status(500).json({ message: "Error retrieving orders", error })
  }
}

// Uncomment and implement if needed
// exports.deleteProfile = async (req, res) => {
//   // Implementation for deleting a profile
// };

