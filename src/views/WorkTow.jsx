import React, {useEffect} from 'react';

import {Container} from "react-bootstrap";

import PortfolioClassic from "../components/portfolio/portfolioClassic";
import NextPageContent from "../components/next/NextPageContent";
import Footer from "../components/footer/Footer";
import HeaderNormal from "../components/header/HeaderNormal";
import {Helmet} from "react-helmet";
import { useTranslation } from 'react-i18next';
import ReactGA from "react-ga4";
import TitleSection from "../components/heading/TitleSection";
import PortfolioProjectList from '../components/portfolio/PortfolioProjectList';

function WorkTow(props) {
    const {t} = useTranslation("common")

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "PORTFOLIO PAGE"
        })
    })

    return (
        <React.Fragment>
            <Helmet>
                <title>PORTFOLIO - STEPHANE KAMWA</title>
            </Helmet>
            <HeaderNormal className="background-section text-uppercase" description={t("Mes dernières réalisations")}>
                {t("Mes Réalisations")}<br/> 
            </HeaderNormal>
            <Container as={TitleSection} description={t("Mes Réalisations")} className="mt-section">
                {t("Projets réalisés")}
            </Container>
            {/* <PortfolioSwiper 
                className="mb-section" 
                grabCursor 
                autoplay={{ delay: 3000 }} 
                loop={true} 
            /> */}
            <PortfolioProjectList />
            <Container fluid className="mt-section">
                <PortfolioClassic col={3}
                    colGap={50}
                    colGapTablet={30}
                    rowGap={50}
                    rowGapTablet={30}
                />
            </Container>

            <NextPageContent className="section-margin" />
            <Footer />


        </React.Fragment>
    );
}

export default WorkTow;