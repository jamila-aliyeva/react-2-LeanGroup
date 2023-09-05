import React, { Component } from "react";
import "./Header.scss";

import HeaderLogo from "../../assets/images/header-logo.svg";
import Language from "../../assets/images/language.svg";
import Menu from "../../assets/images/menu.svg";

export class Header extends Component {
  state = {
    isOpen: false,
  };
  render() {
    const toggle = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };
    return (
      <header>
        <nav className="container">
          <div className="header_wrapper">
            <div className="header_logo">
              <a href="#hero">
                <img src={HeaderLogo} alt="" />
              </a>
            </div>
            <ul className="header-list">
              <li className="header-item" onClick={toggle}>
                <a href="#hero">Продукция</a>
              </li>
              {/* <ul
                className={`nav-list ${
                  this.state.isOpen ? "" : "navbar-close"
                }`}
              >
                <li className="header-item" className="nav-item">
                  <a href="#home">Экструзионные тубы</a>
                </li>
                <li className="header-item" className="nav-item">
                  <a href="#home">Ламинатные тубы</a>
                </li>
                <li className="header-item" className="nav-item">
                  <a href="#home">Другая упаковка</a>
                </li>
              </ul> */}
              <li className="header-item">
                <a href="#hero">Сертификаты</a>
              </li>
              <li className="header-item">
                <a href="#hero">Наша команда</a>
              </li>
              <li className="header-item">
                <a href="#hero">О нас</a>
              </li>
              <li className="header-item">
                <a href="#hero">Новости</a>
              </li>
              <li className="header-item">
                <a href="#hero">Вакансии</a>
              </li>
              <li className="header-item">
                <a href="#hero">Контакты</a>
              </li>
            </ul>
            <img className="hiddin-menu" src={Menu} alt="" />
            <div className="language">
              <h3 className="lang_title">RU</h3> |{" "}
              <h3 className="lang_title">Eng</h3>
            </div>
            <img className="hiddin-lang" src={Language} alt="" />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
