const express = require('express')
const app = express()
const { router } = require("./router");
const errorHandler = require("./src/middlewares/error");
const connection = require('./src/config/db/connection')

connection.connect(err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Database conected."); 
});

app.use(router);
app.use(errorHandler);

if (process.env.NODE_ENV === 'test') {
    module.exports = app;
} else {
    app.listen(config.port, () => {
        console.log(`Server listening ${config.port}`); 
    });
}











