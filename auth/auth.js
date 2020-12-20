const BearerStrategy = require('passport-http-bearer').Strategy;
const passport = require('passport');
const verifyToken = require('../aws/verifyToken');

passport.use(new BearerStrategy(

    function (token, done) {
        if (!token) {
            return done(null, false)
        }
        if (token) {
// TODO : token doğru ise serilize edilecek. yada db den çekilecek.
            return done(null,verifyToken({token}))            
        }
        return done(null, {
            username: 'test',
            token: token
        })
    }


));