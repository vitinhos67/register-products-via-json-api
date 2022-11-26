const fs = require("fs");
const path = require("path");
const async = require("async");
const cp = require("child_process");
const {showProducts} = require('../model/query')
module.exports  ={
    async create(req, res, next) {
    res.type("application/json");

    try {
        const file = req.file;
        const pathFile = path.resolve(__dirname, '..','uploads', 'data', file.filename)
        
        const workerFilePath = path.resolve(__dirname, "..",'..', "worker.js");
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
                        const child = cp.fork(workerFilePath, []);

                        child.on("message", (message) => console.log(message));
                        child.on("error", (err) => res.json(err));
                        child.send(data[i]);
                    }

                    cb(null, `Itens salvos com sucesso`);
                },
            ],
            (err, result) => {
                if (err) {
                    next(err);
                }
                console.log(result);
            }
        );

        res.send(file);
    } catch (e) {
        next(e);
    }
},
async showProducts(req,res, next) {
    try {
        showProducts((err, data) => {
            if(err) {
                next(err)
            }
            return res.status(200).json(data)
        })  
        
        

    } catch (error) {
        next(error)
    }
}
}
