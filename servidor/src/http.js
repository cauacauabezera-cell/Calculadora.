const { createServer } = require("http");
const express = require("express");
const { routes } = require("./route");

const app = express();

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const server = createServer(app);

module.exports = { server };
