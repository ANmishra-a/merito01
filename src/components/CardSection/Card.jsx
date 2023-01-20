import React from "react";
import { BsFillDiamondFill } from "react-icons/bs";
function Card({ infoArray, title, imgUrl, imgName }) {
  return (
    <div className="Card__main-container">
      <div className="Card__main-image">
        <img loading="lazy" src={imgUrl} alt={imgName} />
      </div>
      <div className="card__main-title">{title}</div>
      <div className="Card__main-info">
        {infoArray.map((item) => {
          return (
            <p className="Card__main__info-item">
              {<BsFillDiamondFill />}
              {"  "}
              {item}
            </p>
          );
        })}
      </div>
      <div className="card__main-btn">
        <button className="view-course-btn">Know More</button>
      </div>
    </div>
  );
}

export default Card;
