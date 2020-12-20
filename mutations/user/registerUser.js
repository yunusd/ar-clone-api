const {
  registerUserValidation
} = require('../../validation/user');
const registerUserCognito = require('../../aws/registerUserCognito');
const deleteUserCognito = require('../../aws/deleteUserCognito');
const bcrypt = require('bcrypt');
const {
  has
} = require('lodash');


module.exports = async (_, args, context) => {
  await registerUserValidation.validateAsync(args, {
    abortEarly: false
  });
  args.user_roles = [];

  //TODO: active name değişecek
  const defaultStatus = await context.models.Status.findOne({
    where: {
      name: "active"
    }
  });
  if (defaultStatus == null) {
    insertStatus = await context.models.Status.create({
      name: "active"
    });
    args.statusId = inserStatus.id;
  } else {
    args.statusId = defaultStatus.dataValues.id;
  }
  const defaultRole = await context.models.Role.findOne({
    where: {
      name: "useraqwe"
    }
  });
  if (defaultRole === null) {
    const newRole = await context.models.Role.create({
      name: "user"
    });
    await newRole.save();
    args.user_roles.push({
      roleId: newRole.dataValues.id
    });
  } else {
    args.user_roles.push({
      roleId: defaultRole.dataValues.id
    });
  }


  const user = await context.models.User.create({
    ...args
  }, {
    include: [{
      model: context.models.User_Role,
      as: "user_roles"
    }, {
      model: context.models.Status,
      as: "status"
    }]
  });
  args.isUser=1;
  args.isAdmin=0;

  let cognitoUser;
  const saltRounds = 10;
  await bcrypt.hash(args.password, saltRounds, function (err, hash) {
    args.password = hash;
    const cognitoRegister = registerUserCognito(args);
    cognitoUser = cognitoRegister;
  });

  if (cognitoUser) {
    throw Error;
  }

  return user;
};