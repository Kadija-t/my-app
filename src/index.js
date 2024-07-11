import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./app/Routes";


import "./css/style.css";
import "./sass/main.scss";
import "./sass/component/_nav.scss";
import "./sass/component/_footer.scss";
import "./sass/component/_header.scss";
import './sass/component/_card.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <AppRoutes />
    </Router>
  </>
);
