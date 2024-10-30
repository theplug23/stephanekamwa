import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';
import ReactGA from "react-ga4";
import HeaderNormal from '../components/header/HeaderNormal';
import { Container } from 'react-bootstrap';
import TitleSection from '../components/heading/TitleSection';
import PrivacyPolicyContainer from '../components/PrivacyPolicyContainer';
import Footer from '../components/footer/Footer';

function ProtectionData() {
    const {t} = useTranslation("common")

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "Politique de confidentialité PAGE"
        }) 
    })

    return (
        <React.Fragment>
            <Helmet>
                <title>{t("Protection de données")} - THEPLUG COM'</title>
            </Helmet>

            <HeaderNormal className="background-section text-uppercase" description={t("Politique de confidentialité")}>
                {t("Protection de données")} 
            </HeaderNormal>

            <Container className="section-margin">
                <TitleSection description={t("Politique de confidentialité")} />
                <PrivacyPolicyContainer className="section-margin" />
            </Container>

            <Footer />
        </React.Fragment>
    )
}

export default ProtectionData
