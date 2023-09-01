//This handles the various pages for the ecommerce website

//Libraries -->
import { IRouter, Router } from "express";
import {
  createHire,
  getExpertises,
  getProjects,
  getTestimonies
} from "../controllers/pageController";

//Commencing the app
const router: IRouter = Router();

//Homepage

//Get expertise
router.get("/expertises/", getExpertises)

//Get projects
router.get("/projects/", getProjects)

//Get testimonies
router.get("/testimonies/", getTestimonies)

///Create Hire
router.post("/hire/add/", createHire)

export default router;
