import React, { memo, useEffect } from "react";
// 函数名称必须用use开头
function useLogLife() {
  useEffect(()=>{
    console.log(1);
    return ()=> {
      console.log(2);
    }
  })
}
const About = memo(()=>{
  useLogLife()
  return <div>About</div>
})
const Home = memo(()=>{
  useLogLife()
  return <div>Home</div>
})
const App = memo(() => {
  useLogLife()
  return <div>
    <About></About>
    <Home></Home>
  </div>;
});

export default App;
