import bcrypt from 'bcrypt';
// import bcrypt
const saltRounds: number = 10;
// import jwt
import jwt from 'jsonwebtoken';
// import db
import User from '../models/userModel';
import { IUser } from '../models/userModel';
// import env config
import dotenv from 'dotenv';
dotenv.config();

import { Request, Response, NextFunction } from 'express';
import ErrorMessage from '../models/notificationModel';
import { IError } from '../models/notificationModel';
import HistoryLog from '../models/historyLogModel';
import { IHistory } from '../models/historyLogModel';

const userController: any = {
    createUser: async (req: Request, res: Response, next: NextFunction) => {
      // pull user/pass/ARN off req.body
      //const { username, password, ARN } = req.body;
      const username: string = req.body.username;
      const password: string = req.body.password;
      const region: string = req.body.region;
      const ARN: string = req.body.ARN;
      try {
        // use bcrypt.hash to hash password
        bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
          if (err) {
            console.log(err);
            return next(err);
          }
          // insert into db using user, hash and arn
          try {
            await User.create({username: username, password: hashedPassword, ARN: ARN, region: region})
            res.locals.username = username;
            res.locals.region = region;
            res.locals.ARN = ARN;
            return next();
          } catch(err) {
            console.log('error creating user');
            return next(err)
          };
          // store user or arn on cookies or locals to pull and populate role arn on controllers?
        }); 
      } catch (err) {
        console.log(err);
        return next(err);
      }
    },
  
    verifyUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      // pull user/pass off req.body
      try {
        const username: string = req.body.username;
        const password: string = req.body.password;
        // find user in db
        const user = await User.findOne({username: username}) as IUser;
        let hashedPassword: string;
        // if user doesn't exist, set an empty hashedPassword
        if(!user) {
          hashedPassword = '';
        }
        // otherwise grab hashed pass
        else {
          hashedPassword = user.password;
        }
        try {
          // use bcrypt.compare to check password
          const match: boolean = await bcrypt.compare(password, hashedPassword);
          // if it doesnt match
          if (!match) {
            // return next with err message
            return next({
              log:
                `Failed to login.`,
              status: 400,
              //basic message to user
              message: {err: 'Failed to login'},
            })
          }
          res.locals.username = username;
          res.locals.ARN = user.ARN;
          res.locals.region = user.region;
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
    },
    createToken: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        // pull user off res.locals
        const username: string = res.locals.username;
        const ARN: string = res.locals.ARN;
        const region: string = res.locals.region;
        // find user in db
        const user = await User.findOne({username: username}) as IUser;
        // use jwt.sign on user obj with secret env key
        const token = await jwt.sign({username: user.username}, process.env.ACCESS_TOKEN_SECRET as jwt.Secret, {
          expiresIn: 60 * 60// Expires in one hour
        })
        // create cookie with token
        await res.cookie('token', token, {
          maxAge: (60 * 60 * 1000), // Expires in one hour
          httpOnly: true
        })
        // create cookie with arn 
        await res.cookie('ARN', ARN);
        await res.cookie('region', region);
        // give this an expiration to persist session?
        // ex. delete when they logout
        // and delete after an hour
        return next();
      } catch (err) {
        console.log(err);
        return next(err);
      }
    },
    verifyToken: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      // pull token from cookies
      const token: string = req.cookies.token;
      try {
        // use jwt.verify to check if token is valid with secret env key
        await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, success) => {
          if (err) {
            console.log(err);
            return next(err)
          }
          return next();
        })
      } catch (err) {
        console.log(err);
        return next(err);
      }
    },
  
    deleteToken: (req: Request, res: Response, next: NextFunction): void => {
      try {
        // use res.clearCookie to delete all cookies
        res.clearCookie('token');
        res.clearCookie('ARN');
        res.clearCookie('region');
        return next();
      } catch (err) {
        console.log(err);
        return next(err);
      }
    },

    getNotifications: async (req: Request, res: Response, next: NextFunction) => {
      try {
        // pull arn from cookie
        const ARN: string = req.cookies['ARN'];
        const notifications: string[] = []
        // search notification db for notifications with corresponding ARN
        // send back all notifications

        const notificationLog = await ErrorMessage.find({ARN: ARN});
        if(!notificationLog){
          return next({
            log: 'Error in getNotifications conditional',
            status: 400,
            message: 'Failed to retrieve notifications'
          })
        } else {
          res.locals.notificationLog = notificationLog;
          return next()
        };
      } catch (err) {
        console.log(err);
        return next(err);
      }
    },
    getHistoryLog: async (req: Request, res: Response, next: NextFunction) => {
      try {
        // pull arn from cookie
        const ARN: string = req.cookies['ARN'];
        // search notification db for notifications with corresponding ARN
        // send back all notifications

        const historyLog = await HistoryLog.find({ARN: ARN});
        if(!historyLog){
          return next({
            log: 'Error in historyLog conditional',
            status: 400,
            message: 'Failed to retrieve history log'
          })
        } else {
          //notifications.push(notificationLog.message, )
          res.locals.historyLog = historyLog;
          return next();
        };
      }catch(err){
        console.log(err);
        return next(err);
      }
    },
    
    changeInfo: async(req: Request, res: Response, next: NextFunction) => {
      try{
        const updateInfo = req.body;
        const ARN: string = req.cookies['ARN'];
        // if password update, hash
        if (updateInfo.password) {
          const newPassword: string = updateInfo.password;
          const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
          updateInfo.password = hashedPassword;
        }
        // update user in db
        const updatedUser = await User.findOneAndUpdate({ARN: req.cookies['ARN']}, updateInfo, {
          new: true,
        });


        return next();
      } catch(err) {
      return next({
        log: `there was an error in userController.changeInfo. Error: ${err}`,
        status: 400,
        message: 'There was a problem updating that info!'
      });
      }
    }
    
};

export default userController;
