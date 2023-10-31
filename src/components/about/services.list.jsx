import React from "react";
import PropTypes from "prop-types";

const ServicesList = React.memo(({ data }) => {
  return (
    <div
      key={data?.id}
      className="p-[15px] rounded-[10px]"
      style={{
        boxShadow: "0px 0px 11px -4px rgba(34, 60, 80, 0.2)",
        backgroundColor: "white",
      }}
    >
      <div className="mt-[15px] text-center">
        <p
          className="text-[16px] font-[400] leading-[25px]  max-w-[97%]"
          style={{ color: "#47444E" }}
        >
          {data?.text}
        </p>
        <h3 className="text-[24px] font-[500]">{data?.title}</h3>
      </div>
      <div className="flex items-center justify-center gap-[20px]">
        <picture className="flex items-center justify-center">
          <source srcSet={String(data?.icon)} media="width: 100%" />
          <img
            src={String(data?.icon) || "/loading.gif"}
            alt="Logo"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
});

ServicesList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};

ServicesList.displayName = "ServicesList";
export default ServicesList;
