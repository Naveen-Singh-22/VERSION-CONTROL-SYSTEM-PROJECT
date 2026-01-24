const express = require("express");

const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/allUsers", userController.getALLUsers);
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/userprofile", userController.getUserProfile);
userRouter.put("/updateprofile", userController.updateUserProfile);
userRouter.delete("/deleteprofile", userController.deleteUserProfile);

module.exports = userRouter;