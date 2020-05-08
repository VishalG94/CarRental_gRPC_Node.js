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

const { membershipClient } = require("../client");
module.exports.getMembership = (req, res) => {
    console.log("inside get membership router: "+ req.query);
    membershipClient.get({}, (error, response) => {
        if (!error) {
            console.log("inside get membership router: " + JSON.stringify(response));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(response));
        } else {
            console.log("Error occured while saving membership" + error.message);
            res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
            res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
        }
    })
};

module.exports.postMembership = (req, res) => {
    console.log("inside post membership router: ");
    console.log(JSON.stringify(req.body));
    membershipClient.insert(req.body, (error, membership) => {
        console.log("Callback functions");
        if (!error) {
            console.log("inside post membership router" + JSON.stringify(membership));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(membership));
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

module.exports.updateMembership = (req, res) => {
    console.log("inside update membership router: " + JSON.stringify(req.body));
    membershipClient.update(req.body, (error, membership) => {
        if (!error && membership) {
            if (membership.n === 0) {
                console.log("No records updated" + JSON.stringify(membership.n));
            }
            console.log("inside update membership router" + JSON.stringify(membership));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(membership));
        } else {
            if (error.code === 13) {
                console.log("Membership with id " + req.body._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Membership with id '" + req.body._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};