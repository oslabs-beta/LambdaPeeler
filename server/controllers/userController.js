// import bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;
// import jwt
const jwt = require('jsonwebtoken');
// import db
// import env config
require('dotenv').config();

const userController = {};

userController.createUser = (req, res, next) => {
  // pull user/pass off req.body
  const { username, password } = req.body;
  try {
    // use bcrypt.hash to hash password
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
      // insert into db using user and hash
      // store user or arn on cookies or locals to pull and populate role arn on controllers?
    });
    // return next
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

userController.verifyUser = (req, res, next) => {
  // pull user/pass off req.body
  const { username, password } = req.body;
  try {
    // find user in db
    // hashedPassword = pull password out of user obj
    try {
      // use bcrypt.compare to check password
      const match = bcrypt.compare(password, hashedPassword);
      // if it doesnt match
      if (!match) {
        // return next with err message
        return next({ error: 'Incorrect username or password' });
      }
      // return next
      return next();
    } catch (err) {
      console.log(err);
      return next(err);
    }
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

userController.createToken = (req, res, next) => {
  // pull user off res.locals
  try {
    // find user in db
    // use jwt.sign on user obj with secret env key
    // create cookie with token
    // give this an expiration to persist session?
    // ex. delete when they logout
    // and delete after an hour
    // return next
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

userController.verifyToken = (req, res, next) => {
  // pull token from cookies
  try {
    // use jwt.verify to check if token is valid with secret env key
    // return next
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

userController.deleteToken = (req, res, next) => {
  try {
    // use res.clearCookie to delete both cookies
    // return next
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

module.exports = userController;
