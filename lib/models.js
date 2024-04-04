import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["Professor", "TA"],
  },
  passedTests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Test" }],
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  professor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  qualifyingTest: { type: mongoose.Schema.Types.ObjectId, ref: "Test" },
  approvedTAs: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  questionType: {
    type: String,
    enum: ["multiple-choice", "open-ended"],
    required: true,
  },
  options: [
    {
      text: String,
      isCorrect: Boolean,
    },
  ],
  answer: String,
});

const testSchema = new mongoose.Schema({
  title: { type: String, required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  questions: [questionSchema],
  passingScore: { type: Number, required: true },
  attempts: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      responses: [
        {
          questionId: mongoose.Schema.Types.ObjectId,
          response: String,
          isCorrect: Boolean,
        },
      ],
      score: { type: Number },
      passed: { type: Boolean },
      attemptDate: { type: Date, default: Date.now },
    },
  ],
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Course = mongoose.models?.Course || mongoose.model("Course", courseSchema);
export const Question = mongoose.models?.Question || mongoose.model("Question", questionSchema);
export const Test = mongoose.models?.Test || mongoose.model("Test", testSchema);
