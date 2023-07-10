import React from "react";
import "./styles.css";
import {
  FaHome,
  FaPalette,
  FaObjectUngroup,
  FaObjectGroup,
  FaCode,
  FaArrowsAlt,
} from "react-icons/fa";
import hasan from './hasan.jpg'
function About() {
  return (
    <div className="AboutBox">
      <div className="upTxt">
        <p>My Intro</p>
        <h1>
          About <span style={{ color: "#ff651c" }}>Me</span>
        </h1>
      </div>
      <div className="aboutText">
        <div className="pic">
          <img
            src={hasan}
            alt=""
          />
        </div>
        <div className="txt">
          <div className="texts">
            <p>
              Who Am <span style={{ color: "#ff651c" }}>I?</span>
            </p>
            <h1>
              I'm Khasan Meliev, A Visual{" "}
              <span style={{ color: "#ff651c" }}>UX/UI Designer</span> And{" "}
              <span style={{ color: "#ff651c" }}>Web Developer</span>
            </h1>
            <h3>
              Hello, My name is Khasan(Hasan).
              <br />I am 14 years old. I am a pupil at specialized school called Urgut. I am 9th grade. My skills are
              HTML, CSS, JavaScript, React JS, Node Js, Express JS, Bootstrap,
              C++, Python and others.
            </h3>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="txt">
          <p>My Level Of Knowledge In Some Tools</p>
          <h1>
            My <span style={{ color: "#ff651c" }}>Skills</span>
          </h1>
        </div>
        <div className="skillBox">
          <div className="card">
            <label>
              HTML - <span style={{ color: "#ff651c" }}>90%</span>
            </label>
            <progress id="file" value="90" max="100">
              90%
            </progress>
          </div>
          <div className="card">
            <label>
              CSS - <span style={{ color: "#ff651c" }}>80%</span>
            </label>
            <progress id="file" value="80" max="100">
              80%
            </progress>
          </div>
          <div className="card">
            <label>
              JavaScript - <span style={{ color: "#ff651c" }}>60%</span>
            </label>
            <progress id="file" value="50" max="100">
              60%
            </progress>
          </div>
          <div className="card">
            <label>
              C++ - <span style={{ color: "#ff651c" }}>25%</span>
            </label>
            <progress id="file" value="20" max="100">
              25%
            </progress>
          </div>
          <div className="card">
            <label>
              Bootstrap - <span style={{ color: "#ff651c" }}>85%</span>
            </label>
            <progress id="file" value="85" max="100">
              85%
            </progress>
          </div>
          <div className="card">
            <label>
              React JS - <span style={{ color: "#ff651c" }}>40%</span>
            </label>
            <progress id="file" value="40" max="100">
              40%
            </progress>
          </div>
          <div className="card">
            <label>
              Python - <span style={{ color: "#ff651c" }}>30%</span>
            </label>
            <progress id="file" value="30" max="100">
              30
            </progress>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="txt">
          <p>Services I Offer To My Clients</p>
          <h1>
            My <span style={{ color: "#ff651c" }}>Services</span>
          </h1>
        </div>
        <div className="boxes">
          <div className="card">
            <FaHome className="icon" />
            <h1>Web Design</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="card">
            <FaPalette className="icon" />
            <h1>Design</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="card">
            <FaObjectGroup className="icon" />
            <h1>UI/UX Design</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="card">
            <FaCode className="icon" />
            <h1>Web Devolopment</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="card">
            <FaArrowsAlt className="icon" />
            <h1>Fully Responsive</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>{" "}
          <div className="card">
            <FaObjectUngroup className="icon" />
            <h1>Product Design</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <div className="facts">
        <div className="txt">
          <p>These Are My Strongest Sides</p>
          <h1>
            Fun <span style={{ color: "#ff651c" }}>Facts</span>
          </h1>
        </div>
        <div className="boxes">
          <div className="card">
            <h1>1.5+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="card">
            <h1>20+</h1>
            <p>Happy Clients</p>
          </div>
          <div className="card">
            <h1>85+</h1>
            <p>Completed Projects</p>
          </div>
          <div className="card">
            <h1>1+</h1>
            <p>Awards Win</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;