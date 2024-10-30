import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

import {Container} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";
import TextTrigger from "../../animation/TextTrigger";
import FadeUpTrigger from "../../animation/FadeUpTrigger";

//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import BoxGallery from "../../components/box-gallery/BoxGallery";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import FJustifiedGallery from "../../components/justified-gallery/FJustifiedGallery";
import NextProject from "../../components/next/NextProject";
import {Helmet} from "react-helmet";
import { dateParser } from '../../utils';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/footer/Footer';


const TimeTagWatch = ({data}) => {

    const nextData = getPortfolioItem(data.id + 1);
    const {t} = useTranslation("common")

    return (
        <React.Fragment>
            <Helmet>
                <title>{data.title} - THEPLUG COM'</title>
                <meta
                    name="description"
                    content={data.description}
                />
            </Helmet>

            {/*Start Header Half*/}
            <HeaderHalf heroContent={data}
                parallax={{yPercent: 30, scale: 1.1}}
                href={data.href ? data.href : ''}
                textButton="View Website"
                overlay={data.overlay}>
                <strong className="color-heading">THEPULG COM' </strong>
                <span> - {dateParser(data.date, 'us-US')}</span>
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>{data.title}</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>{data.title}</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    {(ref) => <>
                        {data.description.map((desc, i) => (   
                            <p className="mt-20" key={i} ref={ref}>
                                {t(desc)}
                            </p>
                        ))}
                        <ul className="mt-20 color-heading">
                            <li ref={ref}>{t("Art Direction")} : {data.info.direction}</li>
                            {data.info?.design && <li className="mt-1" ref={ref}>{t("Web Design")} : {data.info?.design}</li>}
                            {data.info?.music && <li className="mt-1" ref={ref}>{t("Musique")} : {data.info?.music}</li>}
                            {data.info?.photography && <li className="mt-1" ref={ref}>{t("Photographie")} : {data.info?.photography}</li>}
                            <li className="mt-1" ref={ref}>{t("Client")} : {data.info.client}</li>
                        </ul>

                    </>}
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}


            {/*Start Gallery List*/}
            <BoxGallery className="section-margin" col={3} colMobile={1} colGap={0} rowGap={0}
                images={data.images.map((image) => (
                    {src: image, caption: data.title}
                ))}
            />
            {/*End Gallery List*/}

            {/*Start Box Info With Image*/}
            {/* <BoxImageVertical src="/assets/img/project/project2/2.jpg" className="section-margin" overlay={4}>
                <FadeUpTrigger>
                    {(ref) => <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
                        <TitleCover>Droow</TitleCover>
                        <h2 className='title-section border-line-left' ref={ref}>IT STARTS WITH US.</h2>
                        <h6 ref={ref}>
                            We set THE blue and gold standard, emblazoned it with a bear, and held it high. Then we
                            watched
                            our passion spread across the state.n
                        </h6>
                        <p ref={ref}>
                            Challenging the status quo, driving forward, never backing down. The future of intelligence.
                            The
                            future of excellence. The future of defiance, innovation, and sport. This is where it all
                            begins.n
                        </p>
                        <div className="button-box" ref={ref}>
                            <ButtonDefault text="launch" icon={faAngleRight} href="#0"/>
                        </div>

                    </DsnGrid>}
                </FadeUpTrigger>
            </BoxImageVertical> */}
            {/*End  Box Info With Image*/}


            {/* <FJustifiedGallery rowHeight={300} className="section-margin"
                images={[
                    {src: "/assets/img/project/project2/6.jpg", caption: "CAPTION #1"},
                    {src: "/assets/img/project/project2/7.jpg", caption: "CAPTION #2"},
                    {src: "/assets/img/project/project2/8.jpg", caption: "CAPTION #3"},
                    {src: "/assets/img/project/project2/9.jpg", caption: "CAPTION #4"},
                    {src: "/assets/img/project/project2/10.jpg", caption: "CAPTION #5"},
                    {src: "/assets/img/project/project2/11.jpg", caption: "CAPTION #6"},
                    {src: "/assets/img/project/project2/12.jpg", caption: "CAPTION #7"},
                ]}
            /> */}


            <NextProject heroContent={nextData} overlay={nextData.overlay}/>

            <Footer />
        </React.Fragment>
    );
}


export default TimeTagWatch;