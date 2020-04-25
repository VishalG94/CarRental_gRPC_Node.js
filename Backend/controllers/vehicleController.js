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

const { client } = require("../client");
module.exports.getVehicles = (req, res) => {
    client.list(req.query, (error, vehicles) => {
        if (!error) {
            console.log("inside get vehicles router: " + JSON.stringify(vehicles));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(vehicles));
        } else {
            console.log("Error occured while saving card" + error.message);
            res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
            res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
        }
    })
};

module.exports.getVehicleById = (req, res) => {
    console.log(req.query)
    console.log("Query params: " + JSON.stringify(req.query));
    client.get(req.query, (error, vehicles) => {
        if (!error) {
            console.log("inside get vehicle by id router: " + JSON.stringify(vehicles));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(vehicles));
        } else {
            if (error.code === 13) {
                console.log("Vehicle with id " + req.query._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Vehicle with id '" + req.query._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
            }
        }
    })
};

module.exports.postVehicle = (req, res) => {
    console.log("inside post vehicle router: " + JSON.stringify(req.body));
    client.insert(req.body, (error, vehicle) => {
        console.log("Callback functions");
        if (!error) {
            console.log("inside post vehicle router" + JSON.stringify(vehicle));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(vehicle));
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


module.exports.deleteVehicle = (req, res) => {
    console.log("inside delete vehicle router: " + JSON.stringify(req.query));
    client.delete(req.query, (error, vehicle) => {
        if (!error && vehicle) {
            console.log("inside delete vehicle router" + JSON.stringify(vehicle));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(vehicle));
        } else {
            if (error.code === 13) {
                console.log("Vehicle with id " + req.query._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Vehicle with id '" + req.query._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};


module.exports.updateVehicle = (req, res) => {
    console.log("inside update vehicle router: " + JSON.stringify(req.body));
    client.update(req.body, (error, vehicle) => {
        if (!error && vehicle) {
            if (vehicle.n === 0) {
                console.log("No records updated" + JSON.stringify(vehicle.n));
            }
            console.log("inside update vehicle router" + JSON.stringify(vehicle));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(vehicle));
        } else {
            if (error.code === 13) {
                console.log("Vehicle with id " + req.body._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Vehicle with id '" + req.body._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};