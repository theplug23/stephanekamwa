import React, { useEffect, useState } from 'react';
import HeaderDefault from "../../components/header/HeaderDefault";
import { Helmet } from 'react-helmet';
import DsnGrid from "../../components/DsnGrid";
import {Container} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import CommentForm from "../../components/blog/CommentForm";
import NextPage from "../../components/next/NextPage";
import Footer from "../../components/footer/Footer";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { dateParserTime } from '../../utils';
import ReactGA from 'react-ga4';


function BlogDetails({props}) {
    const {t} = useTranslation("common")
    const [post, setPost] = useState({})
    const params = useParams()

    useEffect(() => {
        axios.get('https://api.comtheplug.com/api/posts/' + params.title)
        .then(res => {
            setPost(res.data)
            ReactGA.event({
                hitType: 'pageview',
                page: window.location.pathname,
                title: `BLOG : ${res.data.title}`
            })
        })
    }, [])

    const heroContent = {
        title: post.title,
        date: dateParserTime(post.created_at),
        category: ['Uncategorized'],
        src: post.image,
        vues: post.vues
    }

    return (
        <React.Fragment>
            <Helmet>
                <meta property="og:title" content={`${heroContent.title}`} />
                <meta property="og:description" content={`Description du blog : ${heroContent.title}`} />
                <meta property="og:image" content={`${heroContent.src}`} />
                <title>{`${heroContent.title}`} - THEPLUG COM'</title>
            </Helmet>

            <HeaderDefault heroContent={heroContent}
                parallax={{yPercent: 30}}
                overlay={4}
                height="80vh"
            />

            <Container className="single-post post-content mb-section">
                <DsnGrid>

                    <div dangerouslySetInnerHTML={{ __html: post.content}}></div>   

                    {/* <div className="p-relative v-dark-head text-center">
                        <ParallaxImage src={post.image} overlay={4}/>
                        <Container className="v-middle z-index-1">
                            <ButtonPopup href="https://www.youtube.com/live/l8SRn0XX4Oo?si=PtBx7xPFGm97kXJT"/>
                        </Container>
                    </div> */}

                </DsnGrid>
                
                {post.id > 0 && <CommentForm className="mt-section" idPost={post.id} />}

            </Container>

            <NextPage className="section-margin" text={t("Prochain article")} to="/blog/">
                A lovely to London with my family
            </NextPage>
            <Footer/>

        </React.Fragment>


    );
}

export default BlogDetails;