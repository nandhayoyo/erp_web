import React from "react";
import aboutImage from "../assets/images/about.svg";
import "../styles/About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="container-page-about">
        <h2 data-testid="about-title">About Us</h2>
        <hr></hr>
        <p data-testid="about-caption-satu">
          Kami adalah tim yang berdedikasi untuk membantu Anda mengelola bisnis
          dengan lebih baik. Dengan website ini, kami menyediakan solusi yang
          efisien untuk mencatat barang masuk, barang keluar, dan menghitung
          keuntungan Anda setiap hari.
        </p>
        <p data-testid="about-caption-dua">
          Dibuat dengan cinta dan komitmen untuk menyederhanakan proses bisnis
          Anda, kami hadir untuk menjadi mitra terpercaya dalam perjalanan
          kesuksesan Anda. Dengan ERP Website, Anda dapat fokus pada apa yang
          Anda cintai, dan biarkan kami mengurus sisanya. Selamat datang di
          dunia yang lebih efisien dan terorganisir!
        </p>
      </div>
      <img src={aboutImage} alt="About" />
    </div>
  );
};

export default About;
