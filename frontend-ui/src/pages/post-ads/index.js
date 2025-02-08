"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../app/globals.css'
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components/heder/Header";
import { useState } from "react";

export default function PostServiceForm() {
  const [budgetType, setBudgetType] = useState("hourly");

  const handleBudgetTypeChange = (event) => {
    setBudgetType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Collect form data and handle submission logic here
    alert("Service submitted successfully!");
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Post Your Own Service</h2>
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
          {/* Company Name */}
          <div className="mb-3">
            <label htmlFor="companyName" className="form-label">
              Company Name
            </label>
            <input type="text" className="form-control" id="companyName" placeholder="Enter company name" required />
          </div>

          {/* Company Details */}
          <div className="mb-3">
            <label htmlFor="companyDetails" className="form-label">
              Company Details
            </label>
            <textarea
              className="form-control"
              id="companyDetails"
              rows="3"
              placeholder="Provide a brief overview of the company"
              required
            ></textarea>
          </div>

          {/* Location */}
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input type="text" className="form-control" id="location" placeholder="Enter the service location" required />
          </div>

          {/* Category */}
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select className="form-select" id="category" required>
              <option value="">Select a category</option>
              <option value="home-maintenance">Home Maintenance</option>
              <option value="cleaning">Cleaning Services</option>
              <option value="pest-control">Pest Control</option>
              <option value="interior-design">Interior Design</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Subcategory */}
          <div className="mb-3">
            <label htmlFor="subcategory" className="form-label">
              Subcategory
            </label>
            <input
              type="text"
              className="form-control"
              id="subcategory"
              placeholder="Enter subcategory (e.g., Plumbing)"
              required
            />
          </div>

          {/* Category Gallery Upload */}
          <div className="mb-3">
            <label htmlFor="gallery" className="form-label">
              Upload Gallery (Images)
            </label>
            <input
              type="file"
              className="form-control"
              id="gallery"
              accept="image/*"
              multiple
              required
            />
            <small className="text-muted">You can upload multiple images.</small>
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="4"
              placeholder="Describe the service in detail"
              required
            ></textarea>
          </div>

          {/* Procedure */}
          <div className="mb-3">
            <label htmlFor="procedure" className="form-label">
              Procedure
            </label>
            <textarea
              className="form-control"
              id="procedure"
              rows="4"
              placeholder="Explain the procedure or workflow"
              required
            ></textarea>
          </div>

          {/* Features */}
          <div className="mb-3">
            <label htmlFor="features" className="form-label">
              Features
            </label>
            <textarea
              className="form-control"
              id="features"
              rows="3"
              placeholder="List the features of your service"
              required
            ></textarea>
          </div>

          {/* Budget */}
          <div className="mb-3">
            <label className="form-label">Budget</label>
            <div className="d-flex align-items-center gap-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="budgetType"
                  id="hourly"
                  value="hourly"
                  checked={budgetType === "hourly"}
                  onChange={handleBudgetTypeChange}
                />
                <label className="form-check-label" htmlFor="hourly">
                  Hourly
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="budgetType"
                  id="oneTime"
                  value="oneTime"
                  checked={budgetType === "oneTime"}
                  onChange={handleBudgetTypeChange}
                />
                <label className="form-check-label" htmlFor="oneTime">
                  One-Time
                </label>
              </div>
            </div>
            <div className="mt-3">
              <input
                type="number"
                className="form-control"
                id="budgetAmount"
                placeholder="Enter budget amount"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit Service
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
