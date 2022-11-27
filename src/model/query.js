const connection = require("../config/db/connection");

exports.createTable = function () {
    const query = `CREATE TABLE IF NOT EXISTS products 
    (
        product_id INT NOT NULL AUTO_INCREMENT,
        product_name VARCHAR(255) NOT NULL,
        price FLOAT NOT NULL,
        total_amount INT(3),
        category VARCHAR(255),
        PRIMARY KEY(product_id)

    )`;

    connection.query(query, err => {
        if (err) {
            console.log(err);
            return;
        }
    });
};

exports.uploadProduct = async function ({product_name, total_amount, price, category}) {
    const query = `INSERT INTO products (
        product_name ,
        total_amount,
        price,
        category
    ) VALUES (?,?,?,?)`;

    connection.query(query, [product_name, total_amount, price, category], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        return result;
    });
};

exports.showProducts = cb => {
    const query = "SELECT * FROM products";

    connection.query(query, (err, data) => {
        if (err) {
            return cb(err);
        }
        cb(null, data);
    });
};
