const {
    CONTENT_TYPE,
    APP_JSON,
    RES_SUCCESS,
    RES_BAD_REQUEST,
    RES_NOT_FOUND,
    RES_DUPLICATE_RESOURCE,
    TEXT_PLAIN,
    RES_INTERNAL_SERVER_ERROR
} = require("../constants/iconstants");

const { reservationClient } = require("../client");
module.exports.getReservations = (req, res) => {
    console.log("inside get Reservation router: ");
    reservationClient.list(req.query, (error, response) => {
        if (!error) {
            console.log("inside get Reservation router: " + JSON.stringify(response));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(response));
        } else {
            console.log("Error occured while saving Reservation" + error.message);
            res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
            res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
        }
    })
};

module.exports.getReservationById = (req, res) => {
    console.log("Query params: " + JSON.stringify(req.query));
    reservationClient.get(req.query, (error, reservation) => {
        if (!error) {
            console.log("inside get Reservation by id router: " + JSON.stringify(reservation));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(reservation));
        } else {
            if (error.code === 13) {
                console.log("Reservation with id " + req.query._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Reservation with id '" + req.query._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
            }
        }
    })
};



// module.exports.getReservationByUserId = (req, res) => {
//     console.log("Query params: " + JSON.stringify(req.query));
//     reservationClient.getByUserId(req.query, (error, reservation) => {
//         if (!error) {
//             console.log("inside get Reservation by id router: " + JSON.stringify(reservation));
//             res.setHeader(CONTENT_TYPE, APP_JSON);
//             res.status(RES_SUCCESS).end(JSON.stringify(reservation));
//         } else {
//             if (error.code === 13) {
//                 console.log("Reservation with id " + req.query._id + " not found");
//                 res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
//                 res.status(RES_NOT_FOUND).end("Reservation with id '" + req.query._id + "' not found");
//             } else {
//                 res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
//                 res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
//             }
//         }
//     })
// };



module.exports.postReservation = (req, res) => {
    console.log("inside post Reservation router: " + JSON.stringify(req.body));
    reservationClient.insert(req.body, (error, reservation) => {
        console.log("Callback functions");
        if (!error) {
            console.log("inside post Reservation router" + JSON.stringify(reservation));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(reservation));
        } else {
            if (error.code === 11000) {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_DUPLICATE_RESOURCE).end("Duplicate entry, " + error.message);
            } else {
                console.log("Error occured while saving car" + error.message);
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};


module.exports.deleteReservation = (req, res) => {
    console.log("inside delete Reservation router: " + JSON.stringify(req.query));
    reservationClient.delete(req.query, (error, reservation) => {
        if (!error && reservation) {
            console.log("inside delete Reservation router" + JSON.stringify(reservation));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(reservation));
        } else {
            if (error.code === 13) {
                console.log("Reservation with id " + req.query._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Reservation with id '" + req.query._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};


module.exports.updateReservation = (req, res) => {
    console.log("inside update Reservation router: " + JSON.stringify(req.body));
    reservationClient.update(req.body, (error, reservation) => {
        if (!error && reservation) {
            if (reservation.n === 0) {
                console.log("No records updated" + JSON.stringify(reservation.n));
            }
            console.log("inside update Reservation router" + JSON.stringify(reservation));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(reservation));
        } else {
            if (error.code === 13) {
                console.log("Reservation with id " + req.body._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Reservation with id '" + req.body._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};