"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../app/globals.css';
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components/heder/Header";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
          <div className="text-center mb-4">
            <h3 className="mb-1">Welcome Back</h3>
            <p className="text-muted">Login to your account</p>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>
              <Link href="#" className="text-decoration-none">
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="mb-0">
              Don’t have an account?{" "}
              <Link href="/register" className="text-decoration-none text-primary">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
