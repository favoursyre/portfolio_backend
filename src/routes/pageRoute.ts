//This handles the various pages for the ecommerce website

//Libraries -->
import { IRouter, Router } from "express";
import {
  createHire,
} from "../controllers/pageController";

//Commencing the app
const router: IRouter = Router();

//Homepage

///Create Hire
router.post("/hire/add/", createHire)

export default router;
