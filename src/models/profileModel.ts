///This handles the schema for Profile

///Libraries -->
import {Schema, model, Types} from "mongoose";
import { IProfile, IProfileModel } from "../utils/interfaces";

///Commencing the app

///This is the schema for the quote database
const profileSchema = new Schema<IProfile, IProfileModel>(
  {
    resume: {
        type: String,
        required: true,
        trim: true
    },
    officeAddress: {
        type: String,
        required: true,
        trim: true
    },
    emailAddress: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    whatsapp: {
        type: String,
        required: true,
        trim: true
    },
    twitter: {
        type: String,
        required: true,
        trim: true
    },
    instagram: {
        type: String,
        required: true,
        trim: true
    },
    linkedIn: {
        type: String,
        required: true,
        trim: true
    },
  },
  { timestamps: true }
);

/**
 * @notice Static create Profile
 * @param profile The profile to be created
 * @returns The created Profile
 */
 profileSchema.statics.createProfile = async function (profile: IProfile) {
    //Create a new FAQ
    const profile_ = await this.create(profile);
  
    return profile_;
  };
  
  
  /**
   * @notice Static update Profile
   * @param id The id of the profile to be updated
   * @param profile The details to be updated
   * @returns The updated profile
   */
  profileSchema.statics.updateProfile = async function (id: string, profile: IProfile) {
      //Validation of args
    if (!Types.ObjectId.isValid(id)) {
      throw Error("Id is invalid");
    }
  
     //This updates the value in the database
    const update = await this.findOneAndUpdate(
      { _id: id },
      { ...profile }
    );
    return update;
    };

/**
 * @notice Static delete profile
 * @param id The id of the profile to be deleted
 * @returns The deleted profile
 */
profileSchema.statics.deleteProfile = async function (id: string) {
    //Validation of args
  if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

  //This deletes the ingredient from the database
  const delete_ = await this.findOneAndDelete({ _id: id });
  return delete_;
}
  
  export const Profile = model<IProfile, IProfileModel>("Profile", profileSchema);