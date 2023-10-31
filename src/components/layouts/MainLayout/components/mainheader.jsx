import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    id: "services",
    title: "Services",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "contactus",
    title: "Contact Us",
  },
];

const Mainheader = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = isScrolled ? "header_scrolled" : "header";

  return (
    <div className={`fixed top-0 w-[100%] ${headerClass} bg-gray-100 z-50`}>
      <header className="container mx-auto flex items-center justify-between gap-[20px] py-[15px]">
        <div
          className="flex items-center justify-between gap-[50px] text-green-600 text-[25px] font-[700]"
          style={{ fontFamily: "Fredoka" }}
        >
          <Link to="/">
            <p>Recyworld</p>
          </Link>
        </div>
        {/* <ul className="flex gap-[35px] all-text_font">
          <a href="#about" className="text-green-600 font-[400 cursor-pointer">
            Home
          </a>
          <a href="#about" className="text-black font-[400 cursor-pointer">
            About us
          </a>
          <a href="#services" className="text-black font-[400] cursor-pointer">
            Services
          </a>
          <a href="#blog" className="text-black font-[400] cursor-pointer">
            Blog
          </a>
          <a href="#work" className="text-black font-[400] cursor-pointer">
            Contact Us
          </a>
        </ul> */}
        <ul className="hidden tabletL:flex justify-end items-start gap-8 all-text_font">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-black" : "text-gray-500"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div
          className="tabletL:hidden rounded-[55px] py-[14px] px-[11px] bg-white cursor-pointer"
          style={{ boxShadow: "0px 5px 29px -4px rgba(34, 60, 80, 0.15)" }}
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={toggle ? "/images/bar.png" : "/images/bar.png"}
            alt="menu"
            className="cursor-pointer"
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl mt-[17px]`}
            style={{
              boxShadow: "0px 1px 19px -8px rgba(34, 60, 80, 0.2)",
              zIndex: "9999",
            }}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-black" : "text-gray-500"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
});

Mainheader.displayName = "Mainheader";
export default Mainheader;