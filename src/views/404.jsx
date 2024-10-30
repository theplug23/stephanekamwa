import React, {useEffect} from "react";
import { Container } from "react-bootstrap";
import {faAngleRight, faHome, faHomeLg} from "@fortawesome/free-solid-svg-icons";
import HeaderNormal from "../components/header/HeaderNormal";
import TitleSection from "../components/heading/TitleSection";
import Footer from "../components/footer/Footer";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import ReactGA from 'react-ga4';
import ButtonDefault from "../components/button/button-default/ButtonDefault";


function NotFound() {

  const {t} = useTranslation("common")

  useEffect(() => {
    ReactGA.event({
        hitType: 'pageview',
        page: window.location.pathname,
        title: "404 PAGE"
    })
  })

  return (
    <React.Fragment>
      <Helmet>
        <title>404 - THEPLUG COM'</title>
      </Helmet>
     
      <HeaderNormal className="background-section text-uppercase" 
        description={t("Page 404")}>
          {t("Erreur de page")}<br/> 
      </HeaderNormal>

      {/*Start Service Section*/}
      <Container className="section-margin">
        <TitleSection description={t("Page 404")}>
          {t("Retourner sur la page d'accueil")}
        </TitleSection>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <ButtonDefault href={'/'} className="mt-30" text={t("Accueil")}
            icon={faHomeLg} />
        </div>
      </Container>

      <Footer />
    </React.Fragment>
  );
}

export default NotFound;
