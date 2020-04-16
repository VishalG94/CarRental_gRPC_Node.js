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

const { cardClient } = require("../client");
module.exports.getCards = (req, res) => {
    console.log("inside get card router: ");
    cardClient.list(req.query, (error, response) => {
        if (!error) {
            console.log("inside get card router: " + JSON.stringify(response));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(response));
        } else {
            console.log("Error occured while saving card" + error.message);
            res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
            res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
        }
    })
};

module.exports.getCardById = (req, res) => {
    console.log("Query params: " + JSON.stringify(req.query));
    cardClient.get(req.query, (error, card) => {
        if (!error) {
            console.log("inside get card by id router: " + JSON.stringify(card));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(card));
        } else {
            if (error.code === 13) {
                console.log("Card with id " + req.query._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Card with id '" + req.query._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
            }
        }
    })
};

module.exports.postCard = (req, res) => {
    console.log("inside post card router: " + JSON.stringify(req.body));
    cardClient.insert(req.body, (error, card) => {
        console.log("Callback functions");
        if (!error) {
            console.log("inside post card router" + JSON.stringify(card));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(card));
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


module.exports.deleteCard = (req, res) => {
    console.log("inside delete card router: " + JSON.stringify(req.query));
    cardClient.delete(req.query, (error, card) => {
        if (!error && card) {
            console.log("inside delete card router" + JSON.stringify(card));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(card));
        } else {
            if (error.code === 13) {
                console.log("Card with id " + req.query._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Card with id '" + req.query._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};


module.exports.updateCard = (req, res) => {
    console.log("inside update card router: " + JSON.stringify(req.body));
    cardClient.update(req.body, (error, card) => {
        if (!error && card) {
            if (card.n === 0) {
                console.log("No records updated" + JSON.stringify(card.n));
            }
            console.log("inside update card router" + JSON.stringify(card));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(card));
        } else {
            if (error.code === 13) {
                console.log("Card with id " + req.body._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Card with id '" + req.body._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};