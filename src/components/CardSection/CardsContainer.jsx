import React from "react";
import Card from "./Card";
import "./cardContainer.css";

export function CardsContainer() {
  return (
    <div className="CardContainer">
      <div className="CardContainer__cards">
        <Card
          infoArray={[
            "CV review session with our experts",
            "Tips to make your CV effective",
            "Build a CV that stands-out",
          ]}
          title="CV Review"
          imgUrl={
            "	https://academy.merito.in/wp-content/uploads/2021/07/Customised-course-1.png"
          }
          imgName="CV review"
        />
        <Card
          infoArray={[
            "one on one personalized interview",
            "Get expert feedback on interview",
            "Develop interview confidence",
          ]}
          title="Mock Interview"
          imgUrl={
            "https://academy.merito.in/wp-content/uploads/2021/07/ICONS-03.png"
          }
          imgName="Mock Interview"
        />
        <Card
          infoArray={[
            "Get detailed personality report",
            "Know your strengths",
            "Improve on your weakness",
          ]}
          title="Job Assessments"
          imgUrl={
            "	https://academy.merito.in/wp-content/uploads/2021/07/Experienced-mentors-2.png"
          }
          imgName="Job Assessments"
        />
      </div>
    </div>
  );
}

export default CardsContainer;
