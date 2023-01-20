import React from "react";
import Button from "../common/Button";
import Product_card from "../common/Product_card";
import "./product_container.css";
function Product_container() {
  return (
    <div className="product_container_main">
      <p className="join ">JOIN OUR COURSES</p>
      <span className="join_span">
        Join our hands-on courses to upgrade your skills
      </span>
      <div className="product_container_main_cards">
        <Product_card
          imageUrl="https://academy.merito.in/wp-content/uploads/2015/12/summer-bootcamp-banner-1.jpeg"
          CertificateName="Certificate Course in B2B Sales"
        />
        <Product_card
          imageUrl="https://academy.merito.in/wp-content/uploads/2021/07/hr-course-banner-1.jpeg"
          CertificateName="Certificate Course in Talent Acquisition"
        />
        <Product_card
          imageUrl="https://academy.merito.in/wp-content/uploads/2021/07/consulting-course-banner-1-1.jpeg"
          CertificateName="Careers in HR/TA/OD-Bootcamp"
        />
      </div>
      <button className="view-course-btn">View all courses</button>
    </div>
  );
}

export default Product_container;
