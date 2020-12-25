import React from "react";
import "./App.css";
import Header from "./sections/header/Header";
import Menu from "./sections/header/Menu";
import Visual from "./sections/visual/Visual";
import Feature from "./sections/feature/Feature";
import Location from "./sections/location/Location";
import Pricing from "./sections/pricing/Pricing";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <>
      <div className="body__container">
        <Header>
          <Menu />
        </Header>
        <Visual />
        <Feature />
        <Location />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}

export default App;
