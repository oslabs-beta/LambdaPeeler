import express from 'express';
import { Request, Response } from 'express';
import functionController from '../controllers/functionController';

const router = express.Router();

// returns list of all functions
router.get("/list", 
functionController.assumeRole, 
functionController.getFunction, 
(req: Request, res: Response) => {
  res.status(200).json(res.locals.functions)
})

// returns list of layers associated with specific function
router.post('/layers', functionController.getLayers, (req: Request, res: Response) => {
  res.status(200).json(res.locals.layers);
})

// // removes layer from function
// // functionality removed for now. layer-function interactions will take place through Layers tab and /layers routes
router.post('/remove', functionController.removeLayer, (req: Request, res: Response) => {
  res.status(200).json(res.locals.successful);
})


// removes all layers from function
router.post('/removeAll', functionController.removeAllLayers, (req: Request, res: Response) => {
  res.sendStatus(200);
});



export default router;