var express = require('express');
const db = require('../db/models');
const registerUserCognito = require('../aws/registerUserCognito');
const {
  registerUserValidation
} = require('../validation/user');
const bcrypt = require('bcrypt');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(401).json('unauthorized');
});

router.post('/registerUser', async (req, res, next) => {
  await registerUserValidation.validateAsync(req.body, {
    abortEarly: false
  });
  let args = {
    ...req.body
  };

  args.user_roles = [];

  args.status = "active";

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
    }]
  });
  args.isUser = 1;
  args.isAdmin = 0;

  let cognitoUser;
  const saltRounds = 10;
  try {
    const cognitoRegister = registerUserCognito(args);
    cognitoUser = cognitoRegister;
  } catch (error) {
    res.status(500).json({
      error: error
    });
  }

  res.json(user);
});

module.exports = router;