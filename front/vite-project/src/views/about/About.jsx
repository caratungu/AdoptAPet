import { descriptions as desc } from "../../helpers/DB/descriptions";
import { ImgText } from "../../components/secondary";
import { useState } from "react";

const About = () => {
  const [txtImgToShow, setTextImgToShow] = useState(desc);

  return (
    <div>
      {txtImgToShow.map((txtImg, index) => {
        return <ImgText key={index} text={txtImg[0]} image={txtImg[1]} />;
      })}
    </div>
  );
};

export default About;
