///This handles the schema for project

///Libraries -->
import {Schema, model, Types} from "mongoose";
import { IProject, IProjectModel } from "../utils/interfaces";

///Commencing the app

///This is the schema for the testimony database
const projectSchema = new Schema<IProject, IProjectModel>(
  {
    category: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true, 
        trim: true
    },
    technologies: [{
        type: String,
        required: true, 
        trim: true
    }],
    sourceCode: {
        type: String,
        required: true,
        trim: true
    },
    appLink: {
        type: String,
        trim: true
    }
  },
  { timestamps: true }
);

/**
 * @notice Static create project
 * @param req Contains all the schema values for creating a project
 * @returns The created project
 */
projectSchema.statics.createProject = async function (
  project: IProject
) {
  //Create a new quote
  const project_ = await this.create({ ...project });

  return project_;
};

/**
 * @notice Static get all project
 * @returns All project
 */
 projectSchema.statics.getAllProject = async function () {
  const project = await this.find({}).sort({ createdAt: -1 });
  return project;
};

/**
 * @notice Static update project
 * @param id The id of the project to be updated
 * @param req The items to be updated
 * @returns The updated project
 */
 projectSchema.statics.updateProject = async function (id: string, project: IProject) {
    //Validation of args
  if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

   //This updates the value in the database
  const update = await this.findOneAndUpdate(
    { _id: id },
    { ...project }
  );
  return update;
  };

/**
 * @notice Static delete project
 * @param id The id of the project to be deleted
 * @returns The deleted project
 */
 projectSchema.statics.deleteProject = async function (id: string) {
    //Validation of args
  if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

  //This deletes the quote from the database
  const delete_ = await this.findOneAndDelete({ _id: id });
  return delete_;
}

export const Project = model<IProject, IProjectModel>("Project", projectSchema);
