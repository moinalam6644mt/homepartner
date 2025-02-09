"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../app/globals.css'
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components/heder/Header";
import { useState } from "react";

export default function PostServiceForm() {
  const [budgetType, setBudgetType] = useState("hourly");
  const [formData, setFormData] = useState({
    companyName: "",
    companyDetails: "",
    location: "",
    category: "",
    subcategory: "",
    description: "",
    procedure: "",
    features: "",
    budgetAmount: "",
    images: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (event) => {
    setFormData((prevData) => ({ ...prevData, images: event.target.files }));
  };

  const handleBudgetTypeChange = (event) => {
    setBudgetType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "images") {
        Array.from(formData.images).forEach((file) => data.append("images", file));
      } else {
        data.append(key, formData[key]);
      }
    });
    data.append("budgetType", budgetType);

    try {
      const response = await fetch("http://localhost:5000/api/services", {
        method: "POST",
        body: data,
      });
      
      if (response.ok) {
        alert("Service submitted successfully!");
        setFormData({
          companyName: "",
          companyDetails: "",
          location: "",
          category: "",
          subcategory: "",
          description: "",
          procedure: "",
          features: "",
          budgetAmount: "",
          images: [],
        });
      } else {
        alert("Failed to submit service");
      }
    } catch (error) {
      console.error("Error submitting service:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Post Your Own Service</h2>
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
          <div className="mb-3">
            <label className="form-label">Company Name</label>
            <input type="text" name="companyName" className="form-control" value={formData.companyName} onChange={handleChange} required />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Company Details</label>
            <textarea name="companyDetails" className="form-control" rows="3" value={formData.companyDetails} onChange={handleChange} required></textarea>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input type="text" name="location" className="form-control" value={formData.location} onChange={handleChange} required />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select name="category" className="form-select" value={formData.category} onChange={handleChange} required>
              <option value="">Select a category</option>
              <option value="home-maintenance">Home Maintenance</option>
              <option value="cleaning">Cleaning Services</option>
              <option value="pest-control">Pest Control</option>
              <option value="interior-design">Interior Design</option>
            </select>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Subcategory</label>
            <input type="text" name="subcategory" className="form-control" value={formData.subcategory} onChange={handleChange} required />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Upload Gallery (Images)</label>
            <input type="file" className="form-control" accept="image/*" multiple onChange={handleFileChange} required />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea name="description" className="form-control" rows="4" value={formData.description} onChange={handleChange} required></textarea>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Budget</label>
            <div className="d-flex align-items-center gap-3">
              <input type="radio" name="budgetType" value="hourly" checked={budgetType === "hourly"} onChange={handleBudgetTypeChange} /> Hourly
              <input type="radio" name="budgetType" value="oneTime" checked={budgetType === "oneTime"} onChange={handleBudgetTypeChange} /> One-Time
            </div>
            <input type="number" name="budgetAmount" className="form-control mt-2" value={formData.budgetAmount} onChange={handleChange} required />
          </div>
          
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Submit Service</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
