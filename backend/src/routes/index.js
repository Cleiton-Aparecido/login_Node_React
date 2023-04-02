const express = require("express");
const routesLogin = require('./routeLogin.js');
const routesInicio = require('./routesIncio.js');

const app = express();

app.use(routesLogin,
        routesInicio);

module.exports = app