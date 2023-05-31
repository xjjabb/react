import React, { memo, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "add_number":
      return { ...state, counter: state.counter + action.num };
    case "sub_number":
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}
const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div>
      {state.counter}
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "add_number", num: 3 });
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          dispatch({ type: "sub_number", num: 4 });
        }}
      >
        -4
      </button>
    </div>
  );
});

export default App;
