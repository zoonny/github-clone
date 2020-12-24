import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Header from "./sections/header/Header";
import Menu from "./sections/header/Menu";

function App() {
  return (
    <>
      <div className="body__container">
        <Header>
          <Menu />
        </Header>
        {/* <Button>Hello world good job</Button>
        <Button className="btn--primary">Primary</Button>
        <Button>Hello</Button>
        <Button>World</Button>
        <Input /> */}
      </div>
    </>
  );
}

export default App;
