import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import HeaderBottom from "./components/HeaderBottom";

const App = () => (
  <div className="wrapper">
    <Header />
    <HeaderBottom />
    <Content />
    <Footer />
  </div>
);

export default App;
