const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');

const authRouter = require('./routes/auth');
const {
    required
} = require('joi');

const app = express();

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