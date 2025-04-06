import logoRickMorty from "../images/logoRickMorty.png";

import React from "react";

function Header() {
  return (
    <div>
      <header className="header">
        <img
          className="header-logo"
          src={logoRickMorty}
          alt="Rick and Morty logo"
        />
      </header>
    </div>
  );
}

export default Header;
