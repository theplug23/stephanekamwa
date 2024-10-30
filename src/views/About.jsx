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
  description: `Tout savoir sur nous.`,
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
        <title>ABOUT - THEPLUG COM'</title>
      </Helmet>

      {/*Start Header*/}
     
      <HeaderNormal className="background-section text-uppercase" description={t(headerContent.description)}>
          {t(headerContent.title)}<br/> 
      </HeaderNormal>

      {/*Start Box Right Info*/}
      <BoxRight
        className="mb-section text-center"
        src="/assets/img/direction.jpg"
        parallaxFrom={{ scale: 1.2 }}
        parallax={{ scale: 1 }}
        overlay={4}
      >
        <FadeUpTrigger>
          <h3 style={{ color: "#b99226" }}>{t("Qui sommes-nous?")}</h3>
          <br />
          {t("THEPLUG COM' c'est :")} <br />
          <p
            className="mt-20 m-w750 dsn-auto"
            style={{ color: "white",textAlign:"inherit" }}
          >
            <span style={{ color: "#b99226" }}>-</span>{t("Une société donc l’ADN est la passion pour la communication, l’audiovisuel, l’image… l’art.")}{" "}
            <br />
            <br />
            <span style={{ color: "#b99226" }}>-</span>{t("Un cabinet qui accompagne les marques et entreprises dans l’atteinte de leurs objectifs sur le plan communicationnel au moyen de l’étude et du conseil.")} <br />
            <br />
            <span style={{ color: "#b99226" }}>-</span> {t("L’Opérationnel et la technicité font partie de son savoir faire en tant que structure de production audio-visuelle.")} <br />
            <br />
            <span style={{ color: "#b99226" }}>-</span> {t("Elle regroupe en son sein des directeurs en production audio-visuelle, des chargés d’études, des graphistes, des vidéastes et développeurs web qui collaborent avec professionnalisme dans le but de fournir un service excellent et de qualité.")} <br />
            <br />
            <span style={{ color: "#b99226" }}>-</span> {t("Elle dispose d’un ensemble de matériels à la pointe pour une production audio-visuelle, graphique de qualité, et des méthodes efficaces pour optimiser la communication d’un service, d’une entreprise, d’une marque, ou d’une personne.")}
          </p>
        </FadeUpTrigger>
      </BoxRight>
      {/*End Box Right Info*/}

      {/*Start Service Section*/}
      <Container className="section-margin">
        <TitleSection description={t("Notre ADN")}>
          {t("Expert dans l'analyse et la conception")}
        </TitleSection>
        <ServiceTow col={3} colMobile={1} />
      </Container>
      
      {/*Start Service Section*/}
      <Container className="section-margin">
          <TitleSection description={t("Nos Services")}>
              {t("Cabinet d'études et conseil")}
          </TitleSection>
          <ServiceOne className="text-center" col={3} colMobile={1} colGap={0} colGapTablet={30} />
      </Container>
      {/*End Service Section*/}

      {/*Start Team*/}
      <section className="section-margin background-section section-padding">
        <Container className="dsn-right-container">
          <TitleSection description={t("Notre Equipe")}>
            {t("La meilleure equipe qui soit")}
          </TitleSection>
          <Team loop grabCursor />
        </Container>
      </section>
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
