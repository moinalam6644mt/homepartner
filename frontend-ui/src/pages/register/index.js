"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import '../../app/globals.css';
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components/heder/Header"; // Fixed the destructure to match your file import style

export default function Register() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card p-4 shadow-sm" style={{ maxWidth: "500px", width: "100%" }}>
          <div className="text-center mb-4">
            <h3 className="mb-1">Create an Account</h3>
            <p className="text-muted">Join our home services platform</p>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Create a password"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="mb-0">
              Already have an account?{" "}
              <Link href="/login" className="text-decoration-none text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
