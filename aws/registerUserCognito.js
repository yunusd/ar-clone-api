const userPool = require('./userPool');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

module.exports = async (args) => {

  var attributeList = [];
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"name",Value:args.firstName}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"given_name",Value:args.lastName}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"birthdate",Value:args.birthDate}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"address",Value:args.address}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email",Value:args.email}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"phone_number",Value:args.phoneNumber}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"nickname",Value:args.userName}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"isAdmin",Value:args.isAdmin}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"isUser",Value:args.isUser}));

  var user = userPool().signUp(args.email, args.password, attributeList, null, function(err, result){
      if (err) {
          console.log(err);
          return;
      }
      cognitoUser = result.user;
      console.log('user name is ' + cognitoUser.getUsername());
      return cognitoUser;
  });

  return user;
};
