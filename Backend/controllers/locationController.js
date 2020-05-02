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

const { locationClient } = require("../client");
module.exports.getLocations = (req, res) => {
    console.log("inside get Location router: ");
    locationClient.list(req.query, (error, response) => {
        if (!error) {
            console.log("inside get Location router: " + JSON.stringify(response));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(response));
        } else {
            console.log("Error occured while saving Location" + error.message);
            res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
            res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
        }
    })
};

module.exports.getLocationById = (req, res) => {
    console.log("Query params: " + JSON.stringify(req.query));
    locationClient.get(req.query, (error, location) => {
        if (!error) {
            console.log("inside get Location by id router: " + location.ADDRESS);
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(location));
        } else {
            if (error.code === 13) {
                console.log("Location with id " + req.body._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Location with id '" + req.query._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
            }
        }
    })
};

module.exports.postLocation = (req, res) => {
    console.log("inside post Location router: " + JSON.stringify(req.body));
    locationClient.insert(req.body, (error, location) => {
        console.log("Callback functions");
        if (!error) {
            console.log("inside post Location router" + JSON.stringify(location));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(location));
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


module.exports.deleteLocation = (req, res) => {
    console.log(req.query);
    locationClient.delete(req.query, (error, location) => {
        if (!error && location) {
            console.log("inside delete Location router" + JSON.stringify(location));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(location));
        } else {
            if (error.code === 13) {
                console.log("Location with id " + req.body._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Location with id '" + req.query._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};


module.exports.updateLocation = (req, res) => {
    console.log("inside update Location router: " + JSON.stringify(req.body));
    locationClient.update(req.body, (error, location) => {
        if (!error && location) {
            if (location.n === 0) {
                console.log("No records updated" + JSON.stringify(location.n));
            }
            console.log("inside update Location router" + JSON.stringify(location));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(location));
        } else {
            if (error.code === 13) {
                console.log("Location with id " + req.body._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Location with id '" + req.body._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};


module.exports.addVehicleToLocation = (req, res) => {
    console.log("inside add vehicle to Location router: " + JSON.stringify(req.body));
    locationClient.addVehicle(req.body, (error, location) => {
        if (!error && location) {
            if (location.n === 0) {
                console.log("No records updated" + JSON.stringify(location.n));
            }
            console.log("inside add vehicle Location router" + JSON.stringify(location));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(location));
        } else {
            if (error.code === 13) {
                console.log("Location with id " + req.body._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Location with id '" + req.body._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};