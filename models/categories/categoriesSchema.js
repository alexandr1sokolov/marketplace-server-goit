const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categoriesSchema = new Schema(
    {
        categories: {
            type: String,
            required: [true, 'Enter categories/ Укажите категории']
        },
    },
    {timestamps: {createdAt: 'created_at'}}
);

let Categories = mongoose.model('Categories', categoriesSchema);
module.exports = Categories;