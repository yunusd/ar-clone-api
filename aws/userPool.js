const AWSCognito = require('./amazon-cognito-identity.min');
const {cognitoOptions} = require('../config');

module.exports = () =>
{
    const poolData = {
      UserPoolId: cognitoOptions.userPoolId,
      ClientId: cognitoOptions.clientId
    };
    const userPool = new AWSCognito.CognitoUserPool(poolData);
    return userPool;
}
