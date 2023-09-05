import React, { Component } from "react";
import "./Info.scss";

// import FormName from "../../assets/images/name.svg";
// import FormCall from "../../assets/images/call.svg";

export class Info extends Component {
  render() {
    return (
      <section className="info">
        <div className="container">
          <h2>
            Получить подробную <span>информацию</span>
          </h2>
          <p>
            Просто заполните форму, наш менеджер свяжется с вами в ближайшее
            время
          </p>
          <form>
            <div className="form_wrapper">
              <div className="form_card">
                {/* <img src={FormName} alt="" /> */}
                <input type="text" placeholder="Ваше имя" />
              </div>
              <div className="form_card">
                {/* <img src={FormCall} alt="" /> */}
                <input type="tel" placeholder="+375 (29) 0000000" />
              </div>
            </div>
            <textarea placeholder="Комментарий"></textarea>
          </form>
          <a className="form-btn" href="#home">
            Получить информацию
          </a>
        </div>
      </section>
    );
  }
}

export default Info;
