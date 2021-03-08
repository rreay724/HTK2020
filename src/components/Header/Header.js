import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <ul className={click ? "nav-options active" : "nav-options"}>
        <li className="option" onClick={closeMobileMenu}>
          <a href="/">HOME</a>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <a href="/info">INFO</a>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <a href="/map">MAP</a>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <a href="/gear">GEAR</a>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <a href="/training">TRAINING</a>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <a href="/signup">SIGN UP</a>
        </li>
      </ul>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
