import React from "react";
import styled from "styled-components";
import Logo from "../../assets/img/logo.svg";

const FooterSection = styled.footer`
  .inner {
    padding: 50px 0;
    border-top: 1px solid #eee;
    .site-links {
      display: flex;
      li {
        font-size: 12px;
        margin-right: 10px;
        color: #767676;
        a {
          color: #4078c0;
          text-decoration: none;
          // 둘 다 가능
          //   &:hover {
          :hover {
            text-decoration: underline;
          }
        }
      }
    }
    // 정가운에 배치
    .logo {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 24px;
      height: 24px;
    }
    .logo:hover svg {
      fill: #4078c0;
    }
  }

  @media (max-width: 1024px) {
    .inner {
      padding: 50px 20px;
    }
    .logo {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .site-links {
      float: none;
      // justify-content: center;
      display: block !important;
      // &.float--right {
      //   display: block;
      // }
      text-align: center;
      li {
        display: inline;
      }
      &:first-child {
        margin-bottom: 20px;
      }
    }
  }
`;

function Footer() {
  return (
    <FooterSection className="section">
      <div className="inner clearfix">
        <ul className="site-links float--right">
          <li>
            <a href="#">Contact GitHub</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Training</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <ul className="site-links float--left">
          <li>2016 GitHub, Inc.</li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Security</a>
          </li>
          <li>
            <a href="#">Status</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>

        <a href="#" className="logo">
          <img src={Logo} alt="logo" />
        </a>
      </div>
    </FooterSection>
  );
}

export default Footer;
