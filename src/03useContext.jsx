import React, { memo, useContext, useEffect } from 'react'
import { UserContext, ThemContex } from "./context/index";
const App = memo(() => {
    const user = useContext(UserContext)
    const them = useContext(ThemContex)
    useEffect(()=>{
        console.log(user);
        console.log(them);
    },[])
  return (
    <div>
        context
    </div>
  )
})

export default App