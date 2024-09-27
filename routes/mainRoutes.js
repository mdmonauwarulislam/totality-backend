const express = require("express");
const Router = express.Router();

const { userRegistration, userLogin } = require("../controller/usersController");

const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");


// user routes
Router.post("/user/signup", userRegistration);
Router.post("/user/login", userLogin);





module.exports = Router;
