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

exports.addProduct = async function ({product_name, total_amount, price, category}) {
    const query = `INSERT INTO products (
        product_name ,
        total_amount,
        price,
        category
    ) VALUES (?,?,?,?)`;

    return new Promise((resolve, reject) => {
        connection.query(query, [product_name, total_amount, price, category], (err, result) => {
            if (err) {
                reject(err);
            }

            resolve({
                status: "Produto Adicionado",
                insertId: result.insertId,
            });
        });
    });
};

exports.showProducts = cb => {
    const query = "SELECT * FROM products";

    return new Promise((resolve, reject) => {
        connection.query(query, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};
