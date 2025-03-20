const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory', required: true },
  images: [{ type: String, required: true }],
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }]
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
