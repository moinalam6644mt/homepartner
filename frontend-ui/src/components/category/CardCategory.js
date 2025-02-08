"use client";

import { Card } from "react-bootstrap";
import { Wrench, PaintBucket, Sprout, Zap, Droplets, Sofa, BrushIcon as Broom, Car } from "lucide-react";
import SalonSubcategoryModal from "../subcategory/SalonSubCategory";
import { useState } from "react";

const categories = [
  {
    title: "Plumbing",
    description: "Expert plumbing services",
    icon: Wrench,
    color: "text-primary",
  },
  {
    title: "Painting",
    description: "Professional painting solutions",
    icon: PaintBucket,
    color: "text-danger",
  },
  {
    title: "Gardening",
    description: "Garden maintenance & design",
    icon: Sprout,
    color: "text-success",
  },
  {
    title: "Electrical",
    description: "Electrical repairs & installation",
    icon: Zap,
    color: "text-warning",
  },
  {
    title: "Cleaning",
    description: "Home & office cleaning",
    icon: Droplets,
    color: "text-info",
  },
  {
    title: "Furniture",
    description: "Furniture assembly & repair",
    icon: Sofa,
    color: "text-secondary",
  },
  {
    title: "Housekeeping",
    description: "Complete house maintenance",
    icon: Broom,
    color: "text-orange",
  },
  {
    title: "Car Wash",
    description: "Professional car cleaning",
    icon: Car,
    color: "text-muted",
  },
];

export function ServiceCategories() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4 fw-bold fs-3">Our Services</h2>
      <div className="row g-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={category.title}
              onClick={() => handleCategoryClick(category)}
              style={{ cursor: "pointer" }}
            >
              <Card className="h-100 text-center shadow-sm border-0">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div
                    className="p-3 rounded-circle bg-light mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <Icon className={`${category.color}`} size={32} />
                  </div>
                  <Card.Title className="fw-semibold fs-5">{category.title}</Card.Title>
                  <Card.Text className="text-muted">{category.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Salon Subcategory Modal */}
      <SalonSubcategoryModal show={showModal} onHide={handleCloseModal} />
    </section>
  );
}
