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

const { categoryClient } = require("../client");
module.exports.getCategories = (req, res) => {
    console.log("inside get Category router: ");
    categoryClient.list(req.query, (error, response) => {
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

module.exports.getCategoryById = (req, res) => {
    console.log("Query params: " + JSON.stringify(req.query));
    categoryClient.get(req.query, (error, category) => {
        if (!error) {
            console.log("inside get Category by id router: " + JSON.stringify(category));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(category));
        } else {
            if (error.code === 13) {
                console.log("Category with id " + req.query._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Category with id '" + req.query._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
            }
        }
    })
};

module.exports.postCategory = (req, res) => {
    console.log("inside post Category router: " + JSON.stringify(req.body));
    categoryClient.insert(req.body, (error, category) => {
        console.log("Callback functions");
        if (!error) {
            console.log("inside post Category router" + JSON.stringify(category));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(category));
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


module.exports.deleteCategory = (req, res) => {
    console.log("inside delete Category router: " + JSON.stringify(req.query));
    categoryClient.delete(req.query, (error, category) => {
        if (!error && category) {
            console.log("inside delete Category router" + JSON.stringify(category));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(category));
        } else {
            if (error.code === 13) {
                console.log("Category with id " + req.query._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Category with id '" + req.query._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};


module.exports.updateCategory = (req, res) => {
    console.log("inside update Category router: " + JSON.stringify(req.body));
    categoryClient.update(req.body, (error, category) => {
        if (!error && category) {
            if (category.n === 0) {
                console.log("No records updated" + JSON.stringify(category.n));
            }
            console.log("inside update Category router" + JSON.stringify(category));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(category));
        } else {
            if (error.code === 13) {
                console.log("Category with id " + req.body._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Category with id '" + req.body._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};