const {
  registerUserValidation
} = require('../../validation/user');
const registerUserCognito = require('../../aws/registerUserCognito');
const deleteUserCognito = require('../../aws/deleteUserCognito');

module.exports = async (_, args, context) => {
  await registerUserValidation.validateAsync(args, {
    abortEarly: false
  });

  //TODO: active name değişecek
  const defaultStatus = await context.models.Status.findOne({
    where: {
      name: "active"
    }
  });
  
  console.log(defaultStatus.dataValues.id);
  if (defaultStatus == null) {
    insertStatus = await context.models.Status.create({
      name: "active"
    });
    args.statusId = inserStatus.id;
  } else {
    args.statusId = defaultStatus.dataValues.id;
  }

  const user = await context.models.User.create({
    ...args
  });

  const defaultRole = await context.models.Role.findOne({
    where: {
      name: "user"
    }
  });

  if (defaultRole === null) {
    defaultRole = await context.models.Role.create({
      name: "user"
    });
  }
  const defaultUser_Role = await context.models.User_Role.create({
    userId: user.id,
    roleId: defaultRole.dataValues.id
  });
  user.role = [];
  user.role.push(defaultUser_Role);

  // TODO : password eklendiğinde açılacak
  // const cognitoRegister = registerUserCognito(args);
  
  return user;
};