import React from "react";

const Button = (props) => {
  const {
    link,
    backgroundColor = "White",
    color = "black",
    hoverColor = "#ec545c",
    width = "auto",
    height = "auto",
  } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        href={link}
        className="responsive-button"
        style={{ backgroundColor, color, width, height }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = hoverColor)
        }
        onMouseLeave={(e) => (e.currentTarget.style.color = color)}
      >
        {props.children}
      </a>
    </div>
  );
};

export default Button;
