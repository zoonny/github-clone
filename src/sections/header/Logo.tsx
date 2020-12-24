import React from "react";
import "./Logo.css";

const styleDiv = {
  marginRight: "10px",
};

const styleA = {
  background: "url('../img/logo.svg')",
  width: "32px",
  height: "32px",
  display: "block",
  textIndent: "-9999px",
};

function Logo() {
  return (
    <div style={styleDiv} className="logo">
      <a style={styleA} href="#">
        GitHub
      </a>
    </div>
  );
}

export default Logo;
