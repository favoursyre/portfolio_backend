///This handles the various functions for the admin page links

///Libraries -->
//import jwt from "jsonwebtoken";
import { Request, Response } from "express"
import "dotenv/config";
import { Project } from "../models/projectModel";
import { IView } from "../utils/interfaces";
import { Expertise } from "../models/expertiseModel";
import { Profile } from "../models/profileModel";
import { Hire } from "../models/hireModel";
import { Testimony } from "../models/testimonyModel";

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
 * @notice Create project page route
 * @param req The params that were passed in during the client request
 * @param res The response of the query by client request
 */
export const createProject = async (req: Request, res: Response): Promise<void> => {
    try {
      const project = await Project.createProject(req.body)
      res.status(200).json(project);
    } catch (error) {
      const error_: IView = {msg: `${error}`}
      res.status(400).json(error_);
    }
};

/**
 * @notice Update project page route
 * @param req The params that were passed in during the client request
 * @param res The response of the query by client request
 */
export const updateProject = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const product = await Project.updateProject(id, req.body)
        res.status(200).json(product);
      } catch (error) {
        const error_: IView = {msg: `${error}`}
        res.status(400).json(error_);
      }
}

/**
 * @notice Delete project page route
 * @param req The params that were passed in during the client request
 * @param res The response of the query by client request
 */
export const deleteProject = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const product = await Project.deleteProject(id);
        res.status(200).json(product);
      } catch (error) {
        const error_: IView = {msg: `${error}`}
        res.status(400).json(error_);
      }
}

/**
 * @notice Create expertise page route
 * @param req The params that were passed in during the client request
 * @param res The response of the query by client request
 */
export const createExpertise = async (req: Request, res: Response): Promise<void> => {
    try {
        const faq = await Expertise.createExpertise(req.body)
        console.log("Body: ", faq)
        res.status(200).json(faq);
      } catch (error) {
        const error_: IView = {msg: `${error}`}
        res.status(400).json(error_);
      }
}

/**
 * @notice Update expertise page route
 * @param req The params that were passed in during the client request
 * @param res The response of the query by client request
 */
export const updateExpertise = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const faq = await Expertise.updateExpertise(id, req.body)
        res.status(200).json(faq);
      } catch (error) {
        const error_: IView = {msg: `${error}`}
        res.status(400).json(error_);
      }
}

/**
 * @notice Delete expertise page route
 * @param req The params that were passed in during the client request
 * @param res The response of the query by client request
 */
export const deleteExpertise = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const faq = await Expertise.deleteExpertise(id)
        res.status(200).json(faq);
      } catch (error) {
        const error_: IView = {msg: `${error}`}
        res.status(400).json(error_);
      }
}

/**
 * @notice Create profile page route
 * @param req The params that were passed in during the client request
 * @param res The response of the query by client request
 */
 export const createProfile = async (req: Request, res: Response): Promise<void> => {
  try {
      const faq = await Profile.createProfile(req.body)
      console.log("Body: ", faq)
      res.status(200).json(faq);
    } catch (error) {
      const error_: IView = {msg: `${error}`}
      res.status(400).json(error_);
    }
}

/**
 * @notice Update profile page route
 * @param req The params that were passed in during the client request
 * @param res The response of the query by client request
 */
 export const updateProfile = async (req: Request, res: Response): Promise<void> => {
  try {
      const { id } = req.params
      const faq = await Profile.updateProfile(id, req.body)
      res.status(200).json(faq);
    } catch (error) {
      const error_: IView = {msg: `${error}`}
      res.status(400).json(error_);
    }
}

/**
* @notice Delete profile page route
* @param req The params that were passed in during the client request
* @param res The response of the query by client request
*/
export const deleteProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const faq = await Profile.deleteProfile(id)
      res.status(200).json(faq);
    } catch (error) {
      const error_: IView = {msg: `${error}`}
      res.status(400).json(error_);
    }
}

/**
 * @notice Delete hire page route
 * @param req The params that were passed in during the client request
 * @param res The response of the query by client request
 */
 export const deleteHire = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params
      const quote = await Hire.deleteHire(id)
      res.status(200).json(quote);
    } catch (error) {
      const error_: IView = {msg: `${error}`}
      res.status(400).json(error_);
    }
  }

/**
 * @notice Delete testimony page route
 * @param req The params that were passed in during the client request
 * @param res The response of the query by client request
 */
 export const deleteTestimony = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params
      const testimony = await Testimony.deleteTestimony(id)
      res.status(200).json(testimony);
    } catch (error) {
      const error_: IView = {msg: `${error}`}
      res.status(400).json(error_);
    }
  }



