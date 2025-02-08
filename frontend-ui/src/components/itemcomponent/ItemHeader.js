import { Star } from "lucide-react";

export function ItemHeader({ city, address, title, rating, reviews }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="dropdown mb-3">
          <button
            className="btn btn-link text-dark p-0 text-decoration-none dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            <h6 className="mb-1">{city}</h6>
            <small className="text-muted">{address}</small>
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item">Change Location</button>
            </li>
          </ul>
        </div>

        <h1 className="h4 mb-2">{title}</h1>
        <div className="d-flex align-items-center">
          <Star className="text-warning me-1 fill-warning" />
          <span className="fw-bold me-1">{rating}</span>
          <span className="text-muted">({reviews.toLocaleString()} reviews)</span>
        </div>
      </div>
    </div>
  );
}
