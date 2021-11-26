import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/Navbar.js";
import Home from "./views/Home/Home";
import Favoritos from "./views/Favoritos/Favoritos";
import Login from "./views/Login/Login";
import Registrar from "./views/Cadastro/Cadastro";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
