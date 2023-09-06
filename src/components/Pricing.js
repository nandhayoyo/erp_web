import React, { useState } from "react";
import "../styles/Pricing.scss";
import LoginPopup from "./LoginPopup";
import Modal from "./Modal";

const Pricing = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [setIsLoggedIn] = useState(false);
  const [setCurrentUser] = useState(null);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      setCurrentUser({ username: "admin" });
    }
  };

  const handleCloseLoginPopup = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="pricing-container">
      <div className="intro">
        <h2 data-testid="about-title">
          Pilihlah Paket yang Sesuai dengan Kebutuhan Anda
        </h2>
        <p data-testid="about-title-caption">
          Kami menyediakan beberapa opsi paket yang dapat Anda pilih untuk
          membantu Anda mengelola bisnis dengan lebih baik. Setiap paket
          dilengkapi dengan berbagai fitur yang membantu Anda mencapai tujuan
          bisnis Anda.
        </p>
      </div>
      <hr className="style-two"></hr>
      <div className="pricing-cards" data-testid="pricing-cards">
        <div className="tier-container" data-testid="tier-container-satu">
          <div className="pricing-card" data-testid="pricing-card-satu">
            <h3 data-testid="tier-title-satu">TIER 1 / Basic</h3>
            <ul data-testid="tier-content-satu">
              <li>Mencatat barang masuk</li>
              <li>Mencatat barang keluar</li>
              <li>Mencatat hasil keuntungan</li>
            </ul>
            <div className="pricing-footer" data-testid="tier-buy-satu">
              <h4>$50</h4>
              <button onClick={handleLoginClick}>Buy</button>
            </div>
          </div>
          <p className="tier-caption" data-testid="tier-caption-satu">
            Untuk memulai perjalanan Anda dalam mengelola bisnis dengan baik.
            Dengan Tier 1, Anda bisa mencatat barang masuk dan keluar dengan
            cepat, serta menghitung hasil keuntungan Anda. Solusi yang sederhana
            untuk pengelolaan bisnis yang efisien.
          </p>
        </div>
        <div
          className="tier-container-reverse"
          data-testid="tier-container-dua"
        >
          <div className="pricing-card" data-testid="pricing-card-dua">
            <h3 data-testid="tier-title-dua">TIER 2 / Business</h3>
            <ul data-testid="tier-content-dua">
              <li>Mencatat barang masuk dan keluar</li>
              <li>Mencatat Keuntungan</li>
              <li>Dapat menganalisa hasil penjualan dengan CHART</li>
              <li>Support 7x24 Jam</li>
            </ul>
            <div className="pricing-footer" data-testid="tier-buy-dua">
              <h4>$150</h4>
              <button onClick={handleLoginClick}>Buy</button>
            </div>
          </div>
          <p className="tier-caption" data-testid="tier-caption-dua">
            Selain fitur-fitur Tier 1, Anda dapat memantau hasil penjualan Anda
            dengan grafik yang informatif. Dengan dukungan 7x24 jam, bisnis Anda
            akan berjalan lancar. Tingkatkan efisiensi dan pertumbuhan bisnis
            Anda dengan Tier 2.
          </p>
        </div>
        <div className="tier-container" data-testid="tier-container-tiga">
          <div className="pricing-card" data-testid="pricing-card-tiga">
            <h3 data-testid="tier-title-tiga">TIER 3 / Entrepreneur</h3>
            <ul data-testid="tier-content-tiga">
              <li>Mencatat barang masuk dan keluar</li>
              <li>Mencatat Keuntungan</li>
              <li>Dapat menganalisa hasil penjualan dengan CHART</li>
              <li>Support 7x24 Jam</li>
              <li>Export data ke Excel</li>
              <li>AI Prediksi penghasilan</li>
            </ul>
            <div className="pricing-footer" data-testid="tier-buy-tiga">
              <h4>$200</h4>
              <button onClick={handleLoginClick}>Buy</button>
            </div>
          </div>
          <p className="tier-caption" data-testid="tier-caption-tiga">
            Semua keunggulan Tier 1 dan Tier 2 tersedia di sini, dan lebih dari
            itu. Ekspor data Anda ke Excel, gunakan kecerdasan buatan untuk
            meramal penghasilan, dan nikmati dukungan 24/7. Jangan pernah
            tinggalkan potensi bisnis Anda di meja dengan Tier 3.
          </p>
        </div>
        <Modal isOpen={isLoginModalOpen} onClose={handleCloseLoginPopup}>
          <LoginPopup onLogin={handleLogin} onClose={handleCloseLoginPopup} />
        </Modal>
      </div>
    </div>
  );
};

export default Pricing;
