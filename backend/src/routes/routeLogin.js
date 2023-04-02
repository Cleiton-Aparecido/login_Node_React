const express = require("express");
const ControllerLogin = require("../controllers/controllerLogin.js")

const routes = express.Router()

routes.post('/login', ControllerLogin.ValidarLogin);



module.exports = routes