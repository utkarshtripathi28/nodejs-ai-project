const routes = require("express").Router();
const userController = require("../controllers/userController");
routes.post("/input", userController.getInput);
module.exports= routes;
