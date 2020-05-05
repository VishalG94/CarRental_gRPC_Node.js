const express = require("express");
const reservationRouter = express.Router();
const reservationController = require("../controllers/reservationController");
const { GET_RESERVATIONS_ROUTE, GET_RESERVATIONBYUSERID_ROUTE, GET_RESERVATIONBYID_ROUTE, POST_RESERVATION_ROUTE, DELETE_RESERVATION_ROUTE, UPDATE_RESERVATION_ROUTE } = require("../constants/iconstants");

reservationRouter.route(GET_RESERVATIONS_ROUTE).get(reservationController.getReservations);
reservationRouter.route(GET_RESERVATIONBYID_ROUTE).get(reservationController.getReservationById);
// reservationRouter.route(GET_RESERVATIONBYUSERID_ROUTE).get(reservationController.getReservationByUserId);
reservationRouter.route(POST_RESERVATION_ROUTE).post(reservationController.postReservation);
reservationRouter.route(DELETE_RESERVATION_ROUTE).delete(reservationController.deleteReservation);
reservationRouter.route(UPDATE_RESERVATION_ROUTE).put(reservationController.updateReservation);

module.exports = reservationRouter;