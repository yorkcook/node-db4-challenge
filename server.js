const express = require("express");

const server = express();

const recipeRouter = require("./recipe-router.js");

server.use(express.json());

server.use("/api/recipes", recipeRouter);

module.exports = server;
