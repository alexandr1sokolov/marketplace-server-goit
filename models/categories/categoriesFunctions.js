const CATEGORIES_SCHEMA = require('./categoriesSchema');

module.exports.getAll = function () {
    return CATEGORIES_SCHEMA.find()
};

module.exports.getById = function (paramsId) {
    return CATEGORIES_SCHEMA.findById(paramsId)
};

module.exports.add = function (data) {
    let category = new CATEGORIES_SCHEMA({
        categories: data.categories
    });

    return category.save()
};

module.exports.update = function (data, paramsId) {
    let updatedCategories = {
        categories: data.categories
    };

    return CATEGORIES_SCHEMA.findByIdAndUpdate( paramsId, { $set: updatedCategories }, {new: true})
};

module.exports.delete = function (paramsId) { return CATEGORIES_SCHEMA.findByIdAndRemove(paramsId) };