const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);
module.exports = SubCategory;
