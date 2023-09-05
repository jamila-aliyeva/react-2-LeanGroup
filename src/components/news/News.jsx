import React, { Component } from "react";
import "./News.scss";
import NewsCard from "../card/NewsCard";

import NewsImge1 from "../../assets/images/news-1.png";
import NewsImge2 from "../../assets/images/news-2.png";
import NewsImge3 from "../../assets/images/news-3.png";
export class News extends Component {
  render() {
    return (
      <section className="news">
        <div className="container">
          <h2>Новости</h2>
          <div className="news_row">
            <NewsCard
              img={NewsImge1}
              date="28.01.2022"
              text="ЛеанГрупп серебряный призер EcoVadis!"
            />
            <NewsCard
              img={NewsImge2}
              date="21.01.2022"
              text="ЛеанГрупп серебряный призер EcoVadis!"
            />
            <NewsCard
              img={NewsImge3}
              date="16.12.2021"
              text="Туба, как вид упаковки"
            />
          </div>
          <button>Все новости</button>
        </div>
      </section>
    );
  }
}

export default News;
