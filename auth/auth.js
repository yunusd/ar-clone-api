const BearerStrategy = require('passport-http-bearer').Strategy;
const passport = require('passport');
const verifyToken = require('../aws/verifyToken');

passport.use(new BearerStrategy(

    async function (token, done) {
        if (!token) {
            return done(null, false)
        }
        if (token) {
            const isVerify = await verifyToken({token});
            // console.log(isVerify)
            return done(null,isVerify);            
                 
        }
        return done(null, {
            username: 'test',
            token: token
        })
    }


));