const userPool = require('./userPool');

module.exports = async function (args) {

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: args.username,
        Password: args.password,
    });

    var userData = {
        Username: args.username,
        Pool: userPool()
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            cognitoUser.deleteUser((err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully deleted the user.");
                    console.log(result);
                }
            });
        },
        onFailure: function (err) {
            console.log(err);
        },
    });
};