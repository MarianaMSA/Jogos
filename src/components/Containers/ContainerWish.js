import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Api from "../../Api/Api";

const ContainerWish = () => {
  const [gamesWish, setGamesWish] = useState([]);

  const getGamesWish = async () => {
    const response = await Api.fetchGetWishList();
    const data = await response.json();
    setGamesWish(data);
  };

  useEffect(() => {
    getGamesWish();
  }, []);

  return (
    <section className="card-container">
      {gamesWish.map((game, index) => (
        <Card
          key={index}
          img={game.image}
          nome={game.name}
          year={game.year}
          price={game.price}
        />
      ))}
    </section>
  );
};

export default ContainerWish;
