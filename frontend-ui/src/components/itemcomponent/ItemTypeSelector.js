const serviceTypes = [
  {
    title: "Furnished Apartment",
    image: "/assets/images/ads2.jpg",
  },
  {
    title: "Unfurnished Apartment",
    image: "/assets/images/ads2.jpg",
  },
  {
    title: "Furnished Independent",
    image: "/assets/images/ads2.jpg",
  },
  {
    title: "Unfurnished Independent",
    image: "/assets/images/ads2.jpg",
  },
  {
    title: "By Room",
    image: "/assets/images/ads2.jpg",
  },
];

export const ItemTypeSelector = () => (
  <div className="row g-3">
    {serviceTypes.map((type) => (
      <div key={type.title} className="col-4 col-md-3 col-lg-2">
        <button className="btn btn-outline-light p-0 w-100 h-100 border">
          <img
            src={type.image || "/placeholder.svg"}
            alt={type.title}
            className="img-fluid mb-2"
          />
          <div className="small px-2 pb-2">{type.title}</div>
        </button>
      </div>
    ))}
  </div>
);
