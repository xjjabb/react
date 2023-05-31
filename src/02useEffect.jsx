import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [number, setNumber] = useState(100);
  useEffect(() => {
    console.log(1111111111);
    document.title = number;
    return ()=> {
        console.log(22222);
    }
  });
  const setNum = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      {number}
      <button onClick={setNum}>+</button>
    </div>
  );
});

export default App;
