import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="page-404 p-10">
      <div className="container">
        <div className="four_zero_four_bg">
          <h1 className="text-center text-[80px] font-[700]">404</h1>
        </div>

        <div className="content-box-404 text-center mt-[-50px]">
          <h2 className="text-2xl text-bold">Look like you're lost</h2>
          <br />
          <p>The page you are looking for is not available!</p>
          <Link
            to="/"
            className="link-404 text-white bg-green-500 px-4 py-2 mt-4 rounded-full inline-block text-center"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};
