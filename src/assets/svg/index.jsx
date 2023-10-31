import PropTypes from "prop-types";

const BannerArrowIcon = ({ fill = "#e1e1e1" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 20.8306L21 13.3306V12.2701L13.5 4.77008L12.4395 5.83058L18.6585 12.0511H3V13.5511H18.66L12.438 19.7701L13.4985 20.8306H13.5Z"
        fill={fill}
      />
    </svg>
  );
};

BannerArrowIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  fillRule: PropTypes.string.isRequired,
  clipRule: PropTypes.string.isRequired,
};

export { BannerArrowIcon };
