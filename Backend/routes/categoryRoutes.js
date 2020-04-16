const express = require("express");
const categoryrouter = express.Router();
const categoryController = require("../controllers/categoryController.js");
const { GET_CATEGORIES_ROUTE, GET_CATEGORYBYID_ROUTE, POST_CATEGORY_ROUTE, DELETE_CATEGORY_ROUTE, UPDATE_CATEGORY_ROUTE } = require("../constants/iconstants");

categoryrouter.route(GET_CATEGORIES_ROUTE).get(categoryController.getCategories);
categoryrouter.route(GET_CATEGORYBYID_ROUTE).get(categoryController.getCategoryById);
categoryrouter.route(POST_CATEGORY_ROUTE).post(categoryController.postCategory);
categoryrouter.route(DELETE_CATEGORY_ROUTE).delete(categoryController.deleteCategory);
categoryrouter.route(UPDATE_CATEGORY_ROUTE).put(categoryController.updateCategory);

module.exports = categoryrouter;