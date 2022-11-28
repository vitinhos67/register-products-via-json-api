const {addProduct} = require("./src/model/query");

function main(data) {
    try {
        const createProduct = addProduct({
            product_name: data.product_name,
            total_amount: data.total_amount,
            price: data.price,
            category: data.category,
        });
        if (!createProduct) {
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
