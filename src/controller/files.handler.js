const fs = require("fs");
const path = require("path");
const async = require("async");
const cp = require("child_process");
const {showProducts} = require("../model/query");
const {clear} = require("../functions/clear-dir-upload");
const NotFoundError = require("../err/NotFoundError");
const InternalError = require("../err/InternalError");
const Products = require("../model/Products");

module.exports = {
    async create(req, res, next) {
        res.type("application/json");

        try {
            const {file} = req;

            if (!file) throw new NotFoundError("Nenhum arquivo passado");

            const pathFile = path.resolve(__dirname, "..", "uploads", "data", file.filename);

            const workerFilePath = path.resolve(__dirname, "..", "..", "worker.js");
            async.waterfall(
                [
                    function (cb) {
                        fs.readFile(pathFile, (err, chuck) => {
                            const data = JSON.parse(chuck);
                            cb(err, data);
                        });
                    },
                    function (data, cb) {
                        for (let i = 0; i < data.length; i++) {
                            for (let k in data[i]) {
                                if (data[i][k] == false) {
                                    res.status(404).json({
                                        message: "Valor vazio encontrado.",
                                        statusCode: 404,
                                        type: "value_is_empty",
                                    });
                                }
                            }

                            const child = cp.fork(workerFilePath, []);

                            child.on("error", err => console.log(err));
                            child.on("message", message => {
                                if (message.status === "miss") {
                                    return res.status(400).json({
                                        message: message.message,
                                        status: message.status,
                                    });
                                }
                            });
                            child.on("close", code => {
                                console.log(code);
                            });

                            child.send(data[i]);
                        }

                        cb(null, {
                            data,
                            message: "Produtos adicionados com sucesso",
                        });
                    },
                ],
                (err, result) => {
                    if (err) {
                        throw new InternalError("Nao foi possivel adicionar");
                    }
                    clear();
                    res.status(200).json(result);
                }
            );
        } catch (error) {
            next(error);
        }
    },
    async showProducts(req, res, next) {
        try {

            const products = await Products.show()

            return res.status(200).json(products)

        } catch (error) {
            next(error);
        }
    },
};
