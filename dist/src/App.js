import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import HeaderBottom from "./components/HeaderBottom";
import ShortenList from "./components/ShortenList";
import ShortenCard from "./components/ShortenCard";

const App = () => (
  <div className="wrapper">
    <Header />
    <HeaderBottom />
    <ShortenList />
    <Content />
    <Footer />
  </div>
);

export default App;
