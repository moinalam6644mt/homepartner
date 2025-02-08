import Link from "next/link";
import { Facebook, Twitter, Instagram, Phone, Info } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container-fluid px-4">
        <div className="row">
          {/* Services */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Services</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/services" className="text-white text-decoration-none d-flex align-items-center">
                  <Info className="me-2" size={18} />
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white text-decoration-none d-flex align-items-center">
                  <Info className="me-2" size={18} />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold mb-3">About</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/about" className="text-white text-decoration-none d-flex align-items-center">
                  <Info className="me-2" size={18} />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white text-decoration-none d-flex align-items-center">
                  <Info className="me-2" size={18} />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/contact" className="text-white text-decoration-none d-flex align-items-center">
                  <Phone className="me-2" size={18} />
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="tel:+123456789" className="text-white text-decoration-none d-flex align-items-center">
                  <Phone className="me-2" size={18} />
                  +123 456 789
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex align-items-center">
              <a href="#" className="text-white text-decoration-none me-3">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white text-decoration-none me-3">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white text-decoration-none">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 pt-3 border-top border-light">
          <p className="mb-0">
            © {new Date().getFullYear()} HomeService. All rights reserved.
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        footer {
          background-color: #007bff; /* Bootstrap primary color */
        }
        a:hover {
          color: #d1e7fd !important; /* Light hover effect */
        }
      `}</style>
    </footer>
  );
}
