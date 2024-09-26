import React from "react";
import "./style.scss";
import { contactMedia } from "../CommonHelper";

const Footer = () => {
  return (
    <div className="footer">
      <p>Keep In Touch</p>
      <span>Feel free to connect with me</span>
      <div className="footer__container">
        <div className="social">
          {contactMedia?.filter(e=>!e?.highlight)?.map((media) => 
            <a target="_blank" href={media?.url} key={media?.id}>{media?.icon}</a>
          )}
        </div>
        <span>
          Designed and Developed by Arun Kumar Gupta, Built with React.js & Antd
        </span>
        <span>© Copyright 2024 | Arun Kumar Gupta</span>
      </div>
    </div>
  );
};

export default Footer;
