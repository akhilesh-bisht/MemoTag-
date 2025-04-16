import mongoose from "mongoose";

const formSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    message: { type: String, default: "" },
  },
  { timestamps: true }
);

const FormSubmission = mongoose.model("FormSubmission", formSubmissionSchema);

export default FormSubmission;
