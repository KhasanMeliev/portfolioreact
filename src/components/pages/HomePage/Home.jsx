import "./styles.css";
import "../../Navbar/styles.css";
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
function Home() {
  return (
    <div className="HomeBox">
      <div className="text">
        <div className="upTxt">
          <p>Get To Know Me</p>
          <h1 className="name">Khasan Meliev</h1>
          <h1 className="developer">
            I am a
            <span style={{ marginLeft: "10px", color: "white" }}>
              <ReactTypingEffect
                text={["Web Developer.", "Web Designer!"]}
                speed={80}
                eraseSpeed={80}
                eraseDelay={600}
                typingDelay={300}
                cursor="|"
              />
            </span>
          </h1>
        </div>
        <div className="icons">
          <a
            href="https://www.instagram.com/coding_khasan/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCzxxp-R3-05kx_SbYXdrahQ"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="icon" />
          </a>
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
        </div>
        <div className="downTxt">
          <p>
            <span style={{ color: "#ff651c" }}>Hello, </span> My name is khasan.
            I am a <span style={{ color: "#ff651c" }}>Web Developer</span> and I
            am 14 years old.
          </p>
          <div className="btn">
            <a href="/portfolio">
              <button>Hire Me</button>
            </a>
            <a href="/about">
              <button>About Me</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;