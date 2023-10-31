import Slider from "react-slick";
import { dataClients } from "../../constants";
import BlogList from "./blog.list";

const Blog = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: null,
    nextArrow: null, 
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id="blog">
      <div
        className="flex flex-col justify-center text-center items-center gap-[20px]"
        style={{ fontFamily: "Fredoka" }}
      >
        <h2 className="font-[700] tablet:text-[46px] text-[35px] tablet:leading-[57px] leading-[50px]">
          Latest Article <br />
          <span className="bg-green-600 text-white px-[6px] rounded">
            World
          </span>{" "}
        </h2>
        <p className="max-w-[520px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque,
          impedit nisi quis quas laboriosam quasi ut optio
        </p>
      </div>

      <div className="mt-[20px]">
        <Slider {...sliderSettings}>
          {dataClients.map((item) => (
            <BlogList key={item.id} data={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
