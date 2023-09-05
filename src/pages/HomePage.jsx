import React, { Component } from "react";
import Hero from "../components/hero/Hero";
// import StickCasausel from "../components/carausel/Carausel";
import Company from "../components/company/Company";
import Sertificat from "../components/sertificat/Sertificat";
import Info from "../components/info/Info";
import Group from "../components/group/Group";
import News from "../components/news/News";
import Product from "../components/product/Product";
import Layout from "../components/layout/Layout";

export class HomePage extends Component {
  render() {
    return (
      <Layout>
        {/* <StickCasausel /> */}
        <Hero />
        <Company />
        <Sertificat />
        <Product />
        <Info />
        <Group />
        <News />
      </Layout>
    );
  }
}

export default HomePage;
