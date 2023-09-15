const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

// creates account and jwt token
router.post(
  '/signup',
  userController.createUser,
  userController.createToken,
  (req, res) => {
    res.sendStatus(200);
  }
);

// logs in and creates jwt token
router.post(
  '/login',
  userController.verifyUser,
  userController.createToken,
  (req, res) => {
    res.sendStatus(200);
  }
);

// logs out and removes jwt token
router.delete('/logout', userController.deleteToken, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
