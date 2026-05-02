import MainLayout from "../layout/main-layout";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
// import Section6 from "./section6";
import Section7 from "./section7";

const Landing = () => {
  return (
    <MainLayout>
      <div id="home">
        <Section1 />
      </div>
      <div id="about">
        <Section2 />
      </div>
      <div id="services">
        <Section3 />
      </div>
      <div id="portfolio">
        <Section4 />
      </div>
      <div id="skills">
        <Section5 />
      </div>
      {/* <Section6 /> */}
      <div id="contact">
        <Section7 />
      </div>
    </MainLayout>
  );
};

export default Landing;
