import React, { memo, useEffect, useLayoutEffect } from "react";
// useEffect 不会阻塞dom更新
// useLayoutEffect 阻塞dom更新 可以解决useEffect的闪烁问题
const App = memo(() => {
  useEffect(() => {
    console.log(1);
  });
  useLayoutEffect(() => {
    console.log(2);
  });
  return <div>App</div>;
});

export default App;
