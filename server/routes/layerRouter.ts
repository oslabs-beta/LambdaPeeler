import express from 'express';
import { Request, Response } from 'express';
import layerController from '../controllers/layerController';
import testController from '../controllers/testController';

const router = express.Router();

// lists all layers and versions
router.get(
  '/list',
  layerController.assumeRole,
  layerController.getLayer,
  layerController.getVersions,
  (req: Request, res: Response) => {
    // console.log(res.locals.layersWithVersions);
    res.status(200).json(res.locals.layersWithVersions);
  }
);

// removes function from layer
router.post('/remove', layerController.removeFunction, (req: Request, res: Response) => {
  res.sendStatus(200).json({message: 'Successfully Removed!'});
});

// tests and adds compatible layer
router.post(
  '/add',
  testController.assumeRole,
  testController.testRuntime,
  testController.getTest,
  layerController.addFunction,
  testController.testDependencies,
  testController.removeFailedFunc,
  (req: Request, res: Response) => {
    if (res.locals.addError.length) {
      res.status(409).json(res.locals.addError);
    } else {
      res.sendStatus(200).json({message: 'Successfully added'});
    }
  }
);

// lists all functions associated with specifc layer
router.post('/functions', layerController.getFunctions, (req: Request, res: Response) => {
  res.status(200).json(res.locals.functionArray);
});

export default router;
