///This handles the various functions for the general page links

///Libraries -->
//import jwt from "jsonwebtoken";
import { Request, Response } from "express"
import "dotenv/config";
import { IView } from "../utils/interfaces";
import { Hire } from "../models/hireModel";
import { Expertise } from "../models/expertiseModel";
import { Testimony } from "../models/testimonyModel";
import { Project } from "../models/projectModel";

///Commencing the app
const SECRET: string = process.env.SECRET!;

/**
 * @notice This function creates a jwt
 * @param _id The id of the user
 */
// const createToken = (_id: string) => {
//   return jwt.sign({ _id }, SECRET, { expiresIn: "3d" });
// };

/**
* @notice Get all expertise route
* @param req The params that were passed in during the client request
* @param res The response of the query by client request
*/
export const getExpertises = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("fetching expertise")
   const skills = await Expertise.getAllExpertise()
      res.status(200).json(skills);
    } catch (error) {
      const error_: IView = {msg: `${error}`}
      res.status(400).json(error_);
    }
}

/**
* @notice Get all projectsroute
* @param req The params that were passed in during the client request
* @param res The response of the query by client request
*/
export const getProjects = async (req: Request, res: Response): Promise<void> => {
  try {
   const projects = await Project.getAllProject()
      res.status(200).json(projects);
    } catch (error) {
      const error_: IView = {msg: `${error}`}
      res.status(400).json(error_);
    }
}


/**
 * @notice Get testimony page route
 * @param req The params that were passed in during the client request
 * @param res The response of the query by client request
 */
export const getTestimonies = async (req: Request, res: Response): Promise<void> => {
  try {
    const testimonials = await Testimony.getAllTestimony()
    res.status(200).json(testimonials);
  } catch (error) {
    const error_: IView = {msg: `${error}`}
    res.status(400).json(error_);
  }
}

/**
 * @notice Create hire page route
 * @param req The params that were passed in during the client request
 * @param res The response of the query by client request
 */
export const createHire = async (req: Request, res: Response): Promise<void> => {
    try {
      const project = await Hire.createHire(req.body)
      res.status(200).json(project);
    } catch (error) {
      const error_: IView = {msg: `${error}`}
      res.status(400).json(error_);
    }
};


