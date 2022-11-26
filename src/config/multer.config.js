const multer = require("multer");
const path = require("path");

const dest = path.resolve(__dirname, "..", "uploads", "data");
console.log(dest);
const options = {
    dest,
    filename: (request, file, callback) => {
        const filename = file.filename;

        return callback(null, filename);
    },
};

module.exports = multer(options);
