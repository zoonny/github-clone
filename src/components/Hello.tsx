import React from "react";
// import PropTypes from "prop-types";

export type HelloProps = {
  /** 보여주고 싶은 이름 */
  name: string;
  /** 글자의 크기 */
  big?: boolean;
  /** Hello버튼 클릭시 호출되는 함수 */
  onHello: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  //   onBye: Function;
  /** Bye버튼 클릭시 호출되는 함수 */
  onBye: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

/**
 * 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 * - `onHello` 와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정 할 수 있습니다.
 */
function Hello({ name, big = false, onHello, onBye }: HelloProps) {
  return (
    <div>
      {big ? <h1>안녕하세요. {name}</h1> : <p>안녕하세요. {name}</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  );
}

// // stories doc addons에 보여질 props의 description - 여기는 jsx
// Hello.propTypes = {
//   /**
//    보여주고 싶은 이름
//    */
//   name: PropTypes.string.isRequired,
//   /** 글자의 크기 */
//   big: PropTypes.bool,
//   /** Hello버튼 클릭시 호출되는 함수 */
//   onHello: PropTypes.func,
//   /** Bye버튼 클릭시 호출되는 함수 */
//   onBye: PropTypes.func,
// };

// Hello.defaultProps = {
//   big: false,
// };

export default Hello;
