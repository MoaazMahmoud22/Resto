import "swiper/css"; /*only core Swiper styles*/
import "swiper/css/bundle"; /* all Swiper styles including all modules styles (like Navigation, Pagination, etc.)*/
import "swiper/css/a11y"; /* styles required for A11y module*/
import "swiper/css/autoplay"; /* styles required for Autoplay module*/
import "swiper/css/controller"; /* styles required for Controller module*/
import "swiper/css/effect-cards"; /* styles required for Cards Effect module*/
import "swiper/css/effect-coverflow"; /* styles required for Coverflow Effect module*/
import "swiper/css/effect-creative"; /* styles required for Creative Effect module*/
import "swiper/css/effect-cube"; /* styles required for Cube Effect module*/
import "swiper/css/effect-fade"; /* styles required for Fade Effect module*/
import "swiper/css/effect-flip"; /* styles required for Flip Effect module*/
import "swiper/css/free-mode"; /* styles required for Free Mode module*/
import "swiper/css/grid"; /* styles required for Grid module*/
import "swiper/css/hash-navigation"; /* styles required for Hash Navigation module*/
import "swiper/css/history"; /* styles required for History module*/
import "swiper/css/keyboard"; /* styles required for Keyboard module*/
import "swiper/css/manipulation"; /* styles required for Manipulation module*/
import "swiper/css/mousewheel"; /* styles required for Mousewheel module*/
import "swiper/css/navigation"; /* styles required for Navigation module*/
import "swiper/css/pagination"; /* styles required for Pagination module*/
import "swiper/css/parallax"; /* styles required for Parallax module*/
import "swiper/css/scrollbar"; /* styles required for Scrollbar module*/
import "swiper/css/thumbs"; /* styles required for Thumbs module*/
import "swiper/css/virtual"; /* styles required for Virtual module*/
import "swiper/css/zoom"; /*styles required for Zoom module*/
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Controller,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  EffectFlip,
  FreeMode,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Manipulation,
  Mousewheel,
  Parallax,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom,
} from "swiper/modules";

interface SliderProps {
  children: React.ReactNode[];
  [index: string]: object | [] | string | number | boolean;
}

function Slider({ children, ...props }: SliderProps) {
  return (
    <Swiper
      {...props}
      modules={[
        A11y,
        Controller,
        EffectCards,
        EffectCoverflow,
        EffectCreative,
        EffectCube,
        Autoplay,
        Pagination,
        Navigation,
        EffectFade,
        EffectFlip,
        FreeMode,
        Grid,
        HashNavigation,
        History,
        Keyboard,
        Manipulation,
        Mousewheel,
        Parallax,
        Scrollbar,
        Thumbs,
        Virtual,
        Zoom,
      ]}
    >
      {children?.map((child, index) => (
        <SwiperSlide key={index + "swiper"}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
