import FormSubmission from "../models/formSubmission.js";

export const submitForm = async (req, res, next) => {
  try {
    const { name, email, role, message } = req.body;

    // Create a new form submission entry
    const newSubmission = new FormSubmission({
      name,
      email,
      role,
      message,
    });

    // Save the form submission to the database
    await newSubmission.save();

    return res.status(200).json({
      success: true,
      message: "Form submitted successfully!",
      data: newSubmission,
    });
  } catch (error) {
    next(error);
  }
};
