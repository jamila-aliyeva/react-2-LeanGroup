import React, { Component } from "react";
import "./Group.scss";
import Card from "../card/Card";

import GroupImg1 from "../../assets/images/commad-1.png";
import GroupImg2 from "../../assets/images/commad-2.png";
import GroupImg3 from "../../assets/images/commad-3.png";
import GroupImg4 from "../../assets/images/commad-4.png";
import GroupImg5 from "../../assets/images/commad-5.png";

export class Group extends Component {
  render() {
    return (
      <section className="group">
        <div className="container">
          <h2>
            Наша <span>команда</span>
          </h2>
          <div className="group_row">
            <Card
              img={GroupImg1}
              title="Войнич Дарья"
              text="Заместитель директора по продажам"
              phone="+375 (17) 270-53-77 (317)"
              email="dmitrochenko@leangroup.by"
            />
            <Card
              img={GroupImg2}
              title="Мисько Екатерина"
              text="Начальник отдела сопровождения"
              phone=" +375 29 112-73-48"
              email="dk.melnichenko@leangroup.by"
            />
            <Card
              img={GroupImg3}
              title="Дмитроченко Дмитрий"
              text="Начальник отдела допечатной подготовки"
              phone="+375 (17) 270-53-77 (333)"
              email="dmitrochenko@leangroup.by"
            />
            <Card
              img={GroupImg4}
              title="Антух Евгений"
              text="Начальник отдела снабжения"
              phone=" +375 44 764-16-28"
              email="j.antuh@leangroup.by"
            />
            <Card
              img={GroupImg5}
              title="Мисник Елена"
              text="Специалист по работе с клиентами"
              phone=" +375 29 329-34-03"
              email="e.misnik@leangroup.by"
            />
          </div>
          <button>Наша команда</button>
        </div>
      </section>
    );
  }
}

export default Group;
