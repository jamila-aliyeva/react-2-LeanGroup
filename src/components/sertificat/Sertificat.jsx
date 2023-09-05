import React, { Component } from "react";
import Slider from "react-slick";
import "./Sertificat.scss";

import sertificat1 from "../../assets/images/sertificat-1.png";
import sertificat2 from "../../assets/images/sertificat-2.png";
import sertificat3 from "../../assets/images/sertificat-3.png";
import sertificat4 from "../../assets/images/sertificat-3.png";
import sertificat5 from "../../assets/images/sertificat-4.png";

export class Sertificat extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <section className="certificat">
        <div className="container">
          <h2>
            Качество продукции подтверждают <span>сертификаты</span>
          </h2>
          <Slider {...settings}>
            <div className="carausel_card">
              <img src={sertificat1} alt="" />
            </div>
            <div className="carausel_card">
              <img src={sertificat2} alt="" />
            </div>
            <div className="carausel_card">
              <img src={sertificat3} alt="" />
            </div>
            <div className="carausel_card">
              <img src={sertificat4} alt="" />
            </div>
            <div className="carausel_card">
              <img src={sertificat5} alt="" />
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default Sertificat;
