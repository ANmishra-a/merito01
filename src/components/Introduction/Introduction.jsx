import React from "react";
import "./Introduction.css";
function Introduction() {
  return (
    <div className="container">
      <div className="container__left">
        <div className="container__left-info">
          <h2>Prepare to Get</h2>
          <span>Your Dream Job</span>
          <h3>
            Merito academy helps you to prepare for interviews and land a dream
            job.
          </h3>
          <div className="btn">
            <button>
              <a href="#">Know More About Us</a>
            </button>
          </div>
        </div>
      </div>
      <div className="container__right">
        <picture>
          <source
            srcset="https://academy.merito.in/wp-content/uploads/2021/07/Interview-Banner-1.gif"
            type="gif"
          />
          <img
            loading="lazy"
            src="	https://academy.merito.in/wp-content/uploads/2021/07/Interview-Banner-1.gif"
            alt="..."
          />
        </picture>
      </div>
    </div>
  );
}

export default Introduction;
