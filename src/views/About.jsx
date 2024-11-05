import React, {useEffect} from "react";

import { Container } from "react-bootstrap";
import FadeUpTrigger from "../animation/FadeUpTrigger";

import HeaderNormal from "../components/header/HeaderNormal";
import BoxRight from "../components/box-right/BoxRight";
import TitleSection from "../components/heading/TitleSection";
import ServiceTow from "../components/services/ServiceTow";
import Team from "../components/team/Team";
// import BrandClient from "../components/brand-client/BrandClient";
import NextPage from "../components/next/NextPage";
import Footer from "../components/footer/Footer";
// import TestimonialTow from "../components/testimonial/TestimonialTow";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import ServiceOne from '../components/services/ServiceOne';
import ReactGA from 'react-ga4';

const headerContent = {
  title: "L'art de la communication",
  description: `Tout savoir sur moi.`,
};

function About() {

  const {t} = useTranslation("common")

  useEffect(() => {
    ReactGA.event({
        hitType: 'pageview',
        page: window.location.pathname,
        title: "ABOUT PAGE"
    })
  })

  return (
    <React.Fragment>
      <Helmet>
        <title>ABOUT - STEPHANE KAMWA</title>
      </Helmet>

      {/*Start Header*/}
     
      <HeaderNormal className="background-section text-uppercase" description={t(headerContent.description)}>
          {t(headerContent.title)}<br/> 
      </HeaderNormal>

      {/*Start Box Right Info*/}
      <BoxRight
        className="mb-section text-center"
        src="/assets/img/equipment.jpg"
        parallaxFrom={{ scale: 1.2 }}
        parallax={{ scale: 1 }}
        overlay={4}
      >
        <FadeUpTrigger>
          <h3 style={{ color: "#b99226" }}>{t("Qui suis-je?")}</h3>
          <br />
          {t("Stephane Kamwa c'est :")} <br />
          <p
            className="mt-20 m-w750 dsn-auto"
            style={{ color: "white",textAlign:"inherit" }}
          >
            <span style={{ color: "#b99226" }}>-</span>{t("Un freelance avec une passion profonde pour la communication, les médias audiovisuels, l'imagerie, le développement web et mobile... et l'art qui réunit ces domaines.")}{" "}
            <br />
            <br />
            <span style={{ color: "#b99226" }}>-</span>{t("Un partenaire de confiance qui aide les marques et les entreprises à atteindre leurs objectifs de communication par le biais d'études stratégiques, de conseils et de solutions numériques.")} <br />
            <br />
            <span style={{ color: "#b99226" }}>-</span> {t("Une entité de production polyvalente qui maîtrise les aspects opérationnels et techniques de la production audiovisuelle, ainsi que le développement web et mobile.")} <br />
            <br />
            <span style={{ color: "#b99226" }}>-</span> {t("Soutenue par un réseau professionnel de directeurs de production audiovisuelle, de chercheurs, de graphistes, de vidéastes et de développeurs web, qui collaborent tous pour fournir un service de premier ordre.")} <br />
            <br />
            <span style={{ color: "#b99226" }}>-</span> {t("Équipés d'une technologie de pointe pour une production audiovisuelle, graphique et numérique de qualité supérieure, ainsi que de stratégies efficaces pour améliorer la communication de tout département, entreprise, marque ou individu.")}
          </p>
        </FadeUpTrigger>
      </BoxRight><br/>
      {/*End Box Right Info*/}

      {/*Start Service Section*/}
      <Container className="section-margin">
        <TitleSection description={t("Mon ADN")}>
          {t("Expert dans la conception")}
        </TitleSection>
        <ServiceTow col={3} colMobile={1} />
      </Container>
      
      {/*Start Service Section*/}
      <Container className="section-margin">
          <TitleSection description={t("Mes Services")}>
              {t("Ce que je fais le mieux")}
          </TitleSection>
          <ServiceOne className="text-center" col={3} colMobile={1} colGap={0} colGapTablet={30} />
      </Container>
      {/*End Service Section*/}

      {/*Start Team*/}
      {/* <section className="section-margin background-section section-padding">
        <Container className="dsn-right-container">
          <TitleSection description={t("Notre Equipe")}>
            {t("La meilleure equipe qui soit")}
          </TitleSection>
          <Team loop grabCursor />
        </Container>
      </section> */}
      {/*End Team*/}

      {/*Start Service Section*/}
      {/* <Container className="section-margin">
        <TitleSection description='Les clients disent'>
          Le retour de nos clients
        </TitleSection>
        <TestimonialTow grabCursor loop />
      </Container> */}
      {/*End Service Section*/}

      {/*Start Brand*/}
      {/* <Container className="section-margin">
        <TitleSection description="Nos Clients">
          Votre Succes, Notre <br /> reputation
        </TitleSection>
        <BrandClient col={3} colTablet={2} colGap={2} rowGap={2} />
      </Container> */}
      {/*End Brand*/}

      <NextPage
        className="section-margin"
        to="/contact"
        text={t("Ecrivez-nous directement en cliquant ici !")}
      >
        {t("Contactez-nous")}
      </NextPage>
      <Footer />
    </React.Fragment>
  );
}

export default About;
