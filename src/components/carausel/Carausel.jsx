import React, { Component } from "react";
import Slider from "react-slick";
import "./Carausel.scss";

export default class StickCasausel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className="carausel">
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
