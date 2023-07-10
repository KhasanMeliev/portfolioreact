import React from "react";
import { cards } from "../../../mock/blog";
import "./styles.css";
function Blog() {
  return (
    <div className="BlogBox">
      <div className="upTxt">
        <p>Check Out My Latest Blog Posts</p>
        <h1>
          My <span style={{ color: "#ff651c" }}>Blog</span>
        </h1>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <div className="card">
            <div className="img">
              <img src={card.img} alt="" />
            </div>
            <div className="texts">
              <div className="txt">
                <p className="date">{card.date}</p>
                <h1>{card.title}</h1>
                <p>{card.text}</p>
              </div>
            </div>
            <a href={card.link} target="_blank" rel="noreferrer">
              <button>see</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;