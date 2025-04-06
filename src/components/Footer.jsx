import logoRickMorty from "../images/logoRickMorty.png";

import React from "react";

function Footer() {
  return (
    <div>
      <footer className="header">
        <img
          className="header-logo"
          src={logoRickMorty}
          alt="Rick and Morty logo"
        />
      </footer>
    </div>
  );
}

export default Footer;
