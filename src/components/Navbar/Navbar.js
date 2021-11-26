import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "./../Button/Button";
import { useState } from "react";

const NavBar = () => {
  // const api = "https://www.freetogame.com/api/games"

  // fetch(api)
  // .then(resp => resp.json())
  // .then(data => console.log(data))

  const [activeLink, setActiveLink] = useState("");

  const handleClick = (e) => {
    setActiveLink(e.target.name);
  };

  return (
    <nav>
      <div className="logo">Steam</div>
      <ul className="lista-container">
        <li className={`lista-navbar ${activeLink === "home" ? "clikad" : ""}`}>
          <Link
            onClick={handleClick}
            name="home"
            className="link-navbar"
            to="/"
          >
            Home
          </Link>
        </li>
        <li
          className={`lista-navbar ${
            activeLink === "favoritos" ? "clikad" : ""
          }`}
        >
          <Link
            onClick={handleClick}
            name="favoritos"
            className="link-navbar"
            to="/favoritos"
          >
            Favoritos
          </Link>
        </li>
        <li
          className={`lista-navbar login ${
            activeLink === "login" ? "clikad" : ""
          }`}
        >
          <Button>
            <Link
              onClick={handleClick}
              name="login"
              className="link-navbar"
              to="/login"
            >
              Login
            </Link>
          </Button>
        </li>
        <li
          className={`lista-navbar registrar ${
            activeLink === "registrar" ? "clikad" : ""
          }`}
        >
          <Button>
            <Link
              onClick={handleClick}
              name="registrar"
              className="link-navbar"
              to="/registrar"
            >
              Registrar
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
