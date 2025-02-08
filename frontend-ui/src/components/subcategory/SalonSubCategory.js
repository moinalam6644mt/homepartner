"use client";
import "bootstrap/dist/css/bootstrap.min.css";

import { Modal, Button } from "react-bootstrap";
import Image from "next/image";

const SalonSubcategoryModal = ({ show, onHide }) => {
  const salonSubcategories = [
    {
      name: "Massage",
      image: "/assets/images/ads2.jpg",
      description: "Relax and rejuvenate with our expert massage services.",
    },
    {
      name: "Hair Fall Treatment",
      image: "/assets/images/ads2.jpg",
      description: "Effective treatments to reduce hair fall and promote growth.",
    },
    {
      name: "Facial",
      image: "/assets/images/ads2.jpg",
      description: "Nourish and hydrate your skin with our facial services.",
    },
    {
      name: "Makeup",
      image: "/assets/images/ads2.jpg",
      description: "Enhance your beauty with our makeup services.",
    },
  ];

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Salon Subcategories</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row g-4">
          {salonSubcategories.map((subcategory, index) => (
            <div className="col-6 col-md-4" key={index}>
              <div className="card border-0 text-center">
                <Image
                  src={subcategory.image}
                  alt={subcategory.name}
                  width={100}
                  height={100}
                  className="rounded-circle"
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6 className="card-title">{subcategory.name}</h6>
                  <p className="card-text small">{subcategory.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SalonSubcategoryModal;
