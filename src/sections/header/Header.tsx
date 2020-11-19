import React from "react";
import "./Header.css";

type HeaderProps = {
  children: React.ReactNode;
};

function Header({ children }: HeaderProps) {
  return (
    <header className="section">
      <div className="inner">{children}</div>
    </header>
  );
}

export default Header;