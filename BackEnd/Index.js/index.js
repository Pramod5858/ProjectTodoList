const express = require("express");

const todolistController = require("../Controller/todolist");

const route = express.Router();

route.get("/list", todolistController.getDetails);
route.post("/addDetails", todolistController.addDetails);
route.delete("/deleteDetails/:id", todolistController.deleteDetails);

route.get("/getidDetails/:id", todolistController.getidDetails);
route.put("/putidDetails/:id", todolistController.putidDetails);


module.exports = route;