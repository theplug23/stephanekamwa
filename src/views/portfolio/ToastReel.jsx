import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

import {Container} from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import {Helmet} from "react-helmet";
import BoxGallery from '../../components/box-gallery/BoxGallery';
import { useTranslation } from 'react-i18next';
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";
import Footer from '../../components/footer/Footer';


const ToastReel = ({data}) => {

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
                textButton={t("Voir le site")}
                href={data.href}
                overlay={data.overlay}
            >
                <strong className="color-heading">THEPLUG COM'</strong> <span> - {data.date}</span>
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
                        {/* {data.description.map((desc, i) => (
                            desc.isTitle ? <h5 className='mt-20'>{t(desc.text)}</h5> 
                            : <p key={i} className='mt-20'>{t(desc)}</p>
                        ))} */}
                        <div dangerouslySetInnerHTML={{ __html: data.content}}></div>
                        
                        <ul className="mt-50 color-heading">
                            <li ref={ref}>{t("Art Direction")} : {data.info.direction}</li>
                            {data.info?.design && <li className="mt-1" ref={ref}>{t("Web Design")} : {data.info?.design}</li>}
                            {data.info?.music && <li className="mt-1" ref={ref}>{t("Musique")} : {data.info?.music}</li>}
                            {data.info?.photographie && <li className="mt-1" ref={ref}>{t("Photographie")} : {data.info?.photographie}</li>}
                            {data.info?.videographie && <li className="mt-1" ref={ref}>{t("Videographie")} : {data.info?.videographie}</li>}
                            <li className="mt-1" ref={ref}>{t("Client")} : {data.info.client}</li>
                        </ul>
                    </>}
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            {/*Start Parallax Image*/}
                {/* <ParallaxImage src="/assets/img/project/project4/2.jpg" caption="Caption #1" triggerHook="top" animationActive={false}/>
                <ParallaxImage src="/assets/img/project/project4/3.jpg" caption="Caption #2" triggerHook="top" animationActive={false}/>
                <ParallaxImage src="/assets/img/project/project4/4.jpg" caption="Caption #3" triggerHook="top" animationActive={false}/>
                <ParallaxImage src="/assets/img/project/project4/5.jpg" caption="Caption #4" triggerHook="top" animationActive={false}/>
                <ParallaxImage className="mb-section" src="/assets/img/project/project4/6.jpg" caption="Caption #5" triggerHook="top" animationActive={false} parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/> */}
            {/*End Parallax Image*/}

            {/*Start Gallery List*/}
            {
                data.images && (
                    <BoxGallery className="section-margin" col={3} 
                        colMobile={1} colGap={0} rowGap={0}
                        images={data.images.map((image) => (
                            {src: image, caption: data.title}
                        ))}
                        title_mini={data.title_mini}
                        bgVid={data.bgVid}
                    />
                )
            }
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
                            our passion spread across the state
                        </h6>
                        <p ref={ref}>
                            Challenging the status quo, driving forward, never backing down. The future of intelligence.
                            The
                            future of excellence. The future of defiance, innovation, and sport. This is where it all
                            begins
                        </p>
                        <div className="button-box" ref={ref}>
                            <ButtonDefault text="launch" icon={faAngleRight} href="#0"/>
                        </div>

                    </DsnGrid>}
                </FadeUpTrigger>
            </BoxImageVertical> */}
            {/*End  Box Info With Image*/}

            {nextData && <NextProject heroContent={nextData} overlay={nextData.overlay}/>}

            <Footer />
        </React.Fragment>
    );
}

export default ToastReel;
