import React, {useEffect} from 'react';
import HeaderNormal from "../components/header/HeaderNormal";
import Footer from "../components/footer/Footer";

import Team from "../components/team/Team";
import { Container } from 'react-bootstrap';
import TitleSection from '../components/heading/TitleSection';
import ServiceTow from '../components/services/ServiceTow';
import FadeUpTrigger from '../animation/FadeUpTrigger';
import BoxRight from '../components/box-right/BoxRight';
import NextPage from "../components/next/NextPage";
import {Helmet} from "react-helmet";
import ServiceOne from '../components/services/ServiceOne';
import HeroSectionService from '../components/hero-section/HeroSectionService';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga4';

const headerContent = {
    title: 'Mes Services',
    description: `Ce que je propose`
}

function Services(props) {

    // const center = {lat: 30.0489206, lng: 31.258553};
    const {t} = useTranslation("common")

    useEffect(() => {
      ReactGA.event({
          hitType: 'pageview',
          page: window.location.pathname,
          title: "SERVICES PAGE"
      })
    })

    return (
        <React.Fragment>
          <Helmet>
            <title>SERVICES - STEPHANE KAMWA</title>
          </Helmet>
    
          {/*Start Header*/}
         {/* <HeaderNormalTow description={headerContent.description}>
            {headerContent.title}
          </HeaderNormalTow>
     */}
      <HeaderNormal className="background-section text-uppercase" description={t("Ce que je propose")}>
          {t("Mes Services")}<br/> 
      </HeaderNormal>
          {/*Start Box Right Info*/}
          {/* <HeroSectionService className="section-margin text-center"/> */}
    
          {/*Start Service Section*/}
          <Container className="section-margin">
            <TitleSection description={t("Mes Services")}>
              {t("Ce que je fais le mieux")}
            </TitleSection>
            <ServiceOne col={3} colMobile={1} />
          </Container>
          <NextPage
            className="section-margin"
            to="/contact"
            text={t("Ecrivez-moi directement en cliquant ici !")}
          >
           {t("Contactez-moi")}
          </NextPage>
          <Footer />
        </React.Fragment>
      );
}

export default Services;