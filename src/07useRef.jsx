import React, { memo, useRef } from 'react'
// 解决闭包陷阱
const App = memo(() => {
    const inp = useRef()
    const getDom = () =>{
        console.log(inp.current);
    }
  return (
    <div>
        <input type="text" ref={inp}/>
        <button onClick={getDom}>获取dom</button>
    </div>
  )
})

export default App