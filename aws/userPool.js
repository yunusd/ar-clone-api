const AWSCognito = require('./amazon-cognito-identity.min');

module.exports = () =>
{
    const poolData = {
      UserPoolId: 'eu-central-1_Z6stW5ra1',
      ClientId: '4o3kpuumk1t4lq7g5gol4camak'
    };
    const userPool = new AWSCognito.CognitoUserPool(poolData);
    return userPool;
}
