const express = require("express");
const router = express.Router();
const upload = require("./src/config/multer.config");

const files= require("./src/controller/files.handler");



router.get('/files', files.showProducts)

router.post("/files", upload.single('data'), files.create);

exports.router = router;
