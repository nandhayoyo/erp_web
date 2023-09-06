import React from "react";
import "../styles/Contact.scss";
import contactImage from "../assets/images/contact.svg";

const Contact = () => {
  return (
    <div className="ContactForm" data-testid="contact-form">
      <h2>Get in touch with us!</h2>
      <div className="container-about">
        <div className="col-6">
          <img src={contactImage} alt="Contact" className="contact-image" />
        </div>
        <div className="col-6">
          <div className="col-12 text-center">
            <div className="contactForm">
              <form id="contact-form" noValidate>
                <div className="formRow">
                  <div className="col">
                    <input
                      type="text"
                      name="name"
                      className="form-control formInput"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col" style={{ marginTop: 10 }}>
                    <input
                      type="email"
                      name="email"
                      className="form-control formInput"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div className="formRow">
                  <div className="col">
                    <input
                      type="text"
                      name="subject"
                      className="form-control formInput"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="formRow">
                  <div className="col">
                    <textarea
                      rows={3}
                      name="message"
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
