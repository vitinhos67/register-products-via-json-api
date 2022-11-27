const express = require("express");

const app = express();
const connection = require("./src/config/db/connection");
const {createTable} = require("./src/model/query");
const {router} = require("./router");
const errorHandler = require("./src/middlewares/error");

connection.connect(err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Database conected.");
});

app.use(router);
app.use(errorHandler);
app.listen(3000, async (req, res) => {
    try {
        await createTable();
    } catch (e) {
        return res.status(500).json(e);
    }
});
