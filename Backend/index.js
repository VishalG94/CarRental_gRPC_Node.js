const express = require("express");

/* Routes import */
const routes = require("./routes/routes");
const addressRoutes = require("./routes/addressRoutes")
const cardRoutes = require("./routes/cardRoutes")
const categoryRoutes = require("./routes/categoryRoutes")
const locationRoutes = require("./routes/locationRoutes")
const reservationRoutes = require("./routes/reservationRoutes")
const userRoutes = require("./routes/userRoutes")
const membershipRoutes = require("./routes/membershipRoutes")


const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const { FRONTEND_URL, SERVER_PORT, RES_SUCCESS } = require("./constants/iconstants");
const corsOptions = {
    origin: "*",
    credentials: true,
    optionsSuccessStatus: RES_SUCCESS
};

let app = express();
app.use("/static", express.static("./public"));
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(bodyParser.urlencoded({ limit: "2mb", extended: true }));

app.use("/", express.static(path.join(__dirname, "public", "data")));
app.use("/", routes);
app.use('/', addressRoutes);
app.use('/', cardRoutes);
app.use('/', locationRoutes);
app.use('/', categoryRoutes);
app.use('/', reservationRoutes);
app.use('/', userRoutes);
app.use('/', membershipRoutes);
app.set("port", SERVER_PORT);


let server = app.listen(app.get("port"), function () {
    let port = server.address().port;
    console.log('server started at port:' + port)

});

module.exports = app;