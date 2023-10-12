import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/back.jpg";
import img2 from "../../assets/back1.png";
import img3 from "../../assets/back2.jpg";
import img4 from "../../assets/back3.jpg";
import img5 from "../../assets/back4.jpg";
import img6 from "../../assets/back5.jpg";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img6} />
      </div>
    </Carousel>
  );
};

export default Banner;
