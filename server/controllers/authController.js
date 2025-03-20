const jwt = require("jsonwebtoken");
const User = require("../models/User");
// Google Authentication Controller
exports.googleAuthController = async (req, res) => {
  try {
    const { displayName, email, picture } = req.user;

    let user = await User.findOne({ email });

    if (!user) {
      // If user does not exist, create a new user
      user = new User({
        username: displayName,
        email,
        picture,
        status: true,
      });
      await user.save();
    }

    if (user.isBlocked) {
      return res.status(400).json({ message: "User is blocked" });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.json({
      message: "Google login successful",
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        picture: user.picture ? `${process.env.LINK}${user.picture}` : null,
        status: user.status,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Google login failed", error });
  }
};