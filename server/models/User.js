const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  verificationToken: {
    type: String,
    default: null,
  },
  resetToken: {
    type: String,
    default: null,
  },
  status: {
    type: Boolean,
    default: false,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  dateOfBirth: {
    type: Date,
    default: null,
  },
  gender: {
    type: String,
    default: null,
  },
  phoneNumber: {
    type: String,
    default: null,
  },
  picture: {
    type: String,
    default: null,
  },
  address: [{ type: Object }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Wishlist" }],
});

module.exports = mongoose.model("User", userSchema);
