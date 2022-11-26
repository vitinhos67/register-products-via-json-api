
const {uploadProduct} = require('./src/model/query')
async function main(data) {
    
    try {
    const result = await uploadProduct({
        product_name: data.product_name,
        total_amount: data.total_amount,
        price: data.price,
        category: data.category
})
    if(!result) {
        throw new Error(`O produto ${product_name} não foi adicionado`)
    }

    } catch (error) {
        return error
    }

}

process.on("message", main);
