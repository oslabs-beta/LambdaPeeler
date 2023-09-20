// // import bcrypt
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// // import jwt
// const jwt = require('jsonwebtoken');
// // import db
// const db = require('../models/userModel')
// // import env config
// require('dotenv').config();

// const userController = {};

// userController.createUser = (req, res, next) => {
//   console.log('inside create user')
//   // pull user/pass/ARN off req.body
//   const { username, password, ARN } = req.body;
//   try {
//     // check if username already exists in DB
//     db.findOne({username: username})
//     .then(obj => {
//       // if so, pause and then notify the user
//       if(obj) {
//         setTimeout(() => {
//           // TODO: notify user that username is taken
//           return next({
//             error: 'An account with this username already exists.'
//           });
//         }, 500);
//       }
//     })
//     // use bcrypt.hash to hash password
//     bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
//       if (err) {
//         console.log(err);
//         return next(err);
//       }
//       // insert into db using user, hash and arn
//       db.create({username: username, password: hashedPassword, ARN: ARN})
//       // store user or arn on cookies or locals to pull and populate role arn on controllers?
//     });
//     res.locals.username = username;
//     console.log(username);
//     res.locals.ARN = ARN;
//     return next();
//   } catch (err) {
//     console.log(err);
//     return next(err);
//   }
// };

// userController.verifyUser = async (req, res, next) => {
//   // pull user/pass off req.body
//   try {
//     const { username, password } = req.body;
//     // find user in db
//     const user = await db.findOne({username: username})
//     let hashedPassword;
//     // if user doesn't exist, set an empty hashedPassword
//     if(!user) {
//       hashedPassword = '';
//     }
//     // otherwise grab hashed pass
//     else {
//       hashedPassword = user.password;
//     }
//     try {
//       // use bcrypt.compare to check password
//       const match = await bcrypt.compare(password, hashedPassword);
//       // if it doesnt match
//       if (!match) {
//         // return next with err message
//         return next({ error: 'Incorrect username or password' });
//       }
//       res.locals.username = username;
//       res.locals.ARN = user.ARN;
//       // return next
//       return next();
//     } catch (err) {
//       console.log(err);
//       return next(err);
//     }
//   } catch (err) {
//     console.log(err);
//     return next(err);
//   }
// };

// userController.createToken = async (req, res, next) => {
//   try {
//     // pull user off res.locals
//     const {username, ARN} = res.locals;
//     // find user in db
//     const user = await db.findOne({username: username});
//     // use jwt.sign on user obj with secret env key
//     const token = await jwt.sign({username: user.username}, process.env.ACCESS_TOKEN_SECRET, {
//       expiresIn: 60 * 60// Expires in one hour
//     })
//     // create cookie with token
//     await res.cookie('token', token, {
//       maxAge: (60 * 60 * 1000), // Expires in one hour
//       httpOnly: true
//     })
//     // create cookie with arn 
//     await res.cookie('ARN', ARN);
//     // give this an expiration to persist session?
//     // ex. delete when they logout
//     // and delete after an hour
//     return next();
//   } catch (err) {
//     console.log(err);
//     return next(err);
//   }
// };

// userController.verifyToken = async (req, res, next) => {
//   // pull token from cookies
//   const {token} = req.cookies;
//   try {
//     // use jwt.verify to check if token is valid with secret env key
//     await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, success) => {
//       if (err) {
//         console.log(err);
//         return next(err)
//       }
//       return next();
//     })
//   } catch (err) {
//     console.log(err);
//     return next(err);
//   }
// };

// userController.deleteToken = (req, res, next) => {
//   try {
//     // use res.clearCookie to delete both cookies
//     res.clearCookie('token');
//     return next();
//   } catch (err) {
//     console.log(err);
//     return next(err);
//   }
// };

// module.exports = userController;
