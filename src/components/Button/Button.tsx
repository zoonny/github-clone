import React from "react"; // JSX Pragma 설정 시 생략 가능
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 2rem;
  background: #eee linear-gradient(to bottom, #fcfcfc, #eee);
  border: 1px solid #d5d5d5;
  border-radius: 0.25rem;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  display: inline-flex;
  align-items: center;
  padding: 0 0.75rem;
  margin-left: 0.5rem;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5; // 줄간격
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  // & 문자를 사용하여 자기 자신 선택 - Sass와 동일
  // ::before 가상요소 선택자
  &:hover::before {
    content: "";
    position: absolute; // 부모의 position 값이 있어야 한다. 부모에 relative 추가
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.07);
  }
  &.btn--primary {
    border: 1px solid #65b836;
    color: #fff;
    background: #55a532 linear-gradient(#91dd70, #55ae2e);
  }
`;

type ButtonProps = {
  /** 버튼의 내용 */
  children: React.ReactNode;
  className?: string;
  /** 클릭 시 호출할 함수 */
  onClick?:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
};

function Button({ children = "버튼", className, onClick }: ButtonProps) {
  return (
    <StyledDiv className={className} onClick={onClick}>
      {children}
    </StyledDiv>
  );
}

export default Button;
