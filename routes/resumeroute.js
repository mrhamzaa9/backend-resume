const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const resumeCtrl = require("../controller/resumeController");

router.post("/", auth, resumeCtrl.createResume);
router.get("/", auth, resumeCtrl.getResumes);
router.get("/:id", auth, resumeCtrl.getmyResume);
router.put("/:id", auth, resumeCtrl.updateResume);
router.delete("/:id", auth, resumeCtrl.deleteResume);

module.exports = router;