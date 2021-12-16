import React from "react";
import Footer from "./container/Footer";
import Header from "./container/Header";
import Home from "./view/Home";

export default function Layout() {
  return (
    <div>
      <Header />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  );
}
