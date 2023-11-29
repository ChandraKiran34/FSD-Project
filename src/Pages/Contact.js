import React from "react";
import { useState } from "react";
import "../CSS/Contact.css";
import Chat from "../Assets/chat.png";
import { FaPhone } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="contact-container">
        <div className="contact-info">
          <img src={Chat} className="contact-image" />
          <div className="contact-form">
            <div>
              <h4>Name</h4>
              <input
                type="text"
                name="contact-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <h4>Email</h4>
              <input
                type="text"
                name="contact-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <h4>Message</h4>
              <textarea
                type="text"
                name="contact-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                rows="5"
              ></textarea>
            </div>
            <button>Send Message</button>
          </div>
        </div>
      </div>
      <div className="contact-cardContainer">
        <div className="card-contact">
          <FaPhone />
          <h4>Email</h4>
          <p>info@pybbags.com</p>
        </div>
        <div className="card-contact">
          <div style={{ borderRadius: "50%", backgroundColor: "blue" }}>
            <FaRegAddressCard size="3rem" style={{ backgroundColor: "#fff" }} />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h4>Mobile</h4>
            <p>+91 9494339653</p>
          </div>
        </div>
        <div className="card-contact">
          <IoMailOpenOutline />
          <h4>Address</h4>
          <p>IIIT Sricity Room no 316 Andhra Pradesh</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
