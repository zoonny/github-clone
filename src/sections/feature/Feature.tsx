import React from "react";
import styled from "styled-components";

const SectionFeature = styled.section`
  background: #f5f5f5;
  padding-top: 66px;
  .summary {
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
  }
  .video {
    max-width: 650px;
    // 위아래 50px, 좌우 auto
    margin: 50px auto;
    .video-ratio {
      height: 0;
      padding-top: 56.25%;
      position: relative;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  .tiles {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    .inner {
      max-width: 1200px;
    }
    // ul {
    //   display: grid;
    //   // 4개의 컬럼 생성, 비율은 1:1:1:1
    //   grid-template-columns: repeat(4, 1fr);
    // }
    // li {
    //   padding: 34px 24px;
    //   text-align: center;
    //   line-height: 1.5;
    //   border-right: 1px solid #e5e5e5;
    //   box-sizing: border-box;
    // }
    // 아래는 구형 브라우저 지원을 위해 float 사용
    ul {
    }
    li {
      padding: 34px 24px;
      text-align: center;
      line-height: 1.5;
      border-right: 1px solid #e5e5e5;
      box-sizing: border-box;
      float: left;
      width: 25%;
    }
    li:last-child {
      border-right: none;
    }
    img {
      max-width: 100%;
      padding: 14px 10% 24px;
      box-sizing: border-box;
    }
    h3 {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
      color: #767676;
    }
  }
`;

function Feature() {
  return (
    <SectionFeature className="section">
      <div className="summary">
        <h2 className="summary__title">Welcome home, developers</h2>
        <p className="summary__description">
          GitHub fosters a fast, flexible, and collaborative development process
          that lets you work on your own or with others.
        </p>
      </div>
      <div className="video">
        <div className="video-ratio">
          <iframe
            width="806"
            height="453"
            src="https://www.youtube.com/embed/afvT1c1ii0c"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="tiles">
        <div className="inner">
          <ul className="clearfix">
            <li>
              <img src="img/feature-tile__build.png" alt="build" />
              <h3>For everything you build</h3>
              <p>
                Host and manage your code on GitHub. You can keep your work
                private or share it with the world.
              </p>
            </li>
            <li>
              <img src="img/feature-tile__work.png" alt="build" />
              <h3>A better way to work</h3>
              <p>
                From hobbyists to professionals, GitHub helps developers
                simplify the way they build software.
              </p>
            </li>
            <li>
              <img src="img/feature-tile__projects.png" alt="build" />
              <h3>Millions of projects</h3>
              <p>
                GitHub is home to millions of open source projects. Try one out
                or get inspired to create your own.
              </p>
            </li>
            <li>
              <img src="img/feature-tile__platform.png" alt="build" />
              <h3>One platform, from start to finish</h3>
              <p>
                With hundreds of integrations, GitHub is flexible enough to be
                at the center of your development process.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </SectionFeature>
  );
}

export default Feature;
