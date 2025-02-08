import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "@/components/heder/Header";
import Footer from "@/components/footer/Footer";
// import LocationFilter from "../components/LocationFilter";
// import ServiceProviderCard from "../components/ServiceProviderCard";
// import BenefitsCard from "../components/BenefitsCard";

const serviceProviders = [
  {
    name: "Zubhair Estate Contractor",
    rating: 4.9,
    reviews: 7,
    servicesCompleted: 109,
    yearsInBusiness: 7,
    image: "/assets/images/ads2.jpg",
  },
  {
    name: "Saikat Tubewell",
    rating: 4.8,
    reviews: 6,
    servicesCompleted: 22,
    yearsInBusiness: 7,
    image: "/assets/images/ads2.jpg",
  },
];

export default function index() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Matching home renovation experts near you</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* <LocationFilter /> */}

            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Full Home Renovation</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Modern Transformation</span>
            </div>
            {/* 
          {serviceProviders.map((provider, index) => (
            <ServiceProviderCard key={index} {...provider} />
          ))} */}
          </div>

          <div className="lg:col-span-1">
            {/* <BenefitsCard /> */}
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}
