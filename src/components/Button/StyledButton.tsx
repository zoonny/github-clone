import React from "react"; // JSX Pragma 설정 시 생략 가능
import styled from "styled-components";

const CustomButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

type ButtonProps = {
  /** 버튼의 내용 */
  children: React.ReactNode;
  /** 클릭 시 호출할 함수 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ children = "버튼", onClick }: ButtonProps) {
  return <CustomButton onClick={onClick}>{children}</CustomButton>;
}

export default Button;
