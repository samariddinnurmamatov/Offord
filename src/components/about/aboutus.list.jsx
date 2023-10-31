import React from "react";
import PropTypes from "prop-types";

const AboutusList = React.memo(({ data }) => {
  return (
    <div
      key={data?.id}
      className={`py-[20px] px-[10px] rounded-[10px] mt-[${data.mt}px `}
      style={{boxShadow: "0px 0px 11px -4px rgba(34, 60, 80, 0.2)", backgroundColor: "white"}}
    >
      <div className="flex items-center justify-center gap-[20px]">
        <picture>
          <source srcSet={String(data?.icon)} media="width: 100%" />
          <img
            src={String(data?.icon) || "/loading.gif"}
            alt="Logo"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="mt-[15px] text-center">
        <h3 className="text-[19px] font-[500]">{data?.title}</h3>
        <p
          className="text-[16px] font-[400] leading-[25px]  max-w-[97%] px-[10px]"
          style={{ color: "#47444E" }}
        >
          {data?.text}
        </p>
      </div>
    </div>
  );
});

AboutusList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    mt: PropTypes.string,
  }).isRequired,
};

AboutusList.displayName = "AboutusList";
export default AboutusList;
