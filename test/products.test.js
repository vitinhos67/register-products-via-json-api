require("iconv-lite").encodingExists("foo");
const Products = require("../src/model/Products");

describe("Testa os metodos da classe Products", () => {
    it("addProcuct deve retornar undefined", async () => {
        const result = new Products({
            product_name: "Veja",
            price: 10,
            total_amount: 10,
            category: "Desinfetante",
        });
        

        const createProduct = await result.addProduct();

        expect(createProduct).toBeUndefined();
    });


    it("show deve retornar um array de valores", async () => {


        const result = await Products.show()

        expect(typeof result).toBe('object')

    })

});
