import React from "react";
import "./WhatWeDo.css";
const ProductCard = ({
  image,
  title,
  info,
  link,
  imageSide,
  infoImage,
  buttonValue,
}) => {
  return (
    <div className={`product-card ${imageSide}`}>
      {imageSide === "left" ? (
        <>
          <div className="product-card__image-container">
            {image && <img loading="lazy" src={image} />}
          </div>
          <div className="product-card__text-container">
            <div className="product-card__info_image">
              {image && <img loading="lazy" src={infoImage} alt={title} />}
            </div>
            <h3 className="product-card__title">{title}</h3>
            <p className="product-card__info">{info}</p>
            <a href={link} className="product-card__button">
              Learn More
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="product-card__text-container">
            <div className="product-card__info_image">
              {image && <img loading="lazy" src={infoImage} />}
            </div>
            <h3 className="product-card__title">{title}</h3>
            <p className="product-card__info">{info}</p>
            <a href={link} className="product-card__button">
              {buttonValue ? buttonValue : "Learn More"}
            </a>
          </div>
          <div className="product-card__image-container">
            {image && <img loading="lazy" src={image} alt={title} />}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
