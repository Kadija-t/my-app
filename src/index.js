import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./app/Routes";
import Header from "./app/components/Header";
import Banner from "./app/components/Banner";
import Footer from "./app/components/Footer";
import "./css/style.css";
import "./sass/main.scss";
import "./sass/component/_nav.scss";
import "./sass/component/_footer.scss";
import "./sass/component/_header.scss";
import "./css/banner.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Header />
      <Banner />
      <AppRoutes />
      <Footer />
    </Router>
  </>
);
