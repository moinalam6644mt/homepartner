import Image from "next/image"

const promotions = [
  {
    title: "Full House Cleaning Starts",
    price: "₹2,599",
    color: "warning",
    image: "/assets/images/ads2.jpg",
  },
  {
    title: "Plumbing Starts",
    price: "₹250",
    color: "info",
    image: "/assets/images/ads2.jpg",
  },
  {
    title: "Waxing Starts",
    price: "₹200",
    color: "danger",
    image: "/assets/images/ads2.jpg",
  },
]

const PromotionalBanners = () => {
  return (
    <div className="row g-4 mb-5">
      {promotions.map((promo) => (
        <div key={promo.title} className="col-md-4">
          <div className={`card bg-${promo.color} text-white border-0 overflow-hidden`}>
            <div className="card-body p-4">
              <h3 className="card-title h4">{promo.title}</h3>
              <p className="card-text h5">at Just {promo.price}</p>
              <button className="btn btn-light mt-2">Book Now</button>
            </div>
            <Image
              src={promo.image || "/placeholder.svg"}
              alt={promo.title}
              width={400}
              height={200}
              className="position-absolute end-0 bottom-0 w-50 h-100 object-fit-cover opacity-75"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PromotionalBanners;