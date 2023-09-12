const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post(
  '/signup',
  userController.createUser,
  userController.createToken,
  (req, res) => {
    res.sendStatus(200);
  }
);

router.get(
  '/login',
  userController.verifyUser,
  userController.createToken,
  (req, res) => {
    res.sendStatus(200);
  }
);

router.delete('/logout', userController.deleteToken, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
