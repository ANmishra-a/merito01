import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FiSearch } from "react-icons/fi";

import { BiMenu } from "react-icons/bi";
// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const handleHover = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <nav>
//       <div className="nav-container">
//         <img
//           src="https://academy.merito.in/wp-content/uploads/2022/10/output-onlinepngtools-e1672388981923.png"
//           alt="logo"
//           className="logo"
//         />
//         <div className="links-container ">
//           <div
//             className="our-services-container link"
//             onMouseEnter={handleHover}
//             onMouseLeave={handleHover}
//           >
//             <Link to="/" className="link">
//               OUR SERVICES
//             </Link>
//             {dropdownOpen && (
//               <div className="dropdown-container">
//                 <Link to="/cv-review" className="dropdown-link">
//                   CV Review
//                 </Link>
//                 <Link to="/mock-interview" className="dropdown-link">
//                   Mock Interview
//                 </Link>
//                 <Link to="/job-assessment" className="dropdown-link">
//                   Job Assessment
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link to="/about-us" className="link">
//             ABOUT US
//           </Link>
//           <Link to="/blog" className="link">
//             BLOG
//           </Link>
//           <Link to="/contact" className="link">
//             CONTACT
//           </Link>
//           <div className="search-icon">
//             <i className="FiSearch"></i>
//             <FiSearch />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useEffect } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHover = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavbarOpen = (e) => {
    e.preventDefault();
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <img
          src="https://academy.merito.in/wp-content/uploads/2022/10/output-onlinepngtools-e1672388981923.png"
          alt="logo"
          className="logo"
        />
        {screenWidth > 1135 ? (
          <div className="links-container ">
            <div
              className="our-services-container link"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <Link to="/" className="link">
                OUR SERVICES
              </Link>
              {dropdownOpen && (
                <div className="dropdown-container">
                  <Link to="/cv-review" className="dropdown-link">
                    CV Review
                  </Link>
                  <Link to="/mock-interview" className="dropdown-link">
                    Mock Interview
                  </Link>
                  <Link to="/job-assessment" className="dropdown-link">
                    Job Assessment
                  </Link>
                </div>
              )}
            </div>
            <Link to="/about-us" className="link">
              ABOUT US
            </Link>
            <Link to="/blog" className="link">
              BLOG
            </Link>
            <Link to="/contact" className="link">
              CONTACT
            </Link>
            <div className="search-icon">
              <FiSearch />
            </div>
          </div>
        ) : (
          <div className="menu-icon-container">
            <BiMenu onClick={handleNavbarOpen} />
            {navbarOpen && (
              <div className="mobile-links-container">
                <Link to="/" className="mobile-link">
                  OUR SERVICES
                </Link>
                <Link to="/about-us" className="mobile-link">
                  ABOUT US
                </Link>
                <Link to="/blog" className="mobile-link">
                  BLOG
                </Link>
                <Link to="/contact" className="mobile-link">
                  CONTACT
                </Link>
                <div className="mobile-search-icon">
                  <FiSearch />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
