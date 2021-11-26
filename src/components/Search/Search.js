import React, { useState } from "react";
import Api from "../../Api/Api";
import { Modal } from "react-responsive-modal";
import Card from "../Card/Card";
import "./Search.css";

const Search = (props) => {
  const _id = "";
  const [game, setGame] = useState({});
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const getGameById = async () => {
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    setGame(result);
    onOpenModal();
  
  return (
    <form onSubmit={getGameById} className="navbar-form">
      <input type="text" placeholder="Digite o nome..." />
      {open && (
        <Modal open={open} onClose={onCloseModal} center>
          <Card
            img={game.image}
            nome={game.name}
            year={game.year}
            price={game.price}
          />
        </Modal>
      )}
      )
    </form>
  );
};

export default Search;
