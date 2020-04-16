const express = require("express");
const addressrouter = express.Router();
const addressController = require("../controllers/addressController.js");
const { GET_ADDRESSBYID_ROUTE, GET_ADDRESSESS_ROUTE, POST_ADDRESS_ROUTE, DELETE_ADDRESS_ROUTE, UPDATE_ADDRESS_ROUTE } = require("../constants/iconstants");

addressrouter.route(GET_ADDRESSESS_ROUTE).get(addressController.getAddressess);
addressrouter.route(GET_ADDRESSBYID_ROUTE).get(addressController.getAddressById);
addressrouter.route(POST_ADDRESS_ROUTE).post(addressController.postAddress);
addressrouter.route(DELETE_ADDRESS_ROUTE).delete(addressController.deleteAddress);
addressrouter.route(UPDATE_ADDRESS_ROUTE).put(addressController.updateAddress);

module.exports = addressrouter;