import PropTypes from "prop-types";
import React from "react";

const socialIcons = [
  { src: "/images/footer_internet.png", alt: "Internet" },
  { src: "/images/footer_instagram.png", alt: "Instagram" },
  { src: "/images/footer_linkedin.png", alt: "LinkedIn" },
];
const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About us",
  },
  {
    id: "sevice",
    title: "Service",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact us",
  },
];

const SocialIcon = ({ src, alt }) => {
  return (
    <picture className="cursor-pointer hover:translate-y-[-8px]" style={{transition: ".5s"}}>
      <source srcSet={src} media="(width: 100%)" />
      <img src={src || "/loading.gif"} alt={alt} loading="lazy" />
    </picture>
  );
};

SocialIcon.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const Mainfoter = React.memo(() => {
  return (
    <div className="mt-[70px bg-green-600">
      <div className="py-12">
        <h2 className="font-semibold text-3xl text-center text-white">
          Recyworld
        </h2>
        <ul className="flex items-center justify-center text-center gap-5 mt-[35px] mb-[30px]">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-white font-poppins font-medium cursor-pointer text-[16px]"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center space-x-9 mt-5">
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </div>
      <hr />
      <div className="container py-[25px] tablet:flex items-center justify-between">
        <div className="flex gap-[5px] text-white justify-center">
          <p>Privary |</p>
          <p>Terms and condition</p>
        </div>
        <div className="tablet:mt-[0px] mt-[15px] flex gap-[5px] text-white justify-center">
          <p>@ 2023 All rights reserved This is your Company</p>
        </div>
      </div>
    </div>
  );
});

Mainfoter.displayName = "Mainfoter";
export default Mainfoter;
