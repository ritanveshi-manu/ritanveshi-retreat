import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import Policy from "../Policy";

import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Empty,
  FooterContainer,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  // const handleChange = (language: string) => {
  //   i18n.changeLanguage(language);
  // };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>B-1004, KM Residency</Para>
              <Para>Rajnagar Extension, Ghaziabad, Uttar Pradesh</Para>
              <Para>India</Para>
              <Para>PIN - 201017</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Policy t={t} /> {/* Use the Policy component */}
            </Col>
            {/* <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/">{t("Refund Policy")}</Large>
              <Large to="/">{t("Application Security")}</Large>
              <Large to="/">{t("Software Principles")}</Large>
            </Col> */}
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large as="a" href="mailto:retreat@ritanveshi.org">{t("Customer Support")}</Large>
            </Col>
          </Row>
          <Row justify="space-between">
            {/* <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>B-1004, KM Residency</Para>
              <Para>Rajnagar Extension, Ghaziabad, Uttar Pradesh</Para>
              <Para>India</Para>
              <Para>PIN - 201017</Para>
            </Col> */}
            <Col lg={8} md={8} sm={12} xs={12}>
              {/* <Title>{t("Company")}</Title>
              <Large to="/">{t("About")}</Large>
              <Large to="/">{t("Blog")}</Large>
              <Large to="/">{t("Press")}</Large>
              <Large to="/">{t("Careers & Culture")}</Large> */}
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
              <img src={`${process.env.PUBLIC_URL}/img/svg/ritanveshi_logo.png`} alt="Ritanveshi" width="101px" height="75px" />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.youtube.com/@RitanveshiYogayan"
                src="youtube.svg"
              />
              <SocialLink
                href="https://www.instagram.com/ritanveshi"
                src="instagram.svg"
              />
              <SocialLink
                href="https://www.facebook.com/ritanveshi"
                src="facebook.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/company/ritanveshi-yogayan-foundation-ryf"
                src="linkedin.svg"
              />
              <a
                href="https://ko-fi.com/Y8Y7H8BNJ"
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
