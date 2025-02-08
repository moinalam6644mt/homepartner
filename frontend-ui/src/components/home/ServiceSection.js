"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function ServiceSection({ title, services }) {
  const responsive = {
    superLargeDesktop: {
      // screens over 1600px
      breakpoint: { max: 4000, min: 1600 },
      items: 5,
    },
    desktop: {
      // screens between 1024px and 1600px
      breakpoint: { max: 1600, min: 1024 },
      items: 4,
    },
    tablet: {
      // screens between 768px and 1024px
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      // screens below 768px
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const [showmodal, setShowmodal] = useState(false)

  const ShowModalCategory = () => {
    setShowmodal(true)
  }

  return (
    <section className="py-5" >
      <h2 className="mb-4">{title}</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={true}
        className="pb-3"
      >
        {services.map((service) => (
          <div key={service.title} className="px-2">
            <Link href={service.href} className="text-decoration-none">
              <div className="card h-100 border-0 shadow-sm">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-dark mb-0">{service.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
