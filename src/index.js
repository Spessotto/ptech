moment = require('moment');
request = require('request');
//const morgan = require('morgan');
const cors = require('cors');
const express = require("express");
const bodyParser = require('body-parser');
app = express();
router = express.Router();
require('dotenv').config({});
const jwtUtil = require("./utils/jwt");


//Middlewares
app.use(cors())
app.use(bodyParser.json());

//Cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,Authorization');
    next();
});


//Interceptor
app.use(function (req, res, next) {
    var jwt = new jwtUtil();

    //if (req.path.indexOf("/items") != -1 ) {
    if (req.path.indexOf("/items") != -1 || req.path.indexOf("/groups") != -1) {
        if (!req.headers.authorization) {
            console.log("error: Authorization header must be provided.");
            res.status(401).json("error: Authorization header must be provided.");
        }
        else {
            let tokenJWT = req.headers.authorization;
            let autorizado = jwt.verifyJWT(tokenJWT);

            if (autorizado)
                next();
            else {
                console.log("Error: invalid authorization token.");
                res.status(401).json("Error: invalid authorization token.");
            }
        }
    }
    else
        next();

});


//BD
require('./config/DB/connection');

//Routes
require("./routes/loginRoutes");
require("./routes/itemRoutes");
require("./routes/groupRoutes");
require("./routes/swaggerRoutes");

sequelize.sync().then(() => {
    var SERVER_PORT = process.env.SERVER_PORT || 8080;
    app.listen(SERVER_PORT, () => {
        console.log(`PTech API started: http://localhost:${SERVER_PORT}`);
    });
});