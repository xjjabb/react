import React, { forwardRef, memo, useRef, useImperativeHandle } from "react";

const HelloWorld = memo(
  forwardRef((props, ref) => {
    const inputRef = useRef();
    // 对父组件传入的ref进行处理
    useImperativeHandle(ref, () => {
      return {
        focus() {
          console.log("focus");
          inputRef.current.focus();
        },
      };
    });
    return <input type="text" ref={inputRef} />;
  })
);

const App = memo(() => {
  const title = useRef();
  const inputRef = useRef();
  const handDom = () => {
    console.log(title.current);
    console.log(inputRef.current);
    inputRef.current.focus();
  };
  return (
    <div>
      <h2 ref={title}>哈哈哈</h2>
      <HelloWorld ref={inputRef}></HelloWorld>
      <button onClick={handDom}>dom操作</button>
    </div>
  );
});

export default App;
