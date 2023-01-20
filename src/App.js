import "./App.css";
import CardsContainer from "./components/CardSection/CardsContainer";
import { Common1, Common2 } from "./components/common/Common";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/Navbar/Navbar";
import WhatWEDo from "./components/common/WhatWEDo";
import Slider from "./components/Testominial/Testominial";
import FormContainer from "./components/formcontainer/FormContainer";
import Product_container from "./components/Product_container/Product_container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Common1 />
      <CardsContainer className="card_container__component" />
      <Common2 />
      <WhatWEDo
        image={
          "	https://academy.merito.in/wp-content/uploads/2021/08/Resume-Illu-1024x1024.png"
        }
        title="Build your CV to stand-out from the crowd"
        info={
          "Effective CV is the first step to ensure you get interview shortlist. 90% of CVs get rejected just because they are not customized for the job role you are applying"
        }
        link="www.google.com"
        imageSide="left"
        infoImage={
          "https://academy.merito.in/wp-content/uploads/2021/07/Customised-course-1.png"
        }
      />
      <WhatWEDo
        image={
          "https://academy.merito.in/wp-content/uploads/2021/08/Interview-Illu-1024x1024.png"
        }
        title="Develop your interview confidence"
        info={
          "Ensure your interview success by taking mock interview. Our experts will help you to overcome your interview fear to crack you real interview"
        }
        link="www.google.com"
        infoImage={
          "https://academy.merito.in/wp-content/uploads/2021/07/ICONS-03.png"
        }
        imageSide="right"
      />
      <WhatWEDo
        image={
          "	https://academy.merito.in/wp-content/uploads/2021/08/Mentoring-New-Illu-1024x1024.png"
        }
        title="Get in-depth assessments"
        info={
          "Our assessments consists of skill, personality as well as leadership assessments which helps you to know your fitment and readiness for the job."
        }
        link="www.google.com"
        imageSide="left"
        infoImage={
          "https://academy.merito.in/wp-content/uploads/2021/07/Experienced-mentors-2.png"
        }
      />
      <Slider />
      <FormContainer />
      <WhatWEDo
        image={
          "https://academy.merito.in/wp-content/uploads/2021/07/Screenshot-2021-07-04-at-6.13.33-PM.png"
        }
        title="STILL HAVE QUESTIONS?"
        imageSide="right"
        link="www.google.com"
        info={
          "Not sure which programs to choose or have queries on programs before enrolment?Contact us with your query and we will get back to you."
        }
        buttonValue="Contact Us"
      />
      <Product_container />
    </div>
  );
}

export default App;
