import React from "react";
import "./Common";
function Product_card({ imageUrl, CertificateName, linkingUtl }) {
  return (
    <div className="product_card">
      <div className="product_tumb">
        <img loading="lazy" src={imageUrl} alt="" />
      </div>
      <div className="product_details">
        <span className="product_catagory">Team merito</span>

        <p>{CertificateName}</p>
        <div className="product_bottom_details">
          <div className="btn_container">
            <button className="btn_more" onClick={linkingUtl}>
              START COURSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_card;
