import { Carousel } from "../../components/primary";
import { ImgText } from "../../components/secondary";
import { descriptions as desc} from "../../helpers/descriptions"
import { useState } from "react";

const Home = () => {
  const [txtImgToShow, setTextImgToShow] = useState(desc)
  
  return (
    <div>
      <Carousel />
      {txtImgToShow.map((txtImg, index) => {
        return <ImgText key={index} text={txtImg[0]} image={txtImg[1]} />
      })}
    </div>
  );
};

export default Home;
