const express = require("express");
const locationrouter = express.Router();
const locationController = require("../controllers/locationController.js");
const { GET_LOCATIONS_ROUTE, GET_LOCATIONBYID_ROUTE, POST_LOCATION_ROUTE, DELETE_LOCATION_ROUTE, UPDATE_LOCATION_ROUTE, POST_ADDVEHICLETOLOCATION_ROUTE, PUT_REASSIGNVEHICLETOLOCATION_ROUTE } = require("../constants/iconstants");

locationrouter.route(GET_LOCATIONS_ROUTE).get(locationController.getLocations);
locationrouter.route(GET_LOCATIONBYID_ROUTE).get(locationController.getLocationById);
locationrouter.route(POST_LOCATION_ROUTE).post(locationController.postLocation);
locationrouter.route(POST_ADDVEHICLETOLOCATION_ROUTE).post(locationController.addVehicleToLocation);
locationrouter.route(DELETE_LOCATION_ROUTE).delete(locationController.deleteLocation);
locationrouter.route(UPDATE_LOCATION_ROUTE).put(locationController.updateLocation);
locationrouter.route(PUT_REASSIGNVEHICLETOLOCATION_ROUTE).put(locationController.reassignVehicleToLocation);




module.exports = locationrouter;