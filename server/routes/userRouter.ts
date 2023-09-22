import express from 'express';
import { Request, Response } from 'express';
import userController from '../controllers/userController';

const router = express.Router();

// creates account and jwt token
router.post(
  '/signup',
  userController.createUser,
  userController.createToken,
  (req: Request, res: Response) => {
    res.sendStatus(200);
  }
);

// logs in and creates jwt token
router.post(
  '/login',
  userController.verifyUser,
  userController.createToken,
  (req: Request, res: Response) => {
    res.sendStatus(200);
  }
);

// logs out and removes jwt token
router.delete('/logout', 
  userController.deleteToken, 
  (req: Request, res: Response) => {
  res.sendStatus(200);
});

router.get('/notifications', userController.getNotifications, (req: Request, res: Response) => {
  res.status(200).send(res.locals.notificationLog);
})

router.get('/historylog', userController.getHistoryLog, (req: Request, res: Response) => {
  res.status(200).send(res.locals.historyLog);
})

router.patch('/changeinfo', userController.changeInfo, (req: Request, res: Response) => {
  res.status(200);
})

export default router;
