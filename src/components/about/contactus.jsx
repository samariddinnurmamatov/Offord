import Button from "../ui/Button";

const ContactUs = () => {
  return (
    <div id="contactus">
      <div className="tabletL:flex items-center justify-between gap-3 tablet:pb-[0px] pb-[30px]">
        <div className="tablet:w-[75%] w-[80%] m-auto">
          <picture>
            <source srcSet="/images/blog_img1.png" media="width: 100%" />
            <img src="/images/blog1.png" alt="Logo" loading="lazy" />
          </picture>
        </div>
        <div className="tablet:mt-0 mt-[30px]">
          <h2 className="mb-[30px] tanletTT:text-[50px] text-[29px] font-[700] leading-[1.1]">
            Ready to Make Sacrifices For a Clean and Green Environment
          </h2>
          <Button text="Get Join Now" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
