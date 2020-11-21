const { array } = require('joi');
const {
  registerUserValidation
} = require('../../validation/user')

module.exports = async (_, args, context) => {
  await registerUserValidation.validateAsync(args, {
    abortEarly: false
  });

  //TODO: active name değişecek
  const defaultStatus = await context.models.Status.findAll({
    where: {
      name: "active"
    }
  });
  console.log(defaultStatus.dataValues.id)
  if (defaultStatus.length == 0) {
    inserStatus = await context.models.Status.create({
      name: "active"
    });
    console.log(inserStatus[1].dataValues);
    args.statusId = inserStatus.id;
  } else {
    args.statusId = defaultStatus.dataValues.id
  }

  const user = await context.models.User.create({
    ...args
  });

  const defaultRole = await context.models.Role.findAll({
    where: {
      name: "user"
    }
  });
  if (defaultRole == null) {
    defaultRole = [];
    const role = await context.models.Role.create({
      name: "user"
    });
    defaultRole.push(role);
  }
  const defaultUser_Role = await context.models.User_Role.create({
    userId: user.id,
    roleId: defaultRole[1].id
  });
  user.role = [];
  user.role.push(defaultUser_Role);
  return user;
};