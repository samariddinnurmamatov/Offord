import { dataServcies } from "../../constants";
import AboutusList from "./aboutus.list";

const About = () => {
  return (
    <div
      className="tablet:flex items-center justify-between gap-[20px] "
      id="about"
      style={{ fontFamily: "Fredoka" }}
    >
      <div className="grid tabletL:grid-cols-2 justify-center items-center gap-[15px]">
        {dataServcies.map((item) => (
          <AboutusList key={item.id} data={item} />
        ))}
      </div>
      <div className="tablet:max-w-[490px] mt-[30px] text-center tablet:text-left tablet:mt-[1px]">
        <h2 className="tablet:text-[55px] text-[33px] font-[700] leading-[1.3]">
          Recyling for a Better{" "}
          <span className="bg-green-600 text-white px-[6px] rounded">
            World
          </span>
        </h2>
        <p className="mt-[20px] text-[16px] max-w-[1000px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequ
          expedita neque impedit fugiat magnam. Voluptatibus quos recusandae
          obcaecati sed veritatis?
        </p>
      </div>
    </div>
  );
}

export default About;