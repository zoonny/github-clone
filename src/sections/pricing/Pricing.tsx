import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";

const PricingSection = styled.section`
  background: linear-gradient(#f5f5f5, #fff);
  .inner {
    padding: 80px 0;
    .card {
      display: flex;
      border: 1px solid #e5e5e5;
      border-radius: 6px;
      box-sizing: border-box;
      .cell {
        padding: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .cell1 {
        .btn--primary {
          height: 50px;
          font-size: 16px;
        }
      }
      .cell2 {
        font-size: 22px;
        font-weight: 300;
        line-height: 1.5;
        flex: 1; // flex-grow: 1, flex-basis: 0
        border-left: 1px solid #e5e5e5;
      }
    }
  }

  @media (max-width: 1024px) {
    .inner {
      max-width: none;
      padding: 80px 20px;
      .card {
        .cell2 {
          font-size: 20px;
        }
      }
    }
  }
`;

function Pricing() {
  return (
    <PricingSection className="section">
      <div className="inner">
        <div className="card">
          <div className="cell cell1">
            <Button className="btn--primary">Sign up for GitHub</Button>
          </div>
          <div className="cell cell2">
            Public projects are always free. Work together across unlimited
            private repositories for $7 / month.
          </div>
        </div>
      </div>
    </PricingSection>
  );
}

export default Pricing;
