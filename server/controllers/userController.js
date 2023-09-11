// import bcrypt
// import jwt
// import db
// import env config
const userController = {};

userController.createUser = (req, res, next) => {
  // pull user/pass off req.body
  try {
    // use bcrypt.hash to hash password
    // insert into db using user and hash
    // return next
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

userController.verifyUser = (req, res, next) => {
  // pull user/pass off req.body
  try {
    // find user in db
    // pull password out of user obj
    try {
      // use bcrypt.compare to check password
      // if it doesnt match
      // return next with err message
      // return next
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
