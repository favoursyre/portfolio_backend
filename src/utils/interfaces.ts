///This would contain all interfaces that will be used

///Libraries -->
import { Model } from 'mongoose';

///Commencing the code
///Declaring the various interfaces
export interface IView {
    msg: String
}

///Declaring the interface for my profile
export interface IProfile {
    _id?: string,
    resume?: string,
    officeAddress?: string,
    emailAddress?: string,
    phoneNumber?: string,
    whatsapp?: string,
    twitter?: string,
    instagram?: string,
    linkedIn?: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}

/**
 * @notice The interface for profile mongoose schema static
 */
 export interface IProfileModel extends Model<IProfile> {
    createProfile(profile: IProfile): Array<IProfile>,
    updateProfile(id: string, profile: IProfile): IProfile,
    deleteProfile(id: string): IProfile
  }

///Declaring the interface for hire
export interface IHire {
    _id?: string,
    clientName?: string,
    companyName?: string,
    budget?: number,
    description?: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}

/**
 * @notice The interface for hire mongoose schema static
 */
 export interface IHireModel extends Model<IHire> {
    createHire(details: IHire): Array<IHire>,
    //updateProfile(id: string, profile: IProfile): IProfile,
    deleteHire(id: string): IHire
  }

  ///Declaring the interface for testimony
export interface ITestimony {
    _id?: string,
    name?: string,
    image?: string,
    stars?: number,
    testimony?: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}

/**
 * @notice The interface for testimonials mongoose schema static
 */
 export interface ITestimonyModel extends Model<ITestimony> {
    createTestimony(testimony: ITestimony): ITestimony,
    getAllTestimony(): Array<ITestimony>,
    updateTestimony(id: string, testimony: ITestimony): ITestimony,
    deleteTestimony(id: string): ITestimony
  } 

    ///Declaring the interface for expertise
export interface IExpertise {
    _id?: string,
    name?: string,
    image?: string,
    percent?: number,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}

/**
 * @notice The interface for expertise mongoose schema static
 */
 export interface IExpertiseModel extends Model<IExpertise> {
    createExpertise(skill: IExpertise): IExpertise,
    getAllExpertise(): Array<IExpertise>,
    updateExpertise(id: string, skill: IExpertise): IExpertise,
    deleteExpertise(id: string): IExpertise
  } 

   ///Declaring the interface for project
export interface IProject {
    _id?: string,
    category?: string,
    name?: string,
    image?: string,
    technologies?: Array<string>,
    sourceCode?: string,
    appLink?: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}

/**
 * @notice The interface for project mongoose schema static
 */
 export interface IProjectModel extends Model<IProject> {
    createProject(project: IProject): IProject,
    getAllProject(): Array<IProject>,
    updateProject(id: string, project: IProject): IProject,
    deleteProject(id: string): IProject
  } 