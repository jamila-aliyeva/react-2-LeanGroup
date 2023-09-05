import React, { Component } from "react";
import "./Footer.scss";
import ScrollToTop from "react-scroll-to-top";

import FooterLogo from "../../assets/images/header-logo.svg";
import SocialVk from "../../assets/images/vk.svg";
import SocialFb from "../../assets/images/fb.svg";
import SocialLk from "../../assets/images/linkedin.svg";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <ScrollToTop smooth color="#ef7c00" />
          <div className="footer-top">
            <img src={FooterLogo} alt="" />
            <div className="social">
              <a href="https://www.instagram.com/">
                <img src={SocialVk} alt="" />
              </a>
              <a href="https://www.facebook.com/ ">
                <img src={SocialFb} alt="" />
              </a>
              <a href="linkinin.com">
                <img src={SocialLk} alt="" />
              </a>
            </div>
          </div>
          <div className="footer_content">
            <div className="footer_content_aside">
              <ul>
                <li>
                  <span>Продукция</span>
                </li>
                <br />
                <br />
                <li>Ламинатные тубы</li>
                <li>Экструзионные тубы</li>
                <li>Другая упаковка</li>
              </ul>
              <ul>
                <li>
                  <span>Компания</span>
                </li>
                <br />
                <br />
                <li>О нас</li>
                <li>Наша команда</li>
                <li>Наша команда</li>
              </ul>
              <ul>
                <li>
                  <span>Разделы</span>
                </li>
                <br />
                <br />
                <li>Контакты</li>
                <li>Новости</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div className="footer_coontent_bside">
              <div className="bside_wrapper">
                <div className="bside_cart">
                  <h3>Беларусь</h3>
                  <p>+375 (17) 270 53 77</p>
                  <p>+375 (17) 270 53 77</p>
                </div>
                <div className="bside_cart">
                  <h3>Европа</h3>
                  <p>+48 73 1111 044</p>
                </div>
                <div className="bside_cart">
                  <h3>Москва</h3>
                  <p>+7 (495) 280 73 44</p>
                  <p>+7 (495) 280 73 44</p>
                </div>
                <div className="bside_cart">
                  <h3>Екатеринбург</h3>
                  <p>+7 (343) 346 82 06</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
