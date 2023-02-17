import React from "react";
import Awards from "../../components/Awards/Awards";
import Business from "../../components/Business/Business";
import HallFame from "../../components/HallFame/HallFame";
import Header from "../../components/Header/Header";
import TopClients from "../../components/TopClients/TopClients";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Business />
      <HallFame />
      <TopClients />
      <Awards />
    </div>
  );
}

export default Home;
