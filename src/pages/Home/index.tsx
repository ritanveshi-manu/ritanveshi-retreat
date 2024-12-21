import { lazy, useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent"; // Import CookieConsent and Cookies
import { Modal } from "antd";
import ReactMarkdown from "react-markdown";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import RetreatScheduleContent from "../../content/RetreatSchdule.json";
import TestimonialsContent from "../../content/TestimonialsContent.json";
import SpeakersContent from "../../content/SpeakersContent.json";
import RetreatSchedule from "../../components/RetreatSchedule";  // Import RetreatSchedule
import FAQContent from "../../content/FAQContent.json";  // Import the FAQ data
import FAQ from "../../components/FAQ";
import Location from "../../components/Location";
import LocationContent from "../../content/LocationContent.json";
import AboutRetreat from "../../components/AboutRetreat";
import AboutRitanveshi from "../../components/AboutRitanveshi";
import Testimonials from "../../components/Testimonials";
import Speakers from "../../components/Speakers";
import FloatingButton from "./FloatingButton"; // Import FloatingButton
import { MarkdownContent } from "../../components/Policy/styles";
import policyContent from "../../content/PolicyContent.json"; // Import the policy content

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const handlePolicyClick = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setModalVisible(true);
  };

  // const clearCookieConsent = () => {
  //   Cookies.remove("RitanveshiCookieConsent");
  //   window.location.reload(); // Reload the page to show the consent banner again
  // };

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
        icon="basant.png"
        id="intro"
      />
      <MiddleBlock
        key="middle-block"
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <AboutRetreat
        key="about"
        title={AboutContent.title}
        text={AboutContent.text}
        sections={AboutContent.section}
        images={["img/svg/retreat1.jpg","img/svg/retreat2.jpg","img/svg/retreat3.jpg","img/svg/retreat4.jpg","img/svg/retreat5.jpg","img/svg/retreat6.jpg","img/svg/retreat7.jpg"]} // Example images
        id="about"
      />
      <Speakers
        title={SpeakersContent.title}
        speakers={SpeakersContent.speakers}
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
      <AboutRitanveshi id="mission" key="mission"/>
      {/* <ContentBlock
        key="mission"
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="ritanveshi_logo.png"
        id="mission"
      /> */}
      <Testimonials testimonials={TestimonialsContent.testimonials} /> 
      <FAQ faqs={FAQContent.faqs} />
      <FloatingButton /> {/* Add the FloatingButton component */}
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="RitanveshiCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handlePolicyClick(policyContent.privacyPolicy.title, policyContent.privacyPolicy.content);
          }}
          style={{ color: "#4e503b" }}
        >
          Learn more
        </a>
      </CookieConsent>
      <Modal
        visible={modalVisible}
        title={modalTitle}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <MarkdownContent>
          <ReactMarkdown>{modalContent}</ReactMarkdown>
        </MarkdownContent>
      </Modal>
      {/* <button onClick={clearCookieConsent} style={{ position: 'fixed', bottom: '100px', right: '30px', zIndex: 1000 }}>
        Clear Cookie Consent
      </button> */}
    </Container>
  );
};

export default Home;