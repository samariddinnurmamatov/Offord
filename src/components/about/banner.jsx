// import { BannerImages } from '../../constants';
import Button from '../ui/Button';

const UserImage = () => (
  <img className="as" src="/images/banner_right.png" alt="" />
);

const Banner = () => {
  return (
    <div
      className="tablet:flex items-center justify-between gap-[25px] py-[150px] mobileS:gap-[59px]"
      id="home"
    >
      <div
        className="left tablet:max-w-[500px]"
        style={{ fontFamily: "Fredoka" }}
      >
        <h2 className="mobile:text-[55px] text-[45px] font-[700] leading-[1.2]">
          Smarter <br />
          <span>
            Solutions for a <br /> Cleaner{" "}
            <span className="bg-green-600 text-white px-[6px] rounded">
              World
            </span>{" "}
          </span>
        </h2>
        <p className="text-[17px] font-[400] mobile:mt-[25px] mt-[20px] mb-[10px] max-w-[600px] leading-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          molestiae harum illum non nulla dignissimos dolorem quod voluptates
        </p>
        <br />
        <div className="flex items-center gap-4">
          <Button text="Learn More" />
          What Or Video
        </div>
      </div>
      <div className="right bacground_aboutus_block">
        <UserImage />
      </div>
    </div>
  );
}

export default Banner;