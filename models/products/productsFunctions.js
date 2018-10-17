const PRODUCTS_SCHEMA = require('./productsSchema');

module.exports.getAll = function () {
    return PRODUCTS_SCHEMA.find()
};

module.exports.getById = function (paramsId) {
    return PRODUCTS_SCHEMA.findById(paramsId)
};

module.exports.add = function (data) {
    let product = new PRODUCTS_SCHEMA({
        name: data.name,
        description: data.description,
        price: data.price,
        currency: data.currency,
        categories: data.categories
    });

    return product.save()
};

module.exports.update = function (data, paramsId) {
    let updatedProduct = {
        name: data.name,
        description: data.description,
        price: data.price,
        currency: data.currency,
        categories: data.categories
    };

    return PRODUCTS_SCHEMA.findByIdAndUpdate( paramsId, { $set: updatedProduct }, {new: true})
};

module.exports.delete = function (paramsId) { return PRODUCTS_SCHEMA.findByIdAndRemove(paramsId) };
