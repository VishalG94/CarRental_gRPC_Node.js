// Bring Mongoose into the app
var mongoose = require('mongoose');
var { USERNAME, PASSWORD, DATABASE_NAME } = require("../constants/iconstants.js");

// Build the connection string 
var dbURI = 'mongodb+srv://' + USERNAME + ':' + PASSWORD + '@cluster0-lzng9.mongodb.net/' + DATABASE_NAME + '?retryWrites=true&w=majority';

// Create the database connection 
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + DATABASE_NAME);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

// BRING IN YOUR SCHEMAS & MODELS // For example 
require('./address');
require('./card');
require('./category');
require('./location');
require('./reservation');
require('./user');
require('./vehicles');
