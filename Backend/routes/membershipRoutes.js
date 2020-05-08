const express = require("express");
const membershiprouter = express.Router();
const membershipController = require("../controllers/membershipController");
const { GET_MEMBERSHIP_ROUTE, POST_MEMBERSHIP_ROUTE, UPDATE_MEMBERSHIP_ROUTE } = require("../constants/iconstants");

membershiprouter.route(GET_MEMBERSHIP_ROUTE).get(membershipController.getMembership);
membershiprouter.route(POST_MEMBERSHIP_ROUTE).post(membershipController.postMembership);
membershiprouter.route(UPDATE_MEMBERSHIP_ROUTE).put(membershipController.updateMembership);

module.exports = membershiprouter;