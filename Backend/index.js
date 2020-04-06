const express = require("express");
const app = express();
// const routes = require("./routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require('cookie-parser');

app.use(bodyParser.json({ limit: "2mb" }));
app.use(bodyParser.urlencoded({ limit: "2mb", extended: true }));

const { FRONTEND_URL, SERVER_PORT, RES_SUCCESS } = require("./constants/iconstants");
const corsOptions = {
    origin: FRONTEND_URL,
    credentials: true,
    optionsSuccessStatus: RES_SUCCESS
};
app.use(cookieParser());
app.use(cors(corsOptions));
app.set("port", SERVER_PORT);
// app.use("/", routes)


let server = app.listen(app.get("port"), () => {
    let port = server.address().port;
    console.log('server started at port:', port)
})



