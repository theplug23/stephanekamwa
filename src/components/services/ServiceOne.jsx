import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";
import { useTranslation } from 'react-i18next';

const ServicesDetails = [  
    {
        icon: "assets/img/services/Video editing.jpg",
        title: "PRODUCTION VIDEO",
        description1: "Un projet personnel, un événement, une publicité ou du contenu en ligne",
        description2: "Vidéo optimisée pour TV ou les réseaux sociaux (YouTube, Facebook, Instagram, TikTok, etc.)",
        description3: "Je crée le concept (l'idée, le scénario ou un plan de travail) et nous planifions la production",
        description4: "Tournage (Shooting Vidéo), Montage vidéo & Post-production"
    },
    {
        icon: 'assets/img/services/3.png',
        title: "PHOTOGRAPHIE",
        description1: "Photographie professionnelle (Evénements spéciaux, portraits, produits ou paysages)",
        description2: "Shooting de mode",
        description3: "Photographie d'entreprise (photos professionnelles pour votre site web, vos publications promotionnelles ou votre communication)"
    },
    {
        icon: 'assets/img/services/web devpt.jpg',
        title: "DEVELOPPEMENT WEB",
        description1: "Développement web sur mesure (création de sites web personnalisés : site vitrine, application web complexe ou plateforme e-commerce)",
        description2: "Optimisation et amélioration de sites existants",
        description3: "Développement d'applications web et mobiles",
        description4: "Maintenance et support technique",
    },
    {
        icon: 'assets/img/services/graphic design.jpg',
        title: "GRAPHISME & MOTION DESIGN",
        description1: "Branding",
        description2: "Design d'interfaces utilisateur et d'expérience utilisateur (UI/UX)",
        description3: "Création de supports de communication visuelle (brochures, dépliants, affiches, cartes de visite, baniières publicitaires, etc..",
        description4: "Illustrations et graphiques personnalisés",
        description5: "Conception de logos et d'identité visuelle",
        description6: "Animations (Logos-Textes-Illustrations)"
    },
    {
        icon: 'assets/img/services/1.png',
        title: "SEO MARKETING",
        description1: "Optimisation du classement des moteurs de recherche (optimisation des mots clés, la création de contenu de qualité, l'optimisation technique du site, la création de liens et d'autres stratégies visant à augmenter la visibilité du site et à attirer du trafic organique)",
        description2: "Gestion de la présence en ligne",
        description3: "Analyse des données et suivi des performances"
    },
    {
        icon: 'assets/img/services/1.png',
        title: "SOCIAL MEDIA MARKETING",
        description1: "Gestion des réseaux sociaux tels que Facebook, Instagram, Twitter, LinkedIn, etc.",
        description2: "Stratégies de marketing ciblées ('analyse des données démographiques et des intérêts des utilisateurs, la création de publicités ciblées, la mise en place de campagnes promotionnelles et le suivi des performances pour atteindre les objectifs de marketing)",
        description3: "Mesure des performances et analyse des résultats"
    },
    {
        icon: 'assets/img/services/1.png',
        title: "ÉTUDES MARKETING",
        description1: "Expertise dans l'analyse du discours.",
        description2: "Expertise en méthode qualitative",
        description3: "Conception et mise en oeuvre des stratégies de communication.",
    },
    {
        icon: 'assets/img/services/2.png',
        title: "CONSEILS STRATÉGIQUES",
        description1: "Mise en place de la strategie de communication",
        description2: "Le developpement de votre notoriété",
        description3: "Optimisation de votre image de marque.",
        description4: "Proposition des actions correctives",
    },
    {
        icon: 'assets/img/services/copywriting.jpg',
        title: "COPYWRITING",
        description1: "Copywriting persuasif (Rédaction des textes qui captent l'attention de votre audience et génèrent des résultats tangibles)",
        description2: "Copywriting SEO (combinaison parfaite de textes optimisés pour les moteurs de recherche et de contenu de qualité)",
        description3: "Copywriting créatif"
    },
]

const ServiceOne = ({className, ...restProps}: DsnGridProps) => {
    const {t} = useTranslation("common")
    return (
        <DsnGrid className={dsnCN('dsn-services service-one', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                <div className='service-item' key={index}>
                    <div style={{width: "60px", height:"60px",borderRadius: 100,marginBottom: "25px",margin: "0 auto"}}>
                        <LazyImg src={item.icon} alt={item.title} style={{ borderRadius: '40%' }} />
                    </div>
                    <h5 className='title-block mb-20' style={{color: '#b99226',fontSize: "15px",textAlign:"center"}}>{t(item.title)}</h5>
                    <p className='mt-15 dsn-auto'><i class="fa fa-check-square" aria-hidden="true" style={{color:"#b99226"}}></i> {t(item.description1)}</p>
                    <p className='mt-15 dsn-auto'><i class="fa fa-check-square" aria-hidden="true" style={{color:"#b99226"}}></i> {t(item.description2)}</p>
                    <p className='mt-15 dsn-auto'><i class="fa fa-check-square" aria-hidden="true" style={{color:"#b99226"}}></i> {t(item.description3)}</p>
                    {item.description4 && (<p className='mt-15 dsn-auto'><i class="fa fa-check-square" aria-hidden="true" style={{color:"#b99226"}}></i> {t(item.description4)}</p>)}
                    {item.description5 && (<p className='mt-15 dsn-auto'><i class="fa fa-check-square" aria-hidden="true" style={{color:"#b99226"}}></i> {t(item.description5)}</p>)}
                    {item.description6 && (<p className='mt-15 dsn-auto'><i class="fa fa-check-square" aria-hidden="true" style={{color:"#b99226"}}></i> {t(item.description6)}</p>)}
                </div>
            )}

        </DsnGrid>
    );
};


export default ServiceOne