const USERS_SCHEMA = require('./usersSchema');

module.exports.getAll = function () {
    return USERS_SCHEMA.find()
};

module.exports.getById = function (paramsId) {
    return USERS_SCHEMA.findById(paramsId)
};

module.exports.add = function (data) {
    let user = new USERS_SCHEMA({
        name: data.name,
        phone: data.phone,
        password: data.password,
    });

    return user.save()
};

module.exports.update = function (data, paramsId) {
    let updatedUser = {
        name: data.name,
        phone: data.phone,
        password: data.password,
    };

    return USERS_SCHEMA.findByIdAndUpdate( paramsId, { $set: updatedUser }, {new: true})
};

module.exports.delete = function (paramsId) { return USERS_SCHEMA.findByIdAndRemove(paramsId) };
