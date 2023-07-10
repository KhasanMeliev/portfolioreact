import React from "react";
import "./styles.css";
import { cards } from "../../../mock/cards";
function Portfolio() {
  return (
    <div className="PortfolioBox">
      <div className="upTxt">
        <p>Showcasing Some Of My Best Work</p>
        <h1>
          My <span style={{ color: "#ff651c" }}>Portfolio</span>
        </h1>
      </div>
      <div className="boxes">
        <div className="categories">
          <button>All</button>
          <button>Web Development</button>
          <button>Web Design</button>
          <button>UI-UX Design</button>
        </div>
        <div className="cards">
          {cards.map((card) => (
            <div className="card">
              <img src={card.imgUrl} alt="img" />
              <div className="image_overlay">
                <h1>{card.txt}</h1>
                <a href={card.link} target="_blank" rel="noreferrer">
                  <button>Project</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;