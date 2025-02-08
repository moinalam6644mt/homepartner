"use client"
import React from 'react';

const ServiceHeader = () => {
  return (
    <div className="text-center py-4">
      <h1 className="mb-4 display-5 fw-bold text-dark">Services By HomePartner</h1>
      <p className="mx-auto text-muted" style={{ maxWidth: '700px' }}>
        HomePartner provides services at your doorstep. Find services in your city.
      </p>
      <p className="mx-auto mt-4 text-muted" style={{ maxWidth: '700px' }}>
        HomePartner simplifies your home maintenance, design, and organization needs by providing convenient doorstep
        services. Choose your city and desired service, and we'll connect you with top professionals tailored to your
        requirements. From appliance repairs to room makeovers and more, trust HomePartner to handle it all – even
        services extending beyond your home.
      </p>
    </div>
  );
};

export default ServiceHeader;
