require('dotenv').config()
const app = require('./app')
const {createTable} = require("./src/model/query");

const PORT = process.env.PORT

app.listen(PORT, async (req, res) => {
     try {
         await createTable();
     } catch (e) {
         return res.status(500).json(e);
     }
 }) 
 
 