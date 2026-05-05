import { useLocation } from "react-router-dom";
import MainLayout from "../layout/main-layout";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
// import Section6 from "./section6";
import Section7 from "./section7";
import { useEffect } from "react";

const Landing = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        requestAnimationFrame(tryScroll);
      }
    };

    requestAnimationFrame(tryScroll);
  }, [hash]);

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
      <div id="skills">
        <Section4 />
      </div>
      <div id="portfolio">
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
