import React from "react";
import "../styles/Home.scss";
import HomeImage from "../assets/images/home.svg";
import Home2 from "./Home2";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <img src={HomeImage} alt="Home" width={500} />

        <h2>Selamat datang di ERP Website</h2>
        <p>
          Website ini membantu Anda dalam mencatat barang masuk, barang keluar,
          dan mencatat keuntungan setiap harinya.
        </p>
      </div>
      <Home2 />
    </>
  );
};

export default Home;
