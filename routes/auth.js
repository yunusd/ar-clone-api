var express = require('express');
const db = require('../db/models');
const registerUserCognito = require('../aws/registerUserCognito');
const {
  registerUserValidation
} = require('../validation/user');
const bcrypt = require('bcrypt');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('unauthorized');
});

router.post('/registerUser', async (req, res, next) => {
  try {
    await registerUserValidation.validateAsync(req.body, {
      abortEarly: false
    });
  } catch (error) {
    res.send(error).json()
  }
  let args = {...req.body};

  args.user_roles = [];

  //TODO: active name değişecek
  const defaultStatus = await db.Status.findOne({
    where: {
      name: "active"
    }
  });
  if (defaultStatus == null) {
    insertStatus = await db.Status.create({
      name: "active"
    });
    args.statusId = inserStatus.id;
  } else {
    args.statusId = defaultStatus.dataValues.id;
  }
  const defaultRole = await db.Role.findOne({
    where: {
      name: "user"
    }
  });
  if (defaultRole === null) {
    const newRole = await db.Role.create({
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


  const user = await db.User.create({
    ...args
  }, {
    include: [{
      model: db.User_Role,
      as: "user_roles"
    }, {
      model: db.Status,
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

  res.send(user).json();
});

module.exports = router;
