"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, Modal, Button } from "react-bootstrap";
import { Search, Bell, Menu } from "lucide-react";

const CITIES = ["Chennai", "Bangalore", "Mumbai", "Delhi", "Hyderabad", "Kolkata"];

export function Header() {
  const [selectedCity, setSelectedCity] = useState("Chennai");
  const [showLocationModal, setShowLocationModal] = useState(false);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setShowLocationModal(false);
  };

  return (
    <header className="sticky-top bg-light border-bottom">
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          {/* Logo */}
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <Image
              src="/assets/logo.png"
              alt="HomeTriangle"
              width={32}
              height={32}
              className=""
            />
            <span className="fw-bold">HomePartner</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Collapse Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link href="/all-services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blogs" className="nav-link">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact-us" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Location */}
            <Button variant="outline-secondary" className="me-3" onClick={() => setShowLocationModal(true)}>
              {selectedCity}
            </Button>

            {/* Notifications */}
            <Button variant="" className="position-relative me-3">
              <Bell className="h-5 w-5" />
              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </Button>

            {/* User Menu */}
            <Dropdown>
              <Dropdown.Toggle variant="" className="d-flex align-items-center">
                <Image
                  src="/assets/images/ads2.jpg"
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-circle"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="/post-ads">Post Ads</Dropdown.Item>
                <Dropdown.Item href="/settings">Settings</Dropdown.Item>
                <Dropdown.Item href="/my-booking">My Booking</Dropdown.Item>
                <Dropdown.Item href="/help">Help & Support</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="text-danger">Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>

      {/* Location Modal */}
      <Modal show={showLocationModal} onHide={() => setShowLocationModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Your City</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="list-group">
            {CITIES.map((city) => (
              <li
                key={city}
                className={`list-group-item ${city === selectedCity ? "active" : ""}`}
                onClick={() => handleCityChange(city)}
                style={{ cursor: "pointer" }}
              >
                {city}
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    </header>
  );
}
