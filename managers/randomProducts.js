const { faker } = require("@faker-js/faker");

class Product {
    constructor(id, title, price, thumbnail) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    }
}
// genera 5 productos random y los mete en array producto
generateProducts = () => {
    const products = [];
    for (let i = 0; i < 5; i++) {
        const producto = new Product(
            faker.random.numeric(),
            faker.commerce.productName(),
            faker.commerce.price(100, 200, 0),
            faker.image.imageUrl()
        );
        products.push(producto);
    }
    return products;
};

module.exports = { generateProducts };
