import PropTypes from "prop-types";
import { BannerArrowIcon } from "../../../assets/svg";

const Button = ({ text }) => {
  return (
    <button
      className="text-white text-[15px] flex items-center gap-[10px] font-[400] rounded-[25px] py-[10px] px-[25px] transform translate-y-0 hover:translate-y-[-8px]"
      style={{ background: "green", transition: ".4s" }}
    >
      {text} <BannerArrowIcon fill="#8643DC" />
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
