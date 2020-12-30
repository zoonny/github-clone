import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  // height: 2rem;
  height: ${(props) => props.height || "2rem"};
  // background: ${(props) => props.height || "black"};
  padding: 0 0.6rem;
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
  @media (max-width: 1024px) {
    width: 100%;
    height: 42px;
    text-align: center;
  }
`;

type InputProps = {
  type?: string;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  height?: string;
  [x: string]: any;
};

function Input({ type, placeholder, className, style, height, x }: InputProps) {
  // { type, placeholder, style, x }: InputProps,
  // ...rest: any
  // console.log(height, x, rest);
  // console.log(className);
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      className={className}
      style={style}
      height={height}
      // not working
      {...x}
      // not working
      // {...rest}
    />
  );
  // return <StyledInput placeholder={placeholder} style={{ fontSize: "14px" }} />;
}

export default React.memo(Input);
