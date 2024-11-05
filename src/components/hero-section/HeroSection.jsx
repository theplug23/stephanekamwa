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
  title: "Qui suis-je?",
  description: `Un freelance avec une passion profonde pour la communication, les médias audiovisuels, l'imagerie, le développement web et mobile... et l'art qui réunit ces domaines. Un partenaire de confiance qui aide les marques et les entreprises à atteindre leurs objectifs de communication par le biais d'études stratégiques, de conseils et de solutions numériques. Une entité de production polyvalente qui maîtrise les aspects opérationnels et techniques de la production audiovisuelle, ainsi que le développement web et mobile.`,
  suiteText: `Soutenue par un réseau professionnel de directeurs de production audiovisuelle, de chercheurs, de graphistes, de vidéastes et de développeurs web, qui collaborent tous pour fournir un service de premier ordre. Équipés d'une technologie de pointe pour une production audiovisuelle, graphique et numérique de qualité supérieure, ainsi que de stratégies efficaces pour améliorer la communication de tout département, entreprise, marque ou individu.`,
  authorTitle: "Pourquoi Moi?",
  authorJob: "Photographe professionel",
  experienceNumber: "8",
  experienceDescription: `ANNÉES \n D'EXPÉRIENCE`,
  heroImage: "/assets/img/Theplug.png",
};
const ChoiceDetails = [
    {
        number : '10',
        text: `ANNÉES \n D'EXPÉRIENCE`
    },
    {
        number : 'M',
        text: `ultilingue \n (vos projets pourront être réalisés en  Français \n , Allemand , Anglais)`
    },
    {
        number : 'T',
        text: `rès \n Passionné`
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
