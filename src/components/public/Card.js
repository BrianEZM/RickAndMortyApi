import React from "react";
import { Link } from "react-router-dom";

const Card = ({ mascota }) => {
  return (
    <div>
      <div className="col">
        <div className="card shadow-sm">
          <img width="100%" src={mascota.image} alt="imagen fetcheada" />
          <title>{mascota.name}</title>
          <h3>{mascota.name}</h3>

          <div className="card-body">
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <Link to={`details/${mascota.id}`} className="btn btn-sm btn-outline-secondary">
                    Ver detalles del personaje
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
