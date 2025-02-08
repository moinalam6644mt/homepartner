import Image from "next/image"
import Link from "next/link"

const blogs = [
  {
    category: "Construction, Architecture & Renovation",
    title: "How To Resolve Disputes With Your Contractor",
    description:
      "If you find yourself in conflict with your builder/contractor, heed the advice in the tips listed below to try to resolve them effectively.",
    date: "Jan 22, 2025",
    readTime: "6 minute read",
    image: "/assets/images/blogs1.jpg",
  },
  {
    category: "Real Estate & Property Management",
    title: "Exploring Flexible Financial Solutions for Homeowners",
    description:
      "Managing homeownership finances requires smart decisions. This blog covers flexible strategies to fund upgrades, purchases, or maintenance.",
    date: "Jan 17, 2025",
    readTime: "6 minute read",
    image: "/assets/images/realestate.jpg",
  },
  {
    category: "Cleaning, Sanitization & Pest Control",
    title: "Must-Know Office Cleaning Tips for a Healthier Workplace",
    description:
      "A clean office boosts health and productivity. From big offices to desks, these tips ensure a healthier, happier workplace for everyone.",
    date: "Jan 17, 2025",
    readTime: "6 minute read",
    image: "/assets/images/blogs3.jpg",
  },
]

const BlogSection = () => {
  return (
    <section className="py-5" >
      <h2 className="mb-4">
        Here are our latest blog that got the most <u>attention</u>.
      </h2>
      <div className="row g-4">
        {blogs.map((blog) => (
          <div key={blog.title} className="col-md-6 col-lg-4">
            <Link href="#" className="text-decoration-none">
              <div className="card h-100 border-0 shadow-sm">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="card-img-top"
                />
                <div className="card-body">
                  <div className="text-primary small mb-2">{blog.category}</div>
                  <h5 className="card-title text-dark">{blog.title}</h5>
                  <p className="card-text text-muted">{blog.description}</p>
                  <div className="d-flex gap-3 text-muted small">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section >
  )
}

export default BlogSection