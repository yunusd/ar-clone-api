const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const cors = require('cors');

const config = require('./config/index')

const app = express();
app.use(cors(config.corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

require("./auth/auth");

app.use('/api', passport.authenticate('bearer', {
    session: false
}));


module.exports = app;