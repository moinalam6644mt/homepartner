import Image from "next/image";

const Hero = () => {
  return (
    <section className="position-relative text-white overflow-hidden" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
      {/* Decorative Pattern */}
      <div className="position-absolute end-0 top-0">
        <div className="d-flex gap-1 opacity-25">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="d-flex flex-column gap-1">
              {[...Array(10)].map((_, j) => (
                <div
                  key={j}
                  className="rounded-circle bg-white"
                  style={{ width: "4px", height: "4px" }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container py-5" style={{ position: "relative", zIndex: 2 }}>
        <div className="row align-items-center min-vh-75">
          {/* Hero Content */}
          <div className="col-lg-6 py-5">
            <h1 className="display-4 fw-bold mb-4">Home Service At Your DoorStep</h1>
            <p className="lead mb-4">Discover a variety of services tailored to your needs—book now for a seamless experience!</p>
            <button className="btn btn-light btn-lg px-4">Book Now</button>
          </div>

          {/* Hero Image */}
          <div className="col-lg-6">
            <Image
              src="/assets/images/home-banner.jpg" // Use a transparent PNG image
              alt="Delivery Person"
              width={800}
              height={600}
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Transparent Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
          zIndex: 1,
        }}
      />
    </section>
  );
};

export default Hero;
