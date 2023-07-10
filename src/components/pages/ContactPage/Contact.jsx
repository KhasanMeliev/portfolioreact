import React, { useState } from "react";
import "./styles.css";
import {
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import Iframe from "react-iframe";
import { infos } from "../../../mock/contactInfos";
function Contact() {
  const values = { name: "", email: "", subject: "", message: "" };
  const [details, setDetails] = useState(values);

  const submitHandler = (e) => {
    e.preventDefault();
    if (details.name === "") {
      alert("Name isn't blank");
      return false;
    } else if (details.email === "") {
      alert("Email isn't blank");
      return false;
    } else if (details.subject === "") {
      alert("Subject isn't blank");
      return false;
    } else if (details.message === "" && details.message < 5) {
      alert("Message isn't blank or less than 5");
      return false;
    } else {
      alert("Your message succesfully sent!");
      return true;
    }
  };
  return (
    <div className="ContactPage">
      <div className="upTxt">
        <p>Feel Free To Contact Me Anytimes</p>
        <h1>
          My <span style={{ color: "#ff651c" }}>Contact</span>
        </h1>
      </div>
      <div className="down">
        <form
          onSubmit={submitHandler}
          action="https://formsubmit.co/khasanmeliev2@gmail.com"
          method="POST"
        >
          <div className="inputs">
            <h1>Contact me</h1>
            <div className="inputs_row">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setDetails({ ...details, name: e.target.value });
                }}
                value={details.name}
                name="name"
                autoComplete="off"
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setDetails({ ...details, email: e.target.value });
                }}
                value={details.email}
                name="email"
                autoComplete="off"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              onChange={(e) => {
                setDetails({ ...details, subject: e.target.value });
              }}
              value={details.subject}
              name="subject"
              autoComplete="off"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              onChange={(e) => {
                setDetails({ ...details, message: e.target.value });
              }}
              value={details.message}
            ></textarea>
          </div>
          <button>Send Message</button>
        </form>
        <div className="contact_info">
          <div className="up">
            <h1>Contact Info</h1>
            <p>
              Always available for freelance work if the right project comes
              along, Feel free to contact me!
            </p>
          </div>
          <div className="infos">
            {infos.map((info) => (
              <div className="info">
                {info.icon}
                <div className="txt">
                  <h1>{info.key}</h1>
                  <p>{info.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="icons">
            <a
              href="https://www.youtube.com/channel/UCzxxp-R3-05kx_SbYXdrahQ"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="icon" />
            </a>
            {/* <a href="" target="_blank" rel="noreferrer">
              <FaFacebook className="icon" />
            </a> */}
            <a
              href="https://www.linkedin.com/in/khasan-meliev/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/KhasanMeliev"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.instagram.com/coding_khasan/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </div>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196633.15340651077!2d66.82780030113376!3d39.64086861628387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d191960077df7%3A0x487636d9d13f2f57!2sSamarkand%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1652459195121!5m2!1sen!2s"
        className="iframe"
      />
    </div>
  );
}

export default Contact;