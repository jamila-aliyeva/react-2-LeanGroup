import React, { Component } from "react";



export class Card extends Component {
  render() {
    const { img, title, text, phone, email } = this.props;
    return (
      <div className="group__card">
        <div className="group_card_body">
          <img src={img} alt="" />
        </div>
        <div className="news_card_content">
          <h3>{title}</h3>
          <p>{text}</p>
          <h4>{phone}</h4>
          <h5>{email}</h5>
        </div>
      </div>
    );
  }
}

export default Card;
