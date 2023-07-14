///This handles the various routes for the admin pages

///Libraries -->
import { Router } from "express";
import {
    createProject,
    updateProject,
    deleteProject,
    createExpertise,
    updateExpertise,
    deleteExpertise,
    createProfile,
    updateProfile,
    deleteProfile,
    deleteHire,
    deleteTestimony,
} from "../controllers/adminController";
//import { requireAuth } from "../middleware/requireAuth";

///Commencing the code
const router = Router();

///This requires auth for all routes below
//router.use(requireAuth);

///Create a project 
router.post("/admin/dashboard/project/add/", createProject);

///Update project
router.patch("/admin/dashboard/project/update/:id", updateProject);

///Delete project route
router.delete("/admin/dashboard/project/delete/:id", deleteProject);

///Create expertise route
router.post("/admin/dashboard/expertise/add/", createExpertise)

///Update expertise route
router.patch("/admin/dashboard/expertise/update/:id", updateExpertise)

///Delete expertise route
router.delete("/admin/dashboard/expertise/delete/:id", deleteExpertise);

///Create profile route
router.post("/admin/dashboard/profile/add/", createProfile)

///Update profile route
router.patch("/admin/dashboard/profile/update/:id", updateProfile)

///Delete profile route
router.delete("/admin/dashboard/profile/delete/:id", deleteProfile);

///Delete contact route
router.delete("/admin/dashboard/hire/delete/:id", deleteHire);

///Delete contact route
router.delete("/admin/dashboard/testimony/delete/:id", deleteTestimony);

export default router;
