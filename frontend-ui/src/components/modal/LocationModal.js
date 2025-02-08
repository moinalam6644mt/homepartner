"use client"

import { useState } from "react"
import { Modal, Button, Form, InputGroup } from "react-bootstrap"
import { Search } from "lucide-react"

const CITIES = {
  major: ["Bangalore", "Chennai", "Hyderabad", "Mumbai", "Pune", "Delhi", "Ahmedabad", "Kolkata"],
  other: [
    "Coimbatore",
    "Gurgaon",
    "Jaipur",
    "Kochi",
    "Lucknow",
    "Madurai",
    "Mysore",
    "Noida",
    "Trivandrum",
    "Warangal",
    "Tirupati",
    "Vijayawada",
    "Visakhapatnam",
    "Bhubaneswar",
    "Guntur",
  ],
}

export function LocationModal() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)
  const handleShow = () => setIsOpen(true)

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow} className="d-flex align-items-center w-100">
        <Search className="me-2" /> Where do you need service?
      </Button>

      <Modal show={isOpen} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Where do you need service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <Form.Control
              type="search"
              placeholder="Search for your city"
              aria-label="Search for your city"
            />
          </InputGroup>
          <div className="mb-4">
            <h5>Major Cities</h5>
            <div className="d-flex flex-wrap gap-2">
              {CITIES.major.map((city) => (
                <Button
                  key={city}
                  variant="outline-secondary"
                  className="text-start"
                  onClick={handleClose}
                >
                  {city}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h5>Other Cities</h5>
            <div className="d-flex flex-wrap gap-2">
              {CITIES.other.map((city) => (
                <Button
                  key={city}
                  variant="link"
                  className="text-start p-0 text-decoration-none"
                  onClick={handleClose}
                >
                  {city}
                </Button>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
