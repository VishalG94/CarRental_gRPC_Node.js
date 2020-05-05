const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController.js");
const { GET_VEHICLES_ROUTE, GET_VEHICLEBYID_ROUTE, POST_VEHICLE_ROUTE, DELETE_VEHICLE_ROUTE, UPDATE_VEHICLE_ROUTE,DELETE_VEHICLE_FROM_LOCATION_ROUTE } = require("../constants/iconstants");

router.route(GET_VEHICLES_ROUTE).get(vehicleController.getVehicles);
router.route(GET_VEHICLEBYID_ROUTE).get(vehicleController.getVehicleById);
router.route(POST_VEHICLE_ROUTE).post(vehicleController.postVehicle);
router.route(DELETE_VEHICLE_ROUTE).delete(vehicleController.deleteVehicle);
router.route(UPDATE_VEHICLE_ROUTE).put(vehicleController.updateVehicle);
router.route(DELETE_VEHICLE_FROM_LOCATION_ROUTE).delete(vehicleController.deleteVehicleFromLoaction);

module.exports = router;