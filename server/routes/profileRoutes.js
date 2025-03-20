const express = require("express")
const {
  getProfile,
  updateProfile,
  addAddress,
  updateAddress,
  deleteAddress,
  getWishlist,
  getOrders,
  // deleteProfile
} = require("../controllers/profileController.js")
const router = express.Router()
const authMiddleware = require("./../middleware/authMiddleware.js")
const upload = require("./../multer.js")

// Profile routes
router.get("/", authMiddleware, getProfile)
router.post("/", authMiddleware, upload.single("picture"), updateProfile)

// Address routes
router.post("/address", authMiddleware, addAddress)
router.put("/address/:addressId", authMiddleware, updateAddress)
router.delete("/address/:addressId", authMiddleware, deleteAddress)

// Wishlist and Orders routes
router.get("/wishlist", authMiddleware, getWishlist)
router.get("/orders", authMiddleware, getOrders)

module.exports = router

