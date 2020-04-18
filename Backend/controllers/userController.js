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

const { userClient } = require("../client");
module.exports.getUsers = (req, res) => {
    console.log("inside get user router: ");
    userClient.list(req.query, (error, response) => {
        if (!error) {
            console.log("inside get user router: " + JSON.stringify(response));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(response));
        } else {
            console.log("Error occured while saving user" + error.message);
            res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
            res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
        }
    })
};

// module.exports.getUserById = (req, res) => {
//     console.log("Query params: " + JSON.stringify(req.query));
//     userClient.get(req.query, (error, user) => {
//         if (!error) {
//             console.log("inside get User by id router: " + JSON.stringify(user));
//             res.setHeader(CONTENT_TYPE, APP_JSON);
//             res.status(RES_SUCCESS).end(JSON.stringify(user));
//         } else {
//             if (error.code === 13) {
//                 console.log("User with id " + req.query._id + " not found");
//                 res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
//                 res.status(RES_NOT_FOUND).end("User with id '" + req.query._id + "' not found");
//             } else {
//                 res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
//                 res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
//             }
//         }
//     })
// };

module.exports.getUserById = (req, res) => {
    console.log("Query params: " + JSON.stringify(req.body));
    userClient.get(req.body, (error, user) => {
        if (!error) {
            console.log("inside get User by id router: " + JSON.stringify(user));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(user));
        } else {
            if (error.code === 13) {
                console.log("User with id " + req.body._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("Email or Password Incorrect ");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while fetching data from DB, " + error.message);
            }
        }
    })
};
module.exports.postUser = (req, res) => {
    console.log("inside post User router: " + JSON.stringify(req.body));
    userClient.insert(req.body, (error, user) => {
        console.log("Callback functions");
        if (!error) {
            console.log("inside post User router" + JSON.stringify(user));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(user));
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


module.exports.deleteUser = (req, res) => {
    console.log("inside delete User router: " + JSON.stringify(req.query));
    userClient.delete(req.query, (error, user) => {
        if (!error && user) {
            console.log("inside delete User router" + JSON.stringify(user));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(user));
        } else {
            if (error.code === 13) {
                console.log("User with id " + req.query._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("User with id '" + req.query._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};


module.exports.updateUser = (req, res) => {
    console.log("inside update User router: " + JSON.stringify(req.body));
    userClient.update(req.body, (error, user) => {
        if (!error && user) {
            if (user.n === 0) {
                console.log("No records updated" + JSON.stringify(user.n));
            }
            console.log("inside update User router" + JSON.stringify(user));
            res.setHeader(CONTENT_TYPE, APP_JSON);
            res.status(RES_SUCCESS).end(JSON.stringify(user));
        } else {
            if (error.code === 13) {
                console.log("User with id " + req.body._id + " not found");
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_NOT_FOUND).end("User with id '" + req.body._id + "' not found");
            } else {
                res.setHeader(CONTENT_TYPE, TEXT_PLAIN);
                res.status(RES_BAD_REQUEST).end("Error occured while inserting data into DB, " + error.message);
            }

        }
    });
};