import React from "react";
import "../styles/Home2.scss";
import Home2image from "../assets/images/home2.svg";
import Home3image from "../assets/images/home3.svg";

const Home2 = () => {
  return (
    <>
      <div className="home2-container" id="id_home_2">
        <div className="container-page">
          <div className="home2-row">
            <div className="container">
              <h2>Apa itu ERD ?</h2>
              <hr className="style-two"></hr>
              <p>
                ERP, atau Enterprise Resource Planning, adalah sebuah konsep dan
                sistem perangkat lunak yang dirancang untuk membantu perusahaan
                mengelola berbagai aspek operasional dan bisnis mereka secara
                efisien. Sistem ERP mengintegrasikan berbagai fungsi dan
                departemen dalam satu platform perangkat lunak tunggal. Ini
                termasuk fungsi-fungsi seperti manajemen keuangan, manufaktur,
                rantai pasokan, sumber daya manusia, penjualan, dan lainnya.
              </p>
            </div>
            <img src={Home2image} alt="img" width={350} className="home2img" />
          </div>

          <div className="home2-row-reverse">
            <div className="container">
              <h2>Mengapa ERD penting ?</h2>

              <hr className="style-two"></hr>
              <p>
                ERD adalah alat yang sangat berguna dalam perancangan dan
                pengembangan basis data serta sistem informasi, dan membantu
                dalam mencapai konsistensi, efisiensi, dan keamanan data yang
                diperlukan dalam lingkungan bisnis dan teknologi informasi saat
                ini.
              </p>
            </div>
            <img src={Home3image} alt="img" width={350} className="home2img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2;
