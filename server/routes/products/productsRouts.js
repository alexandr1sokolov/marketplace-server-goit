const fs = require('fs');
const path = require('path');

const Db = () => {
    const db = path.resolve(__dirname, '../../', './db/products/all-products.json');
    return JSON.parse(fs.readFileSync(db, 'utf8'));
};

module.exports.getAll = (request, response) => {
    const products = Db();
    if (products) {
        response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        response.write(JSON.stringify(products));
        response.end();
    } else {
        response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        response.write('Server error');
        response.end();
    }
};

module.exports.getById = (request, response) => {
    const routeData = request.url.split('/').slice(1);
    const id = routeData[1];
    const product = Db().find(el => el.id === +id);

    if (product) {
        response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        response.write(JSON.stringify(product));
        response.end();
    } else {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.write('Product not found');
        response.end();
    }};


module.exports.create = (request, response) => {
    const productFolder = path.resolve(__dirname, '../../', 'db/products');

    const saveNewProduct = (fileName, data, cb) => {
        const src = path.resolve(productFolder, fileName + '.json');
        fs.writeFile(src, JSON.stringify(data), cb);
    };
    let body = [];

    const handleDataLoad = () => {
        const data = Buffer.concat(body).toString();
        const resultData=  JSON.parse(data);
        console.log('result data:', resultData);
        const productInfo = Object.assign({}, { id: Date.now() }, resultData);

        const fileName = productInfo.name.toLowerCase() + productInfo.id;

        saveNewProduct(fileName, productInfo, () => {
            response.writeHead(201, {"Content-Type": "application/json"});
            response.write(JSON.stringify({
                "status": "success",
                product: {
                    "name": productInfo.name,
                    "description": productInfo.description,
                    "price": productInfo.price,
                    "currency": productInfo.currency,
                    "categories": productInfo.categories,
                }
            }));
            response.end();
        });
    };

    request
        .on('data', (chunk) => {
            body.push(chunk);
        })
        .on('end', handleDataLoad);
};

module.exports.default = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>404 Page not found. Default route</h1>");
    response.end();
};
