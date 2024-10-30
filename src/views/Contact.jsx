import React, {useEffect} from "react";

import HeaderNormal from "../components/header/HeaderNormal";
import HeroSectionContact from "../components/hero-section/HeroSectioncontact";
import Footer from "../components/footer/Footer";
import NextPage from "../components/next/NextPage";
import { Helmet } from "react-helmet";
import "../components/Map/style.scss";
import { useTranslation } from "react-i18next";
import ReactGA from 'react-ga4';

function Contact(props) {
  //const center = { lat: 30.0489206, lng: 31.258553 };
  const {t} = useTranslation("common")
  
  useEffect(() => {
    ReactGA.event({
      hitType: 'pageview',
      page: window.location.pathname,
      title: "CONTACT PAGE"
    })
  })

  return (
    <React.Fragment>
      <Helmet>
        <title>CONTACT - THEPLUG COM'</title>
      </Helmet>

      <HeaderNormal className="background-section text-uppercase" description={t("Démarrez un projet avec nous")}>
          {t("Contacts")}<br/> 
      </HeaderNormal>
      <HeroSectionContact className="section-margin text-center" />
      {/*Start Map*/}
      {/* <div className="mapsrow">
        <Map
          googleMapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg"
          defaultZoom={10}
          options={optionDroowMap}
          height="33vh"
          defaultCenter={center}
          showMarker
        />
        &ensp;
        <Map
          googleMapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg"
          defaultZoom={10}
          options={optionDroowMap}
          height="33vh"
          defaultCenter={center}
          showMarker
        />
        &ensp;
        <Map
          googleMapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg"
          defaultZoom={10}
          options={optionDroowMap}
          height="33vh"
          defaultCenter={center}
          showMarker
        />
        &ensp;
        <Map
          googleMapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg"
          defaultZoom={10}
          options={optionDroowMap}
          height="33vh"
          defaultCenter={center}
          showMarker
        />
      </div> */}
        

      {/*Start Contact Form && Info Box*/}
      <NextPage
        className="section-margin"
        to="/portfolio"
        text={t("VOIR PLUS DE TRAVAUX")}
      >
        {t("RÉALISATIONS")}
      </NextPage>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
