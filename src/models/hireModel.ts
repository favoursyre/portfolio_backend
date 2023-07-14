///This handles the schema for hire

///Libraries -->
import {Schema, model, Types} from "mongoose";
import { IHire, IHireModel } from "../utils/interfaces";

///Commencing the app

///This is the schema for the hire database
const hireSchema = new Schema<IHire, IHireModel>(
  {
    clientName: {
        type: String,
        required: true,
        trim: true
    },
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    budget: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
  },
  { timestamps: true }
);

/**
 * @notice Static create hire
 * @param details The hire to be created
 * @returns The created hire
 */
hireSchema.statics.createHire = async function (details: IHire) {
    //Create a new FAQ
    const hire = await this.create(details);
  
    return hire;
  };

/**
 * @notice Static delete hire
 * @param id The id of the hire to be deleted
 * @returns The deleted hire
 */
hireSchema.statics.deleteHire = async function (id: string) {
    //Validation of args
  if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

  //This deletes the ingredient from the database
  const delete_ = await this.findOneAndDelete({ _id: id });
  return delete_;
}
  
  export const Hire = model<IHire, IHireModel>("Hire", hireSchema);