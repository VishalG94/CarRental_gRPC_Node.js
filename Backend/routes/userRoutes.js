const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");


const { GET_USERS_ROUTE, UPDATE_USER_MEMBERSHIP_ROUTE,GET_USERRES_ROUTE, POST_USERBYID_ROUTE, POST_USER_ROUTE, DELETE_USER_ROUTE, UPDATE_USER_ROUTE } = require("../constants/iconstants");


userRouter.route(GET_USERS_ROUTE).get(userController.getUsers);
userRouter.route(GET_USERRES_ROUTE).get(userController.getReservations);

userRouter.route(POST_USERBYID_ROUTE).post(userController.getUserById);
userRouter.route(POST_USER_ROUTE).post(userController.postUser);
userRouter.route(DELETE_USER_ROUTE).delete(userController.deleteUser);
userRouter.route(UPDATE_USER_ROUTE).put(userController.updateUser);
userRouter.route(UPDATE_USER_MEMBERSHIP_ROUTE).put(userController.updateMembership);

module.exports = userRouter;