import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet';
import HeaderHalf from '../../components/header/HeaderHalf';
import { Container, Row } from 'react-bootstrap';
import TitleCover from '../../components/heading/title-cover/TitleCover';
import TextTrigger from '../../animation/TextTrigger';
import FadeUpTrigger from '../../animation/FadeUpTrigger';
import NextProject from '../../components/next/NextProject';
import { useTranslation } from 'react-i18next';
import BoxGallery from '../../components/box-gallery/BoxGallery';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner'
import i18n from '../../i18n';

function ProjectDetails(props) {
    const {slug} = useParams();
    const [nextData, setNextData] = useState({})
    const {t} = useTranslation("common")
    const [project, setProject] = useState({})
    const [projectFiltered, setProjectFiltered] = useState({})
    const [descriptions, setDescriptions] = useState([])
    const [info, setInfo] = useState({})
    const [video, setVideo] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.comtheplug.com/api/portfolio/' + slug);
                const projectData = response.data.project;
                setDescriptions(response.data.description)
    
                // Mettre à jour l'état du projet et des informations
                project.video = JSON.parse(projectData.video)
                setProject(projectData);
                setInfo(JSON.parse(projectData.info));
                setVideo(JSON.parse(projectData.video))
               
                // Enregistrer l'événement une fois que les données sont chargées
                ReactGA.event({
                    hitType: 'pageview',
                    page: window.location.pathname,
                    title: `PROJET ${projectData.title} PAGE`
                });

                // Récupérer les données du projet suivant
                const id = projectData.id + 1
                const nextResponse = await axios.get('https://api.comtheplug.com/api/portfolios/' + id);
                const nextProject = nextResponse.data.project;
                setNextData(nextProject)
                console.log(nextProject)
                setIsLoading(false);
            } catch (error) {
                console.error('Une erreur s\'est produite lors du chargement des données du projet:', error);
                // Gérer les erreurs de chargement des données ici
            }
        };
    
        // Appeler la fonction fetchData dans useEffect avec slug comme dépendance
        fetchData()
    }, [slug]);
    
    useEffect(() => {
        if (project) {
            const data = descriptions.filter(p => p.langue === i18n.language)
            setProjectFiltered(data[0])
        }
    }, [i18n.language, project])
    
    if(!project)
        return <h1>{slug}</h1>

    return (
        <React.Fragment>
            {isLoading ?
                <>
                    <Helmet>
                        <title>THEPLUG COM'</title>
                        <meta name="description" content="" />
                    </Helmet>
                    
                    <Container className="section-margin">
                        <Row>
                            <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="color-ring-loading"
                                wrapperStyle={{}}
                                wrapperClass="color-ring-wrapper"
                                colors={['#B58E25', '#FFFFFF', '#B99226', '#FFFFFF', '#000000']}
                            />
                        </Row>
                    </Container>
                </> :
                <>
                    <Helmet>
                        <title>{t(project?.title) + " - THEPLUG COM'"}</title>
                        <meta name="description" content={t(project?.title)} />
                    </Helmet>

                    <HeaderHalf heroContent={project}
                        parallax={{yPercent: 30, scale: 1.1}}
                        textButton={t("Voir le site")}
                        href={project?.href}
                        overlay={project?.overlay}
                        categories={project?.categories}
                        video={video}
                    >
                        <strong className="color-heading">THEPLUG COM'</strong> <span> - {project?.date}</span>
                    </HeaderHalf>

                    <Container className="section-margin">
                        <TitleCover>{t(project?.title)}</TitleCover>
                        <TextTrigger duration={0.8} stagger={0.1}>
                            {(ref) => <h2 className="title-section" ref={ref}>{t(project?.title)}</h2>}
                        </TextTrigger>
                        <FadeUpTrigger>
                            {(ref) => <>
                                <div style={{marginTop: 50}} dangerouslySetInnerHTML={{ __html: projectFiltered?.text}}></div>
                                
                                <ul className="mt-50 color-heading">
                                    {info?.direct && <li ref={ref}>{t("Art Direction")} : {info?.direction}</li>}
                                    {info?.design && <li className="mt-1" ref={ref}>{t("Web Design")} : {info?.design}</li>}
                                    {info?.music && <li className="mt-1" ref={ref}>{t("Musique")} : {info?.music}</li>}
                                    {info?.photographie && <li className="mt-1" ref={ref}>{t("Photographie")} : {info?.photographie}</li>}
                                    {info?.videographie && <li className="mt-1" ref={ref}>{t("Videographie")} : {info?.videographie}</li>}
                                    {info?.client && <li className="mt-1" ref={ref}>{t("Client")} : {info?.client}</li>}
                                </ul>
                            </>}
                        </FadeUpTrigger>
                    </Container>
                    
                    {
                        project.images && (
                            <BoxGallery className="section-margin" col={3} 
                                colMobile={1} colGap={0} rowGap={0}
                                images={project.images.map((image) => (
                                    {src: image.src, caption: project?.title, bgImg: image.bgImg}
                                ))}
                                title_mini={project?.title_mini}
                                bgVid={project?.bgVid}
                            />
                        )
                    }

                    {nextData && <NextProject heroContent={nextData} overlay={nextData.overlay}/>}
                </>
            }

            <Footer />
        </React.Fragment>
    )
}

export default ProjectDetails;