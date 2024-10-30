import React , {useState, useEffect} from 'react';

// import {Container} from "react-bootstrap";
// import DsnGrid from "../components/DsnGrid";

import HeaderNormal from "../components/header/HeaderNormal";
import Footer from "../components/footer/Footer";
// import Map, {optionDroowMap} from "../components/Map/Map";
import Team from "../components/team/Team";
// import InfoBox from "../components/contact/InfoBox";
// import ContactForm from "../components/contact/ContactForm";
import NextPage from "../components/next/NextPage";
import {Helmet} from "react-helmet";
import { useTranslation } from 'react-i18next';
import ReactGA from "react-ga4";

const headerContent = {
    title: 'NOTRE EQUIPE',
    description: `Decouvrez l'equipe`
}

function MeetTeam(props) {

    const {t} = useTranslation("common")
        
    // const center = {lat: 30.0489206, lng: 31.258553};
    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "MEET-THE-TEAM PAGE"
        })
    })
 

    return (
        <React.Fragment>

            <Helmet>
                <title>TEAM - THEPLUG COM'</title>
            </Helmet>
            {/*Start Header*/}
            {/* <HeaderNormalTow description={headerContent.description}>
                {headerContent.title}
            </HeaderNormalTow> */}
            <HeaderNormal className="background-section text-uppercase" description={t("Découvrez l'équipe")}>
          {t("Notre Equipe")}<br/> 
      </HeaderNormal>
      <br/>
      <br/>
      <br/>
        <Team loop grabCursor/>
            <NextPage className="section-margin" to="/" text={t("Retour à l'accueil")}>
                {t("Accueil")}
            </NextPage>
            <Footer/>


        </React.Fragment>
    );
}

export default MeetTeam;