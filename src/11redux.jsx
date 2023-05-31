import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addNumber, subNumber } from "./store/modules/counter";
const App = memo(() => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => ({
    counter: state.counter.counter,
  }),shallowEqual());
  const addnumber = (number, flag) => () => {
    if (flag) {
      dispatch(addNumber(number));
    } else {
      dispatch(subNumber(number));
    }
  };
  return (
    <div>
      <span>{counter}</span>
      <button onClick={addnumber(1, true)}>+1</button>
      <button onClick={addnumber(1, false)}>-1</button>
      <button onClick={addnumber(8, true)}>+8</button>
    </div>
  );
});

export default App;
