import { Star } from "lucide-react";

const services = [
  {
    title: "Basic Full Home Cleaning",
    price: 3099,
    rating: 4.9,
    reviews: 443,
    description:
      "Regular upkeep and general cleaning, including dusting, vacuuming, mopping, and surface cleaning in all rooms.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Deep Full Home Cleaning",
    price: 4299,
    rating: 4.8,
    reviews: 459,
    description:
      "Thorough cleaning with deep vacuuming, intensive bathroom and kitchen care, machine scrubbing, and appliance cleaning.",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export const ItemDetails = () => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title mb-4">Furnished Apartment</h5>

      {services.map((service) => (
        <div key={service.title} className="mb-4 pb-4 border-bottom">
          <div className="row">
            <div className="col-md-8">
              <h6 className="mb-2">{service.title}</h6>
              <div className="d-flex align-items-center mb-2">
                <Star className="text-warning me-1 fill-warning" />
                <span className="fw-bold me-1">{service.rating}</span>
                <span className="text-muted">({service.reviews} reviews)</span>
              </div>
              <div className="h5 mb-3">₹{service.price}</div>
              <p className="text-muted mb-3">{service.description}</p>
              <button className="btn btn-link text-primary p-0">Show more</button>
            </div>
            <div className="col-md-4">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="img-fluid rounded"
              />
              <button className="btn btn-primary w-100 mt-3">Add</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

