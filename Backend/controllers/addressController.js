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

const { addressClient } = require("../client");
module.exports.getAddressess = (req, res) => {
    console.log("inside get address router: ");
    addressClient.list(req.query, (error, response) => {
        if (!error) {
            console.log("inside get address router: " + JSON.stringify(response));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(response));
        } else {
            console.log("Error occured while saving address" + error.message);
            res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
            res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
        }
    })
};

module.exports.getAddressById = (req, res) => {
    console.log("Query params: " + JSON.stringify(req.query));
    addressClient.get(req.query, (error, address) => {
        if (!error) {
            console.log("inside get address by id router: " + JSON.stringify(address));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(address));
        } else {
            if (error.code === 13) {
                console.log("Address with id " + req.query._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Address with id '" + req.query._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
            }
        }
    })
};

module.exports.postAddress = (req, res) => {
    console.log("inside post address router: ");
    console.log(JSON.stringify(req.body));
    addressClient.insert(req.body, (error, address) => {
        console.log("Callback functions");
        if (!error) {
            console.log("inside post address router" + JSON.stringify(address));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(address));
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


module.exports.deleteAddress = (req, res) => {
    console.log("inside delete address router: " + JSON.stringify(req.query));
    addressClient.delete(req.query, (error, address) => {
        if (!error && address) {
            console.log("inside delete address router" + JSON.stringify(address));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(address));
        } else {
            if (error.code === 13) {
                console.log("Address with id " + req.query._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Address with id '" + req.query._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};


module.exports.updateAddress = (req, res) => {
    console.log("inside update address router: " + JSON.stringify(req.body));
    addressClient.update(req.body, (error, address) => {
        if (!error && address) {
            if (address.n === 0) {
                console.log("No records updated" + JSON.stringify(address.n));
            }
            console.log("inside update address router" + JSON.stringify(address));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(address));
        } else {
            if (error.code === 13) {
                console.log("Address with id " + req.body._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Address with id '" + req.body._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};