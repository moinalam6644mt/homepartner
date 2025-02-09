const path = require("path");
const { createService } = require("../models/Service");

const uploadService = (req, res) => {
  try {
    const { companyName, companyDetails, location, category, subcategory, description, procedure, features, budgetAmount } = req.body;
    const imagePaths = req.files.map((file) => `public/uploads/${file.filename}`);

    const newService = {
      companyName,
      companyDetails,
      location,
      category,
      subcategory,
      description,
      procedure,
      features,
      budgetAmount,
      images: imagePaths,
    };

    createService(newService, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      res.status(201).json({ message: "Service uploaded successfully", service: result });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading service", error });
  }
};

module.exports = { uploadService };
