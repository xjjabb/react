import React, { memo, useState } from "react";

const App = memo(() => {
  const [number, setNumber] = useState(0);
  const setNum = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      {number}
      <button onClick={setNum}>+1</button>
    </div>
  );
});

export default App;
