import React, { useState } from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { GotoTopArrow } from "../Components/CommonHelper/helperComponents";
import "./style.scss";

const Layout = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / documentHeight) * 100;
    console.log("first", scrollPercentage);
    setScrollPercentage(scrollPercentage);
  });

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div className="gototop">
        <GotoTopArrow scrollPercent={scrollPercentage} />
      </div>
    </>
  );
};

export default Layout;
