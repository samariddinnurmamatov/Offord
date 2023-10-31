import Banner from "../components/about/banner";
import About from "../components/about/aboutus";
import Services from "../components/about/services";
import Blog from "../components/about/blog";
import ContactUs from "../components/about/contactus";

import DefaultContainer from "../container/default-container";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Banner />
      </div>
      <div className="bacground_serv py-[70px]">
        <DefaultContainer container>
          <About />
        </DefaultContainer>
      </div>
      <div className="bgrang">
        <Services />
      </div>
      <div className="bgclients">
        <DefaultContainer container>
          <Blog />
        </DefaultContainer>
      </div>
      <DefaultContainer container>
        <ContactUs />
      </DefaultContainer>
    </div>
  );
}

export default Home;