import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";
import css from "../public/style.css";
import App from './components/App.js'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('app')
);
