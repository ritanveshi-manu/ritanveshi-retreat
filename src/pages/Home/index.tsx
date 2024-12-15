import { lazy, useEffect } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import RetreatScheduleContent from "../../content/RetreatSchdule.json";
import RetreatSchedule from "../../components/RetreatSchedule";  // Import RetreatSchedule
import FAQContent from "../../content/FAQContent.json";  // Import the FAQ data
import FAQ from "../../components/FAQ";
import Location from "../../components/Location";
import LocationContent from "../../content/LocationContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  useEffect(() => {
    // Any initialization or cleanup code can go here
  }, []);

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        key="intro"
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="yoga.svg"
        id="intro"
      />
      <MiddleBlock
        key="middle-block"
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        key="about"
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="yoga_retreat.png"
        id="about"
      />
      <Location
        id="location-section" // Pass a unique id to the Location section
        title={LocationContent.title}
        description={LocationContent.description}
        images={LocationContent.images}
        googleMapUrl={LocationContent.googleMapUrl}
      />
      <RetreatSchedule
        key="retreat-schedule"
        title={RetreatScheduleContent.title}
        text={RetreatScheduleContent.text}
        days={RetreatScheduleContent.days}
        id="retreat-schedule"
      />
      <ContentBlock
        key="mission"
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="ritanveshi_logo.png"
        id="mission"
      />
      <ContentBlock
        key="product"
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <FAQ faqs={FAQContent.faqs} />
      <Contact
        key="contact"
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;