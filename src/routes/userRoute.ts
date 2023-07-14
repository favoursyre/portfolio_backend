//This handles the various pages for the ecommerce website

//Libraries -->
import { IRouter, Router } from "express";
import {
  createTestimony
} from "../controllers/userController";

//Commencing the app
const router: IRouter = Router();

///Create testimony
router.post("/testimony/add/", createTestimony)

export default router;
