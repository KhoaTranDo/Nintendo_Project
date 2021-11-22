import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/page/homepage";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </App>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
