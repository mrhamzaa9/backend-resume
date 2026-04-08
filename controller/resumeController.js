
const Resume = require("../model/resume");

// CREATE RESUME
const createResume = async (req, res) => {
  try {
    const userId = req.user._id; // from auth middleware

    const resume = new Resume({
      userId,
      ...req.body
    });

    await resume.save();

    res.status(201).json({
      message: "Resume created successfully",
      resume
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// get all resumes for a user
const getResumes = async (req, res) => {
  try {
    const userId = req.user._id;
    const resumes = await Resume.find({ userId });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } };

// get single resume
const getmyResume = async (req, res) => {
  try {
    const userId = req.user._id;
    const resumeId = req.params.id;
    const resumes = await Resume.find({ userId }).sort({ createdAt: -1 });

    if (!resume) {
      return res.status(404).json({ error: "Resume not found" });
    }

    res.json(resume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 
// UPDATE RESUME
const updateResume = async (req, res) => {
  try {
    const userId = req.user._id;
    const resumeId = req.params.id;
    const resume = await Resume.findOneAndUpdate(
      { _id: resumeId, userId },
      req.body,
      { new: true }
    ); }
    catch (error) {
    res.status(500).json({ error: error.message });
  } }
// DELETE RESUME
const deleteResume = async (req, res) => {
  try {    const userId = req.user._id;
    const resumeId = req.params.id;
    await Resume.findOneAndDelete({ _id: resumeId, userId });
    res.json({ message: "Resume deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } };

module.exports = {
  createResume,
  getResumes,
  getmyResume,
  updateResume,
  deleteResume
};  