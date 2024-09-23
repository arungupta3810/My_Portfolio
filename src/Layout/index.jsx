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
    setScrollPercentage(scrollPercentage);
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {scrollPercentage > 40 && <div className="gototop">
        <GotoTopArrow scrollPercent={scrollPercentage} onClick={handleClick}/>
      </div>}
    </>
  );
};

export default Layout;
