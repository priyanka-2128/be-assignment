
const express = require("express");

const router = express.Router();

const checkLogin = require("../middleware/authMiddleware");

const {
    createProfile,
    deleteProfile,
    withdrawApplication
} = require("../controllers/profileController");
router.use(checkLogin);

router.post("/create-profile", createProfile);

router.delete("/delete-profile", deleteProfile);

router.patch("/withdraw-application", withdrawApplication);

module.exports=router;



