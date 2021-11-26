import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Api from "../../Api/Api";

const ContainerAll = () => {
  const [games, setGames] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getGames = async () => {
    const response = await Api.fetchGetAll();
    const data = await response.json();
    setGames(data);
  };

  useEffect(() => {
    setMounted(true);
    getGames();
  }, [mounted]);

  return (
    <section className="card-container">
      {games.map((game) => (
        <Card
          key={game.id}
          img={game.image}
          nome={game.name}
          year={game.year}
          price={game.price}
        />
      ))}
    </section>
  );
};

export default ContainerAll;
