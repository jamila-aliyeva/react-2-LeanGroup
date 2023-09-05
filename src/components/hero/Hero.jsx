import React, { Component } from "react";
import "../hero/Hero.scss";
import Slider from "react-slick";
// import "./Carausel.scss";

import HeroBg from "../../assets/images/hero-bg.jpg";

export class Hero extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className="hero" style={{ backgroundImage: `url(${HeroBg})` }}>
        <div className="container">
          <Slider {...settings}>
            <div className="carausel_card">
              <h3> LEANGROUP - тубы и этикетки</h3>
              <h1>Ламинатные тубы</h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>

              <a href="#catalog">Каталог</a>
            </div>
            <div className="carausel_card">
              <h3> LEANGROUP - тубы и этикетки</h3>
              <h1>Ламинатные тубы</h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>

              <a href="#catalog">Каталог</a>
            </div>
            <div className="carausel_card">
              <h3> LEANGROUP - тубы и этикетки</h3>
              <h1>Ламинатные тубы</h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>

              <a href="#catalog">Каталог</a>
            </div>
            <div className="carausel_card">
              <h3> LEANGROUP - тубы и этикетки</h3>
              <h1>Ламинатные тубы</h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>

              <a href="#catalog">Каталог</a>
            </div>
            <div className="carausel_card">
              <h3> LEANGROUP - тубы и этикетки</h3>
              <h1>Ламинатные тубы</h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>

              <a href="#catalog">Каталог</a>
            </div>
            <div className="carausel_card">
              <h3> LEANGROUP - тубы и этикетки</h3>
              <h1>Ламинатные тубы</h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>

              <a href="#catalog">Каталог</a>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default Hero;
