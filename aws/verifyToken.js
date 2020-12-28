const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
const axios = require('axios').default
module.exports = async function (args) {
    try {
        const response = await axios.get("https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_Z6stW5ra1/.well-known/jwks.json");
        //LOGIC
        if (response.status !== 200) return Error('error');
        pems = {};
        var keys = response.data['keys'];
        for (var i = 0; i < keys.length; i++) {
            //Convert each key to PEM
            var key_id = keys[i].kid;
            var modulus = keys[i].n;
            var exponent = keys[i].e;
            var key_type = keys[i].kty;
            var jwk = {
                kty: key_type,
                n: modulus,
                e: exponent
            };
            var pem = jwkToPem(jwk);
            pems[key_id] = pem;
        }
        //validate the token
        var decodedJwt = jwt.decode(args.token, {
            complete: true
        });
        // if (!decodedJwt) {
        //     console.log("Not a valid JWT token");
        //     return;
        // }

        var kid = decodedJwt.header.kid;
        var pem = pems[kid];
        if (!pem) {
            console.log('Invalid token');
            return;
        }

        return jwt.verify(args.token, pem, async function (err, payload) {
            if (err) {
                console.log("Invalid Token.");
            } else {
                console.log("Valid Token.");
                // console.log(payload);

                const COGNITO_URL = `https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_Z6stW5ra1`;
                const {
                    data
                } = await axios.post(COGNITO_URL, {
                    AccessToken: args.token
                }, {
                    headers: {
                        "Content-Type": "application/x-amz-json-1.1",
                        "X-Amz-Target": "AWSCognitoIdentityProviderService.GetUser"
                    }
                });
                //LOGIC
                return data;

            }
        });
    } catch (error) {
        console.log(error)
        return null;
    }

    // const response = await axios.get("url");

    // const verifyToken = request({
    //     url: `https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_Z6stW5ra1/.well-known/jwks.json`,
    //     json: true
    // }, function (error, response, body) {
    // if (!error && response.statusCode === 200) {
    //     pems = {};
    //     var keys = body['keys'];
    //     for (var i = 0; i < keys.length; i++) {
    //         //Convert each key to PEM
    //         var key_id = keys[i].kid;
    //         var modulus = keys[i].n;
    //         var exponent = keys[i].e;
    //         var key_type = keys[i].kty;
    //         var jwk = {
    //             kty: key_type,
    //             n: modulus,
    //             e: exponent
    //         };
    //         var pem = jwkToPem(jwk);
    //         pems[key_id] = pem;
    //     }
    //     //validate the token
    //     var decodedJwt = jwt.decode(args.token, {
    //         complete: true
    //     });
    //     // if (!decodedJwt) {
    //     //     console.log("Not a valid JWT token");
    //     //     return;
    //     // }

    //     var kid = decodedJwt.header.kid;
    //     var pem = pems[kid];
    //     if (!pem) {
    //         console.log('Invalid token');
    //         return;
    //     }

    //     jwt.verify(args.token, pem, function (err, payload) {
    //         if (err) {
    //             console.log("Invalid Token.");
    //         } else {
    //             console.log("Valid Token.");
    //             console.log(payload);
    //             return payload;
    //         }
    //     });
    //     } else {
    //         console.log("Error! Unable to download JWKs");
    //     }
    // });

    // return verifyToken;

};