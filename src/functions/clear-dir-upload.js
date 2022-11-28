const fs = require("fs").promises;

const path = require("path");
const dir = path.resolve(__dirname, "..", "uploads", "data");

/**
 * @return {void}
 *
 * Tem como objetivo limpar a pasta src/uploads/data
 */

exports.clear = async function () {
    const data = await fs.readdir(dir);
    for (const file in data) {
        fs.unlink(`${dir}/${data[file]}`);
    }
};
