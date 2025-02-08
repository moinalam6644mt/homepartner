import { ShoppingCart, Star, CheckCircle2, ClipboardCheck, Headphones } from "lucide-react";

export const ItemSidebar = () => {
  const cashbackOffers = [
    { logo: "/placeholder.svg?height=24&width=24", alt: "Amazon", offer: "Amazon cashback upto ₹500", bgClass: "bg-primary bg-opacity-10" },
    { logo: "/placeholder.svg?height=24&width=24", alt: "CRED", offer: "CRED cashback upto ₹500", bgClass: "bg-success bg-opacity-10" },
  ];

  const whyHomeTriangle = [
    { icon: <ClipboardCheck className="text-primary" />, text: "Verified & Vetted professionals" },
    { icon: <Star className="text-primary" />, text: "Matched to your Needs." },
    { icon: <Headphones className="text-primary" />, text: "Customer support at every step." },
  ];

  return (
    <div className="sticky-top pt-2" style={{ top: "1rem" }}>
      {/* Cart Status */}
      <div className="card mb-4">
        <div className="card-body text-center py-5">
          <ShoppingCart className="mb-2" size={32} />
          <div>No package selected</div>
        </div>
      </div>

      {/* Service Provider */}
      <div className="card mb-4">
        <div className="card-body">
          <h6 className="card-title">Service done by</h6>
          <div className="d-flex align-items-start gap-3">
            <div className="bg-warning rounded-circle p-3">
              <span className="h5 text-white mb-0">J</span>
            </div>
            <div>
              <h6 className="mb-1">Jagannath Facility Service</h6>
              <div className="d-flex align-items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="text-warning fill-warning" size={16} />
                ))}
              </div>
              <div className="small text-muted">
                <CheckCircle2 size={14} className="me-1" />
                424 home services completed
              </div>
              <div className="small text-muted">
                <CheckCircle2 size={14} className="me-1" />
                12 reviews: 91% Positive
              </div>
              <div className="small text-muted">
                <CheckCircle2 size={14} className="me-1" />
                14 years in business
              </div>
              <button className="btn btn-link text-primary p-0 mt-2">See other pros</button>
            </div>
          </div>
        </div>
      </div>

      {/* Cashback Offers */}
      <div className="card mb-4">
        <div className="card-body">
          {cashbackOffers.map((offer, index) => (
            <div className="d-flex align-items-center gap-3 mb-3" key={index}>
              <div className={`${offer.bgClass} rounded p-2`}>
                <img src={offer.logo} alt={offer.alt} width={24} height={24} />
              </div>
              <div>{offer.offer}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why HomeTriangle */}
      <div className="card">
        <div className="card-body">
          <h6 className="card-title mb-4">Why Hometriangle?</h6>
          {whyHomeTriangle.map((item, index) => (
            <div className="d-flex align-items-center gap-3 mb-3" key={index}>
              {item.icon}
              <div>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
