import React,  { useEffect } from 'react'
import ReactGA from "react-ga4";
import TitleSection from '../components/heading/TitleSection';
import {Container} from "react-bootstrap";
import HeaderNormal from '../components/header/HeaderNormal';
import { useTranslation } from 'react-i18next';
import Footer from '../components/footer/Footer';
import { Helmet } from 'react-helmet';
import ImpressumContainer from '../components/ImpressumContainer';

function Impressum() {
    const {t} = useTranslation("common")

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "Mentions légales PAGE"
        }) 
    })

    return (
        <React.Fragment>
            <Helmet>
                <title>{t("Mentions légales")} - THEPLUG COM'</title>
            </Helmet>

            <HeaderNormal className="background-section text-uppercase" description={t("")}>
                {t("Mentions légales")} 
            </HeaderNormal>

            <Container as={TitleSection} description={t("Mentions légales")} className="mt-section">
                {t("Mentions légales")}
            </Container>

            <ImpressumContainer className="section-margin" />

            <Footer />
        </React.Fragment>
    )
}

export default Impressum
