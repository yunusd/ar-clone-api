const BearerStrategy = require('passport-http-bearer').Strategy;
const passport = require('passport');
const verifyToken = require('../aws/verifyToken');
const models = require('../db/models');

passport.use(new BearerStrategy(async (token, done) => {
        if (!token) return done(null, false)

        const payload = await verifyToken({token})
        if (!payload) return done(null,false)
        
        const email = payload.UserAttributes.filter(obj => obj.Name.toLowerCase() === "email")[0].Value;
        const user = await models.User.findOne({where: {email}})
        
        return done(null, user)
    }
));