"use client"

import { Button } from "react-bootstrap"
import Image from "next/image"
import img from '../../../public/assets/images/ads2.jpg'

export function AppPromotion() {
  return (
    <section className="py-5 bg-black">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 order-md-2 d-flex justify-content-center">
            <div className="position-relative" style={{ maxWidth: "600px" }}>
              <Image
                src="/assets/images/ads2.jpg"
                alt="HomeTriangle App Screenshot 1"
                width={500}
                height={350}
                className="position-relative z-index-10"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-md-6">
            <h2 className="mb-4 fw-bold fs-3 text-center text-light text-md-start">
              Get Things Done Easily. Download the HomePartner App Today!
            </h2>
            <p className="mb-4 fs-5 text-center text-light text-md-start">
              Book appointments, manage projects, and stay connected with service providers - all on the go!
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <Button variant="primary" className="px-4 py-2">
                Download on App Store
              </Button>
              <Button variant="success" className="px-4 py-2">
                Get it on Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
