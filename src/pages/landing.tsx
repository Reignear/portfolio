import MainLayout from "../layout/main-layout";
import HeroSection from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
// import Section6 from "./section6";
import Section7 from "./section7";

const Landing = () => {
  return (
    <MainLayout>
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      {/* <Section6 /> */}
      <Section7 />
    </MainLayout>
  );
};

export default Landing;
