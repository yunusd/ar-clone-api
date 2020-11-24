const userPool = require('./userPool');
const AWS = require('AWS');
// TODO : aws için farklı modüle alınabilir kontrol edilecek.

module.exports = async function (args) {
    const userData = {
        Username: args.userName,
        Pool: userPool()
    };
    const cognitoUser = new AWS.CognitoIdentityServiceProvider.CognitoUser(userData);
    cognitoUser.confirmRegistration(args.verifyNumber, true, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('call result: ' + result);
        return result;
    });
};