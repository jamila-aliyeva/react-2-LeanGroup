import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Product.scss";

import productImg1 from "../../assets/images/product-1.png";
import productImg2 from "../../assets/images/product-2.png";
import productImg3 from "../../assets/images/product-3.png";
import productImg4 from "../../assets/images/product-4.png";
import productImg5 from "../../assets/images/product-5.png";

export class Product extends Component {
  render() {
    return (
      <section className="product">
        <div className="container">
          <h2>
            Наша <span>продукция</span>
          </h2>
          <Tabs>
            <TabList>
              <Tab>
                <button className="tabs-top">Ламинатные тубы</button>
              </Tab>
              <Tab>
                <button className="tabs-top">Экструзионные тубы</button>
              </Tab>
              <Tab>
                <button className="tabs-top">Другая упаковка</button>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="tabs-img">
                <img src={productImg1} alt="" />
                <img src={productImg2} alt="" />
                <img src={productImg3} alt="" />
                <img src={productImg4} alt="" />
                <img src={productImg5} alt="" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tabs-img">
                <img src={productImg1} alt="" />
                <img src={productImg2} alt="" />
                <img src={productImg3} alt="" />
                <img src={productImg4} alt="" />
                <img src={productImg5} alt="" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tabs-img">
                <img src={productImg1} alt="" />
                <img src={productImg2} alt="" />
                <img src={productImg3} alt="" />
                <img src={productImg4} alt="" />
                <img src={productImg5} alt="" />
              </div>
            </TabPanel>
          </Tabs>
          <button className="tabs-btn">Перейти в каталог</button>
        </div>
      </section>
    );
  }
}

export default Product;
