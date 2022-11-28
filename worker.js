const Products = require("./src/model/Products");
async function main(data) {
    try {
        const Product = new Products({
            product_name: data.product_name,
            total_amount: data.total_amount,
            price: data.price,
            category: data.category,
        });

        const createProduct = await Product.addProduct();

        if (createProduct instanceof Error) {
            return process.send({
                status: "miss",
                message: `O produto ${data.product_name} não foi adicionado, (verifique se seus campos são validos)`,
            });
        }

        process.send({
            message: `O produto: ${data.product_name} foi adicionado com sucesso.`,
            status: "success",
        });
    } catch (error) {
        return error;
    }
}

process.once("message", main);
