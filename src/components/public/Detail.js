import React, { useEffect, useState } from "react";
import RMService from "../../services/RM.service";
import { Link, useParams, useLocation } from "react-router-dom";

const Detail = () => {

  const [mascota, setMascota] = useState({});
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    RMService.getCharacterById(id)
    .then((data) => setMascota(data))
  }, [id]);

  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={mascota.image} className="card-img-top" alt="imagen" />
      <div className="card-body">
        <h5 className="card-title">{mascota.name}</h5>
        <p className="card-text">Signos vitales: {mascota.status}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Especie: {mascota.species}</li>
        <li className="list-group-item">Genero: {mascota.gender}</li>
        <li className="list-group-item">Identificador: {mascota.id}</li>
      </ul>
      <div className="card-body">
        {/* <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a> */}
        <Link to={"/"} className="btn btn-sm btn-outline-secondary">
          Volver al menu principal
        </Link>
      </div>
    </div>
  );
};

export default Detail;
