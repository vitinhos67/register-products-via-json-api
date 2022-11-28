const InternalError = require("../err/InternalError");
const {addProduct, showProducts} = require("./query");

class Products {
    constructor({product_name, total_amount, price, category}) {
        (this._product_name = product_name),
            (this._total_amount = total_amount),
            (this._price = price),
            (this._category = category);
    }

    async addProduct() {
        const createProduct = await addProduct({
            product_name: this._product_name,
            total_amount: this._total_amount,
            price: this._price,
            category: this._category,
        });

        if (createProduct instanceof Error) {
            return new InternalError(`Não foi possivel adicionar o produto ${this._product_name}`);
        }
    }

    static async show() {
    const products = await showProducts()
    return products;

    }
}

module.exports = Products;
