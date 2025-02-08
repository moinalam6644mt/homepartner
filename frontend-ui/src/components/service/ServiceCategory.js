import Image from "next/image";
import { Button, Card } from "react-bootstrap";

const CATEGORIES = [
  {
    id: "maintenance",
    title: "Home Maintenance & Repair",
    description:
      "Ensure your home stays in top condition with our reliable home maintenance and repair services. Our skilled professionals tackle everything from minor fixes to major overhauls, keeping your living space safe and comfortable.",
    services: [
      {
        title: "Plumbers",
        image: "/assets/images/ads2.jpg", // Missing image
      },
      {
        title: "Electricians",
        image: "/assets/images/ads2.jpg", // Missing image
      },
    ],
    additionalServices: ["Sofa Repair", "Bird Net", "Ceiling Cloth Hanger Installation"],
  },
  {
    id: "cleaning",
    title: "Cleaning Services",
    description:
      "Experience pristine living spaces with our top-notch cleaning services, tailored to meet your unique needs. Trust our skilled professionals to transform your home into a haven of cleanliness and comfort.",
    services: [
      {
        title: "House Cleaning",
        image: "/assets/images/ads2.jpg", // Missing image
      },
      {
        title: "Floor Cleaning",
        image: "/assets/images/ads2.jpg", // Missing image
      },
    ],
    additionalServices: ["Deep Cleaning", "Bathroom Cleaning", "Kitchen Cleaning"],
  },
];

export default function ServiceCategory() {
  return (
    <div className="container py-5">
      {CATEGORIES.map((category) => (
        <section key={category.id} id={category.id} className="mb-5">
          <h2 className="mb-3 text-primary">{category.title}</h2>
          <p className="text-muted">{category.description}</p>

          {/* Service Cards */}
          <div className="row g-4 my-4" >
            {category.services.map((service) => (
              <div key={service.title} className="col-md-4 col-lg-3">
                <Card className="h-100 shadow-sm">
                  <Image
                    src={service.image || "placeholder"} // Fallback to placeholder
                    alt={service.title}
                    width={300}
                    height={200}
                    className="card-img-top"
                  />
                  <Card.Body>
                    <Card.Title className="h6 text-center">{service.title}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="d-flex flex-wrap gap-3">
            {category.additionalServices.map((service) => (
              <Button key={service} variant="outline-primary" className="text-truncate">
                {service}
              </Button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
