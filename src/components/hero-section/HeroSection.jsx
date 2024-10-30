import React from "react";
import "./style.scss";

import MoveTrigger from "../../animation/MoveTrigger";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import {Pagination, SwiperOptions, Autoplay} from "swiper";

// Component
import { Col, Row } from "react-bootstrap";
import ParallaxImage from "../parallax-image/ParallaxImage";
import { dsnCN } from "../../hooks/helper";
import ButtonDefault from "../button/button-default/ButtonDefault";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const HeroContent = {
  title: "Qui sommes-nous?",
  description: `THEPLUG Com’ est une branche de THEPLUG GROUP Sarl. C’est avant tout un cabinet d’études, conseils, et de production audiovisuelle, dont l’ADN est la passion pour la communication, l’audiovisuel, l’image… l’art.`,
  suiteText: `Sa stratégie est d'étudier le consommateur comme un être rationnel, mais aussi émotionnel, qui recherche une attention particulière et désire être stimulé dans ses envies. En effet, dans sa quête permanente de satisfaction, le consommateur a besoin de bien plus qu’un 'bon produit' pour se fidéliser à une marque, et en devenir le premier promoteur.`,
  authorTitle: "Pourquoi Nous?",
  authorJob: "Photographe professionel",
  experienceNumber: "8",
  experienceDescription: `ANNÉES \n D'EXPÉRIENCE`,
  heroImage: "/assets/img/equipment.jpg",
};
const ChoiceDetails = [
    {
        number : '10',
        text: `ANNÉES \n D'EXPÉRIENCE`
    },
    {
        number : 'E',
        text: `quipe \n polyglotte \n (vos projets pourront être réalisés en  Français \n , Allemand , Anglais)`
    },
    {
        number : 'Q',
        text: `ue des \n Passionné(e)s`
    },
    {
        number : 'R',
        text: `espect des \n Délais`
    },
    {
        number : 'A',
        text: `l'écoute des \n Besoins du client`
    },
    {
        number : 'P',
        text: `lein  de \n Créativité`
    },
]

function HeroSection({ className, ...restProps }) {
  const {t} = useTranslation("common")
  return (
    <section className={dsnCN("hero-section", className)} {...restProps}>
      <Row>
        <Col lg={4}>
          <div className="box-text ">
            <MoveTrigger
              from={{ y: 0 }}
              to={{ y: -30 }}
              tablet={false}
              mobile={false}
            >
              {(ref) => (
                <h2 className="title-section mb-20 pre-line" ref={ref} style={{textTransform: 'uppercase', float:'left'}}>
                  {t(HeroContent.title)}
                </h2>
              )}
            </MoveTrigger>
            <br/>
            <br/>
            
            <FadeUpTrigger>
              {(ref) => (
                <>
                  <p ref={ref}>
                    <span>{t(HeroContent.description)}</span> <br/>
                    {t(HeroContent.suiteText)}
                  </p>
                  <ButtonDefault
                    to="/about"
                    className="mt-30"
                    text={t("Voir Plus")}
                    icon={faAngleRight}
                  />
                  {/* <h2 className='sm-title-block mt-30' ref={ref}>{HeroContent.authorTitle}</h2>
                                <span className="auth-position mt-10" ref={ref} style={{color: '#b99226'}}>{HeroContent.authorJob}</span>
                                <div className='experience mt-30'>
                                    <span className='number' ref={ref}>{HeroContent.experienceNumber}</span>
                                    <p className="color-heading pre-line"
                                       ref={ref}>{HeroContent.experienceDescription}</p>
                                </div> */}
                     <h2 className='sm-title-block mt-30' ref={ref} style= {{color: '#b99226'}}>{t(HeroContent.authorTitle)}</h2>
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true, el: ".swiper-pagination" }}
                    slidesPerView={1}
                    autoplay={{delay:5000}}
                    {...restProps}
                  >
                    {ChoiceDetails.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="experience mt-30">
                            <span className="number" ref={ref}>
                              {t(item.number)}
                            </span>
                            <p className="color-heading pre-line" ref={ref}>
                              {t(item.text)}
                            </p>
                          </div>
                        </SwiperSlide>
                      );
                    })}

                    <div className="swiper-pagination" />
                  </Swiper>
                </>
              )}
            </FadeUpTrigger>
          </div>
        </Col>
        <Col className="mt-30" lg={8}>
          <div className="box-img background-section box-padding">
            <ParallaxImage src={HeroContent.heroImage} height="100%" />
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default HeroSection;
