import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import SliderPortfolio from "../../components/slider-portfolio/SliderPortfolio";
import HeroSection from "../../components/hero-section/HeroSection";
import ServiceOne from "../../components/services/ServiceOne";
import TitleSection from "../../components/heading/TitleSection";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import PortfolioSwiper from "../../components/portfolio/PortfolioSwiper";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import DsnGrid from "../../components/DsnGrid";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import Testimonial from "../../components/testimonial/Testimonial";
import BlogSwiper from "../../components/blog/BlogSwiper";
import BrandClient from "../../components/brand-client/BrandClient";
import NextPageContent from "../../components/next/NextPageContent";
import Footer from "../../components/footer/Footer";
import HeroSectionTow from "../../components/hero-section/HeroSectionTow";
import { useTranslation } from "react-i18next";
import ReactGA from 'react-ga4'

const MainDemo = () => {
    const { t } = useTranslation("common")

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "HOME PAGE"
        })
    })

    return (
        <React.Fragment>

            <Helmet>
                <title>HOME - THEPLUG COM'</title>
            </Helmet>

            {/*Start Slider Portfolio*/}
            <SliderPortfolio tag="header" className="mb-section" />
            {/*End Slider Portfolio*/}

            {/*Start Hero Section*/}
            <Container className="section-margin dsn-right-container">
                <HeroSection />
            </Container>
            {/*End Hero Section*/}


            {/*Start Service Section*/}
            <Container className="section-margin">
                <TitleSection description={t("Nos Services")}>
                    {t("Ce que nous faisons le mieux")}
                </TitleSection>
                <ServiceOne 
                    className="text-center" 
                    col={3} colMobile={1} colGap={0} 
                    colGapTablet={30} 
                />
            </Container>
            {/*End Service Section*/}

            {/*Start Box Right Info*/}
            {/* <HeroSectionTow className="section-margin text-center"/> */}
            {/*End Box Right Info*/}


            {/*Start Portfolio Swiper*/}
            <Container as={TitleSection} description={t("Nos Réalisations")}>
                Portfolio
            </Container>
            <PortfolioSwiper grabCursor autoplay={{ delay: 3000 }} loop={true} />
            {/*End Portfolio Swiper*/}


            {/*Start Box Info With Image*/}
            <BoxImageVertical src="/assets/img/portfolio-2.jpg" className="section-margin">
                <TitleCover>THEPLUG COM'</TitleCover>
                <FadeUpTrigger>
                    {(ref) =>
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>

                            <h2 className='title-section border-line-left' ref={ref}>
                                {t("Stratégie marketing")}
                            </h2>
                            <h6 ref={ref}>
                                {t("Nous avons à cœur votre stratégie marketing")}
                            </h6>
                            <p ref={ref}>
                                {t("La stratégie marketing est un point clé vers le succès de vos projets de communication. Nous sommes là pour vous aider à réussir.")}
                            </p>
                            <div className="button-box" ref={ref}>
                                <ButtonDefault text={t("En savoir plus")} icon={faAngleRight} href="/about" />
                            </div>

                        </DsnGrid>
                    }
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

            {/*Start Testimonial*/}
            <Container className="section-margin">
                <Testimonial autoHeight autoplay={{ delay: 3000 }} loop grabCursor title={t("Le retour de nos clients.")} />
            </Container>
            {/*End Testimonial*/}

            {/*Start Blog*/}
            {/* <Container className="section-margin dsn-right-container">
                <TitleSection description="Dernieres nouvelles">
                    Dernieres posts les plus populaires
                </TitleSection>
                <BlogSwiper grabCursor loop autoHeight/>
            </Container> */}
            {/*End Blog*/}

            {/*Start Brand*/}
            <Container className="section-margin">
                <TitleSection description={t("Nos Clients")}>
                    {t("Votre succès, Notre")}<br /> {t("réputation")}
                </TitleSection>
                <BrandClient
                    col={3}
                    colTablet={2}
                    colGap={2}
                    rowGap={2}
                />
            </Container>
            {/*End Brand*/}

            <NextPageContent className="section-margin" />
            <Footer />

        </React.Fragment>

    );
}


export default MainDemo;