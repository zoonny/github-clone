import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Header from "./sections/header/Header";

function App() {
  return (
    <>
      <div className="body__container">
        <Header>header</Header>
        <Button>Hello world good job</Button>
        <Button className="btn--primary">Primary</Button>
        <Button>Hello</Button>
        <Button>World</Button>
        <Input />
      </div>
    </>
  );
}

export default App;
