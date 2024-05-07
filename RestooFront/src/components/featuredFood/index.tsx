import Slider from "../slider";
import { foods } from "../../data/food";
import FoodCard from "../cards/foodCard";

function FeaturedFood() {
  return (
    <section className="featured s-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="featured-head">
              <h2>Our Featured & Newest Restaurant</h2>
            </div>
          </div>
        </div>
        <div className="row   ">
          <Slider
            spaceBetween={0}
            centeredSlides={true}
            className="featured-slick red-pagination"
            pagination={true}
            freeMode={true}
            speed={500}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            allowTouchMove={false}
            breakpoints={{
              1: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
          >
            {foods?.map((food) => (
              <FoodCard key={food.id} food={food} className=" pb-48" />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default FeaturedFood;
