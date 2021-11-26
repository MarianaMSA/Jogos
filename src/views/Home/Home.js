import React from "react";
import Banner from "../../components/Banner/Banner";
import ContainerAll from "../../components/Containers/ContainerAll";
import Search from "../../components/Search/Search";

import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <Search />
      <Banner />
      <ContainerAll />
    </div>
  );
};

export default Home;
