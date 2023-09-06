import React, { useState } from "react";
import "../styles/LoginPopup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlus,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const LoginPopup = ({ onLogin, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
    onClose();
  };

  return (
    <div className="login-popup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="button-default"
          type="submit"
          style={{ marginTop: 30 }}
        >
          Login
        </button>
        <div className="login-options">
          <hr></hr>
          <p>Or Login Via</p>
          <div className="social-logos">
            <a href="https://www.google.com">
              <FontAwesomeIcon
                icon={faGooglePlus}
                style={{ marginRight: 20 }}
              />
            </a>
            <a href="https://www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} style={{ marginRight: 20 }} />
            </a>
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
