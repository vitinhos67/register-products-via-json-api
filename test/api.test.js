const app = require("../app");
const request = require("supertest");

describe("Testara os metodos da rota /files", () => {
    it("Deve retornar 200 para o metodo GET", async () => {
        const result = await request(app).get("/files");

        expect(result.statusCode).toBe(200);
    });
});
