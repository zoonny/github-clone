import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const Section = styled.section`
  background-image: url("../img/bg.jpg");
  background-repeat: no-repeat;
  background-position: bottom left;
  // 확대/축소시에도 배경 이미지가 전체를 뒤덮음
  background-size: cover;
  .inner {
    // max-width: 980px;
    // margin: 0 auto;
    padding: 160px 0;
    display: flex;
  }
  .summary {
    // flex-grow: 0, flex-basis: 1, flex-shrink: auto
    flex-grow: 1;
    flex-basis: 0;
    // not working
    // flex: 1 0 auto
    // flex: 1
    margin-right: 90px;
  }
  .summary__title {
    color: #fff;
    font-size: 54px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 1px 25px rgba(0, 0, 0, 0.75);
  }
  .summary__description {
    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 1px 25px rgba(0, 0, 0, 0.75);
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    // width: 100%;
    // height: 100%;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  #sign-form {
    width: 340px;
    margin-top: 16px;
    li {
      margin-bottom: 17px;
    }
    // li:first-child {
    li:last-child {
      margin-bottom: 0px;
    }
    .input--text {
      width: 100%;
      height: 40px;
    }
    .caption {
      font-size: 12px;
      margin-top: 5px;
      color: rgba(255, 255, 255, 0.6);
      line-height: 1.5;
      text-align: center;
    }
    // [type="submit"] {
    .btn--primary {
      width: 100%;
      height: 62px;
      padding: 0 25px;
      font-size: 20px;
      //   text-align: center;
      justify-content: center; // inline-flex
    }
  }
`;

function Visual() {
  return (
    <Section className="section">
      <div className="inner">
        <div className="summary">
          <h2 className="summary__title">
            How&nbsp;people build&nbsp;software{" "}
          </h2>
          <p className="summary__description">
            Millions of developers use GitHub to build personal projects,
            support their businesses, and&nbsp;work together on open source
            technologies.
          </p>
        </div>
        <form id="sign-form" action="" method="post">
          <ul>
            <li>
              <Input
                type="text"
                className="input--text"
                placeholder="Pick a username"
              />
            </li>
            <li>
              <Input
                type="email"
                className="input--text"
                placeholder="Your email address"
              />
            </li>
            <li>
              <Input
                type="password"
                className="input--text"
                placeholder="Create a password"
              />
              <p className="caption">
                Use at least one letter, one numeral, and seven characters.
              </p>
            </li>
            <li>
              <Button type="submit" className="btn--primary">
                Sign up for GitHub
              </Button>
              <p className="caption">
                By clicking "Sign up for GitHub", you agree to our terms of
                service and privacy policy. We'll occasionally send you account
                related emails.
              </p>
            </li>
          </ul>
        </form>
      </div>
    </Section>
  );
}

export default Visual;
