const  mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      default: "Resume",
    },

    personalInfo: {
      fullName: String,
      email: String,
      phone: String,
      location: String,
      linkedin: String,
      github: String,
      portfolio: String,
    },

    professionalSummary: {
      type: String,
      maxlength: 600,
    },

    skills: {
      type: [String], // ATS keyword friendly
    },

    workExperience: [
      {
        jobTitle: String,
        company: String,
        location: String,
        startDate: String, // YYYY-MM
        endDate: String,   // YYYY-MM or Present
        responsibilities: [String],
      },
    ],

    education: [
      {
        degree: String,
        institution: String,
        startYear: String,
        endYear: String,
      },
    ],

    projects: [
      {
        title: String,
        description: String,
        technologies: [String],
        link: String,
      },
    ],

    certifications: [String],

    languages: [String],

    interests: [String],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Resume", resumeSchema);