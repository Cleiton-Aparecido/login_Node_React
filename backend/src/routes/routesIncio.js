const express = require("express");


const routes = express.Router()

routes.get('/', (req,res) => {
    res.send("Hello Wosrd!");
});

module.exports = routes