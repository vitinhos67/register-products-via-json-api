const multer = require("multer");
const path = require("path");

const dest = path.resolve(__dirname, "..", "uploads", "data");
const options = {
    dest,
    filename: (request, file, callback) => {
        const {filename} = file;

        return callback(null, filename);
    },
};

module.exports = multer(options);
