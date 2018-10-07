const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productsSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Indicate name of the product / Укажите название товара']
        },
        description: {
            type: String,
            required: [true, 'Indicate description of the product / Введите описание товара']
        },
        price: {
            type: String,
            required: [true, 'Indicate price of the product / Укажите цену товара']
        },
        currency: {
            type: String,
            required: [true, 'Indicate currency / Укажите валюту']
        },
        categories: {
            type: [String, String],
            required: [true, 'Indicate categories of the product / Укажите категории товара']
        },

    },
    {timestamps: {createdAt: 'created_at'}}
);

let Products = mongoose.model('Products', productsSchema);
module.exports = Products;

