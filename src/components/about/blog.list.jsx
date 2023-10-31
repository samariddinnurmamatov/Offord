import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogList = React.memo(({ data }) => {
  return (
    <div
      key={data?.id}
      className="p-[15px] rounded-[10px] m-[18px]"
      style={{
        boxShadow: "0px 0px 11px -4px rgba(34, 60, 80, 0.2)",
        backgroundColor: "white",
        fontFamily: "Fredoka",
      }}
    >
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
      <div className="mt-[15px] flex flex-col gap-2">
        <h3 className="tabletL:text-[24px] text-[19px] font-[600]">
          {data?.title}
        </h3>
        <p
          className="text-[16px] font-[400] leading-[25px]  max-w-[97%]"
          style={{ color: "#47444E" }}
        >
          {data?.text}
        </p>
        <Link className="text-green-600" to="/s">
          {data.link}
        </Link>
      </div>
    </div>
  );
});

BlogList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};

BlogList.displayName = "BlogList";
export default BlogList;
