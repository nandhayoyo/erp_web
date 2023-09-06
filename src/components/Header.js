import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../styles/Header.scss";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoginModalOpen, setLoginPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginPopupOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      setCurrentUser({ username: "admin" });
    }
  };

  const handleCloseLoginPopup = () => {
    setLoginPopupOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <h1 className="header-container">ERP Website</h1>
      <div
        className="menu-icon"
        onClick={toggleMobileMenu}
        data-testid="menu-icon"
      >
        <FontAwesomeIcon icon={faBars} style={{ color: "#ebecf0" }} />
      </div>
      <nav
        className={`header-container ${isMobileMenuOpen ? "active" : ""}`}
        data-testid="nav"
      >
        <ul>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/pricing" onClick={closeMobileMenu}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li>
            {isLoggedIn && currentUser && currentUser.username === "admin" ? (
              <a
                onClick={() => {
                  handleLogout();
                  closeMobileMenu();
                }}
              >
                Logout
              </a>
            ) : (
              <a
                href="#"
                onClick={() => {
                  handleLoginClick();
                  closeMobileMenu();
                }}
              >
                Login
              </a>
            )}
          </li>
        </ul>
      </nav>
      <Modal isOpen={isLoginModalOpen} onClose={handleCloseLoginPopup}>
        <LoginPopup onLogin={handleLogin} onClose={handleCloseLoginPopup} />
      </Modal>
    </header>
  );
};

export default Header;
