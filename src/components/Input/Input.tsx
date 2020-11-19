import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 2rem;
  padding: 0 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075); // inset 박스 안쪽으로 그림자
  font-size: 1rem;
  &:focus {
    border-color: #51a7e8;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075),
      0 0 5px rgba(81, 167, 232, 0.5); // 안쪽 그림자와 바깥족와 그림자 동시에 적용
  }
  //   Vendor Prefix (브라우저 업체별 접두사)
  &::-webkit-input-placeholder {
    color: #cacaca;
  }
  &::-ms-input-placeholder {
    color: #cacaca;
  }
  &::-moz-input-placeholder {
    color: #cacaca;
  }
`;

function Input() {
  return <StyledInput placeholder={"Search GitHub"} />;
}

export default Input;
