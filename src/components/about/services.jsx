import { dataPortfolio } from "../../constants";
import ServicesList from "./services.list";

const Services = () => {
  return (
    <div
      className="py-[60px] pb-[90px]"
      id="services"
      style={{ fontFamily: "Fredoka" }}
    >
      <div className="container flex flex-col justify-center text-center items-center gap-[20px]">
        <h2 className="font-[700] tablet:text-[46px] text-[35px] tablet:leading-[57px] leading-[50px] max-w-[500px]">
          Smarter Solutions for a Cleaner{" "}
          <span className="bg-green-600 text-white px-[6px] rounded">
            World
          </span>{" "}
        </h2>
        <p className="max-w-[520px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque,
          impedit nisi quis quas laboriosam quasi ut optio
        </p>
      </div>
      <div className="bg-green-600 tablet:h-[280px] mt-[120px]">
        <div className="container">
          <div className="mt-[20px] flex gap-5 justify-evenly items-center relative top-[-80px]">
            {["/images/portfolio1.png", "/images/portfolio2.png"].map(
              (img, index) => (
                <div key={index}>
                  <picture>
                    <source srcSet={img} media="(width: 100%)" />
                    <img
                      src={img || "/loading.gif"}
                      alt={`Portfolio${index + 1}`}
                      loading="lazy"
                    />
                  </picture>
                </div>
              )
            )}
          </div>
          <div className="mt-[40px] relative bottom-[50px] hidden tablet:grid tablet:grid-cols-4 mobile:grid-cols-3 grid-cols-2 justify-between items-center gap-4">
            {dataPortfolio.map((item) => (
              <ServicesList key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
