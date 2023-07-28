import TextandImg from "../TextAndImg/TextandImg";
import "./ParentContainer.css";
import { useState } from "react";
import image from "../../Assets/images/istockphoto-1171193292-612x612-removebg-preview.png";
import image2 from "../../Assets/images/faturacao-eletronica-removebg-preview.png";
import image3 from "../../Assets/images/homologado-dnre.svg";

const ParentContainer = () => {
  const [title] = useState("Your Title Here");
  const [paragraph] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam pariatur fuga nisi et optio eius assumenda blanditiis, distinctio mollitia nihil necessitatibus quo alias!"
  );
  const [reverse] = useState(true);

  return (
    <>
      <div className="rm_ParentContainer">
        <div className="rm_ParentContainer_text">
          <h1 className="rm_ParentContainer_text_h1">Your Title Here</h1>
          <p className="rm_ParentContainer_text_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel
            voluptatum praesentium, aperiam corrupti ipsum quod nobis!
          </p>
        </div>

        <TextandImg
          title={title}
          paragraph={paragraph}
          image={image}
        />
        <TextandImg
          title={title}
          paragraph={paragraph}
          reverse={reverse}
          image={image2}
        />
        <TextandImg
          title={title}
          paragraph={paragraph}
          image={image3}
        />
      </div>
    </>
  );
};

export default ParentContainer;
