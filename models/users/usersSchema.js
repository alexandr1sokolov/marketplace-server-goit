const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Username required/ Укажите имя пользователя']
        },
        phone: {
            type: String,
            required: [true, 'Phone number required / Укажите номер телефона']
        },
        password: {
            type: String,
            required: [true, 'Password required / Укажите пароль']
        },
    },
    {timestamps: {createdAt: 'created_at'}}
);

let Users = mongoose.model('Users', usersSchema);
module.exports = Users;
