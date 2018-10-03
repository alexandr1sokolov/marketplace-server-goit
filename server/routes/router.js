const product = require('./products/productsRouts');
const user = require('./users/usersRouts');

const router = {
    '/products': product.getAll,
    '/product': product.getById,
    '/product/create': product.create,
    '/user': user.get,
    '/user/create': user.create,

    default: product.default
};

module.exports = router;