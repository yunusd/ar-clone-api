const AWSCognito = require('./amazon-cognito-identity.min');

module.exports = () =>
{
    const poolData = {
      UserPoolId: 'eu-central-1_eYPJLZjAO',
      ClientId: '2orclpiag0ntb9eq0bh4e4h3u6'
    };
    const userPool = new AWSCognito.CognitoUserPool(poolData);
    return userPool;
}
