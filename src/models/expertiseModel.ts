///This handles the schema for expertise

///Libraries -->
import {Schema, model, Types} from "mongoose";
import { IExpertise, IExpertiseModel } from "../utils/interfaces";

///Commencing the app

///This is the schema for the expertis database
const expertiseSchema = new Schema<IExpertise, IExpertiseModel>(
  {
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
    percent: {
        type: Number,
        required: true,
    }
  },
  { timestamps: true }
);

/**
 * @notice Static create expertis
 * @param skill Contains all the schema values for creating a expertis
 * @returns The created testimony
 */
expertiseSchema.statics.createExpertise = async function (
  skill: IExpertise
) {
  //Create a new quote
  const expertise = await this.create({ ...skill });

  return expertise;
};

/**
 * @notice Static get all expertise
 * @returns All expertise
 */
 expertiseSchema.statics.getAllExpertise = async function () {
  const expertise = await this.find({}).sort({ createdAt: -1 });
  return expertise;
};

/**
 * @notice Static update expertise
 * @param id The id of the expertise to be updated
 * @param skill The expertise to be updated
 * @returns The updated expertise
 */
 expertiseSchema.statics.updateExpertise = async function (id: string, skill: IExpertise) {
    //Validation of args
  if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

   //This updates the value in the database
  const update = await this.findOneAndUpdate(
    { _id: id },
    { ...skill }
  );
  return update;
  };

/**
 * @notice Static delete expertise
 * @param id The id of the expertise to be deleted
 * @returns The deleted expertise
 */
 expertiseSchema.statics.deleteExpertise = async function (id: string) {
    //Validation of args
  if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

  //This deletes the quote from the database
  const delete_ = await this.findOneAndDelete({ _id: id });
  return delete_;
}

export const Expertise = model<IExpertise, IExpertiseModel>("Expertise", expertiseSchema);
