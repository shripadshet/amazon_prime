import React, { useState } from "react";
import "./ContentTile.css";

function ContentTile({ poster, title, description }) {
  const [isHovering, setIsHovering] = useState(false);
  console.log('desc', description);

  return (
    <li
      className="content-tile"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`card ${isHovering ? "hovered" : ""}`}>
        <img src={poster} alt={title} className="poster" />
        <div className="details">
          <h2>Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang</h2>
          <p>Bin Lagnachi Goshta</p>
          <a href="#" className="cta">Watch Now</a>

        </div>
      </div>
    </li>
  );
}

export default ContentTile;
