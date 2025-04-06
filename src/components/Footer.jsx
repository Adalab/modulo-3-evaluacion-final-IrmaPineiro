import logoRickMorty from "../images/logoRickMorty-original.png";
import "../scss/components/Footer.scss";
import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <img
          className="footer-logo"
          src={logoRickMorty}
          alt="Rick and Morty logo"
        />
      </footer>
    </div>
  );
}

export default Footer;
