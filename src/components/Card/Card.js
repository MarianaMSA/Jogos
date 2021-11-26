import React, { useState } from "react";
import "./Card.css";
import { FaHeart } from "react-icons/fa";

const Card = (props) => {
  const [favorito, setFavorito] = useState(false);

  return (
    <div className="card">
      <img src={props.img} alt={props.nome} />
      <div className="favo">
        <span>{props.nome}</span>
      </div>
      <div className="ano">
        <span>R${props.price}</span>
        <FaHeart
          onClick={() => setFavorito(!favorito)}
          className={`favorito ${favorito ? "sim" : ""}`}
        />
      </div>
    </div>
  );
};

export default Card;
