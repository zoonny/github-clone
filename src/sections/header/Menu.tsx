import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Logo from "./Logo";

const MenuGroup = React.memo(styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  .main-menu {
    display: flex;
  }
  .main-menu li a {
    // inline 요소는 padding값을 가질 수 없어 block 지정
    display: block;
    // margin-right: 10px;
    padding: 10px;
    // background: tomato;
    color: #3c4146;
  }
  .main-menu li a:hover {
    color: #4078c0;
  }
  @media (max-width: 1024px) {
    float: none;
    display: block;
    & .toggle {
      display: none;
    }
    & .toggle.on {
      display: block;
    }
    .main-menu {
      margin-bottom: 10px;
      li {
        border-top: 1px solid #e5e5e5;
        a {
          padding: 16px 0;
        }
      }
    }
  }
`);

const SignGroup = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  .btn-group {
    order: 2;
    display: flex;
    // not working
    // &:nth-child(2) {
    .btn--primary {
      margin-left: 4px;
    }
  }
  #search-form {
    order: 1;
    margin-right: 10px;
  }
  .sub-menu {
    // order: 0;
    display: flex;
    align-items: center;
    margin-right: 10px;
    li a {
      padding: 8px;
      display: block;
      font-size: 13px;
      color: #3c4146;
      &:hover {
        color: #4078c0;
      }
    }
  }
  #search-form > [type="submit"] {
    display: none;
  }
  // & .sub-menu li a {
  //   padding: 8px;
  //   display: block;
  //   font-size: 13px;
  //   color: #3c4146;
  // }
  // not working
  // #search {
  //   width: 160px;
  //   font-size: 14px;
  // }
  // #search + [type="submit"] {
  //   display: none;
  // }
  @media (max-width: 1024px) {
    float: none;
    &.toggle {
      display: none;
    }
    &.toggle.on {
      display: block;
    }
    padding: 10px 0 20px;
    .btn-group {
      display: block;
    }
    .sign-in {
      margin-left: 0;
      margin-bottom: 12px;
    }
    #search-form {
      margin-top: 12px;
      margin-right: 0;
    }
    .sub-menu {
      margin-top: 12px;
      margin-right: 0;
      justify-content: center;
    }
  }
`;

const ToggleBtnBlock = styled.div`
  background: url("../img/toggle-btn.svg");
  width: 18px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 20px;
  cursor: pointer;
  text-indent: -9999px;
  @media (min-width: 1024px) {
    display: none;
  }
`;

function Menu() {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  const windowResize = () => {
    console.log(window.innerHeight, window.innerWidth);
    if (window.innerWidth > 1024) {
      // off toggle element
      setToggle(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);
  return (
    <>
      <MenuGroup className="float--left">
        <Logo />
        <ul className={`main-menu toggle ${toggle ? "on" : ""}`}>
          <li>
            <a href="#">Personal</a>
          </li>
          <li>
            <a href="#">Open source</a>
          </li>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
        </ul>
      </MenuGroup>
      <SignGroup className={`float--right toggle ${toggle ? "on" : ""}`}>
        <div className="btn-group">
          <Button className="sign-in">Sign in</Button>
          <Button className="btn--primary">Sign up</Button>
        </div>
        <form id="search-form" method="POST" action="">
          <Input
            // not working
            // id="search"
            placeholder="Search GitHub"
            // style={{ width: "160px", fontSize: "14px" }}
          />
          <input type="submit" value="Submit" />
        </form>
        <ul className="sub-menu">
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </SignGroup>
      <ToggleBtnBlock onClick={onToggle}>
        Header Menu Toggle Button
      </ToggleBtnBlock>
    </>
  );
}

export default React.memo(Menu);
