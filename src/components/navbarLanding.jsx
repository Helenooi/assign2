import "../css/menu.css";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const NavbarLanding = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <a href="/app">
                <img src='homepage/logo.png' class='logo-size'></img>
              </a>
            </div>

            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <a href="/app#homepage" className="navbar-button">
                  About
                </a>
              </li>
              <li>
                <a href="/app#contact" className="navbar-button">Penang Attractions</a>
              </li>
              <li>
                <a href="/app#aboutus" className="navbar-button">Food & Cuisine</a>
              </li>
              <li>
                <a href="/app#aboutus" className="navbar-button">Events & Festivals</a>
              </li>
              <li>
                <a href="/app#cultureHeritage" className="navbar-button">Culture & Heritage</a>
              </li>
            </ul>

            <div class="penang-tag">
                <p># penangonebetter</p>
            </div>
            <div className="icon" onClick={toggleMenu}>
              <IoMenu />
            </div>
          </nav>
        </div>
      </header>

      <div className="header2"></div>
    </>
  );
};

export default NavbarLanding;
