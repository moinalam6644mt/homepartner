const db = require("../config/db");

const createService = (serviceData, callback) => {
  const { companyName, companyDetails, location, category, subcategory, description, procedure, features, budgetAmount, images } = serviceData;

  const sql = `INSERT INTO services (companyName, companyDetails, location, category, subcategory, description, procedure, features, budgetAmount, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [companyName, companyDetails, location, category, subcategory, description, procedure, features, budgetAmount, JSON.stringify(images)], callback);
};

module.exports = { createService };
