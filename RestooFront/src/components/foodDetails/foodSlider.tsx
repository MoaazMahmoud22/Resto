import { useState } from "react";
import sFood1 from "../../assets/images/thumb/slick-2.png";
import sFood2 from "../../assets/images/thumb/slick-3.png";
import sFood3 from "../../assets/images/thumb/slick-4.png";
import sFood4 from "../../assets/images/thumb/slick-5.png";
import Slider from "../slider";

function FoodSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | {
    [index: string]: string;
  }>(null);
  return (
    <div className="food-details-slick">
      <Slider
        loop={true}
        spaceBetween={10}
        effect={"fade"}
        className="slider-for"
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        autoplay={{
          delay: 2500,
          speed: 2000,
          disableOnInteraction: false,
        }}
      >
        <div className="slider-for-img">
          <img src={sFood1} alt="img" />
        </div>

        <div className="slider-for-img">
          <img src={sFood3} alt="img" />
        </div>
        <div className="slider-for-img">
          <img src={sFood2} alt="img" />
        </div>
        <div className="slider-for-img">
          <img src={sFood4} alt="img" />
        </div>
        <div className="slider-for-img">
          <img src={sFood2} alt="img" />
        </div>
      </Slider>
      <Slider
        onSwiper={setThumbsSwiper}
        loop={true}
        // centeredSlides={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        autoplay={{
          delay: 2500,
          speed: 2000,
          disableOnInteraction: false,
        }}
        watchSlidesProgress={true}
        className="slider-nav slider-thumb"
      >
        <div className="slider-nav-img">
          <img src={sFood1} alt="" />
          <div className="overlay"></div>
        </div>

        <div className="slider-nav-img">
          <img src={sFood3} alt="" />
          <div className="overlay"></div>
        </div>
        <div className="slider-nav-img">
          <img src={sFood2} alt="" />
          <div className="overlay"></div>
        </div>
        <div className="slider-nav-img">
          <img src={sFood4} alt="" />
          <div className="overlay"></div>
        </div>
        <div className="slider-nav-img">
          <img src={sFood2} alt="" />
          <div className="overlay"></div>
        </div>
      </Slider>
    </div>
  );
}

export default FoodSlider;
