import { Fade } from "react-awesome-reveal";
import ContactContent from "../../content/ContactContent.json";
import { Col } from "antd";
import {
  ContactContainer,
  ContentWrapper,
  Highlight,
  StyledRow,
} from "./styles";

const Contact = ({ id }: { id: string }) => {
  const { leftSection } = ContactContent;

  // const scrollToForm = () => {
  //   const formElement = document.getElementById("booking-form");
  //   if (formElement) {
  //     formElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <ContactContainer id={id}>
      <StyledRow justify="space-between" align="middle">
        <Col lg={11} md={11} sm={24} xs={24}>
          <Fade direction="left" triggerOnce>
            <ContentWrapper>
              <h2>{leftSection.title}</h2>
              {leftSection.highlights.map((point, index) => (
                <Highlight key={index}>{point}</Highlight>
              ))}
              <p>Contact: {leftSection.contact.email}</p>
              <h4>{leftSection.callToAction}</h4>
              <p>{leftSection.description}</p>
              {/* <ButtonWrapper>
                <Button onClick={scrollToForm}>{leftSection.buttonText}</Button>
              </ButtonWrapper> */}
            </ContentWrapper>
          </Fade>
        </Col>
        <Col lg={11} md={11} sm={24} xs={24}>
          <Fade direction="right" triggerOnce>
            <ContentWrapper id="booking-form">
              <iframe
                src="https://forms.monday.com/forms/embed/869f3dca5521ab374fcf099485f91ade?r=use1"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="Reserve Now Form"
              ></iframe>
            </ContentWrapper>
          </Fade>
        </Col>
      </StyledRow>
    </ContactContainer>
  );
};

export default Contact;