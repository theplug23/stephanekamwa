import React, { useEffect } from "react"
import {Helmet} from "react-helmet";
import HeaderNormal from "../header/HeaderNormal";
import {Container} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import ReactGA from "react-ga4";
import TitleSection from "../heading/TitleSection";
import Footer from "../footer/Footer";
import ProductionVideoList from "./ProductionVideoList";

export const ProductionVideo = () => {
    const {t} = useTranslation("common")

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "PRODUCTION VIDEO PAGE"
        })
        
    }, [])

    return (
        <React.Fragment>
            <Helmet>
                <title>OUR PRODUCTION VIDEO - THEPLUG COM'</title>
            </Helmet>

            <HeaderNormal className="background-section text-uppercase" description={t("Nos dernières réalisations")}>
                {t("Notre Production Vidéo")} 
            </HeaderNormal>

            <Container className="mt-section">
                <TitleSection description={t("Projets vidéo réalisés")} />
                <ProductionVideoList />
            </Container>

            <br /><br />
            <Footer/>
        </React.Fragment>
    )
}
