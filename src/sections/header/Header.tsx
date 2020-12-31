import React from "react";
import "./Header.css";
import "./Header_medium.css";
import "./Header_small.css";
// index.html에 아래와 같이 medium에 대한 css 분리 하여 정의 가능
// <link rel="stylesheet" media="all and (max-width: 1024px)" href="css/main_medium.css">

type HeaderProps = {
  children: React.ReactNode;
};

function Header({ children }: HeaderProps) {
  return (
    <header className="section">
      <div className="inner clearfix">{children}</div>
    </header>
  );
}

export default React.memo(Header);
