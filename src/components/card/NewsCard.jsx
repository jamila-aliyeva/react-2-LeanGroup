import React, { Component } from "react";

export class NewsCard extends Component {
  render() {
    const { img, date, text } = this.props;
    return (
      <div className="news__card">
        <div className="news_card_body">
          <img src={img} alt="" />
        </div>
        <div className="news_card_content">
          <h3>{date}</h3>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default NewsCard;
