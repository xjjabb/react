import React from "react";
import ReactDOM from "react-dom/client";
import App from "./11redux";
import { UserContext, ThemContex } from "./context/index";
import { Provider } from "react-redux";
import store from './store/index'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <UserContext.Provider value={{ name: "张三", level: 99 }}>
    <ThemContex.Provider value={{ color: "red" }}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemContex.Provider>
  </UserContext.Provider>

  // </React.StrictMode>
);
