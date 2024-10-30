import React from 'react'

import './style.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import DsnGrid, {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const BrandDetails = [
    {
        src: "/assets/img/logo/SV_Darmstadt_98_Logo.png",
        title: "SV Darmstadt 98",
        href: "https://www.sv98.de/",
        linkText: "www.sv98.de",
    },
    {
        src: "/assets/img/project/WithOrWithout/With or without logo.jpg",
        title: "Podcast WithOrWithout",
        href: "https://www.comtheplug.com/portfolio/Braydon%20Manu:%20Der%20Profifu%C3%9Fballer,%20der%20Talent%20auf%20dem%20Spielfeld%20und%20den%20Glauben%20an%20Christus%20vereint",
        linkText: "WithOrWithout",
    },
    {
        src: "/assets/img/logo/EPIDEAA LOGO OFFICIAL_PP.jpg",
        title: "EPIDEAA",
        href: "https://epideaa.com/",
        linkText: "www.epideaa.com",
    },
    {
        src: "/assets/img/logo/Logo-SoPlus-Dunkel.png",
        title: "SoPlus",
        href: "https://soplusline.com/",
        linkText: "www.soplusline.com",
    },
    {
        src: "/assets/img/logo/Wifor-Logo.png",
        title: "Wifor",
        href: "https://www.wifor.com/en/",
        linkText: "www.wifor.com/en/",
    },
    {
        src: "/assets/img/logo/Logo NHPC - PNG.png",
        title: "NHPC",
        href: "https://nhpc.org/",
        linkText: "www.nhpc.org",
    },
    {
        src: "/assets/img/logo/LOGO WEDDING-NOIR.png",
        title: "THEPLUG WEDDING",
        href: "https://theplug-wedding.com/",
        linkText: "www.theplug-wedding.com",
    },
    {
        src: "/assets/img/logo/cakebynoemi.png",
        title: "MAMAN2NOEMI",
        href: "https://www.maman2noemi.com/",
        linkText: "www.maman2noemi.com",
    },
    {
        src: "/assets/img/logo/BYBIT.png",
        title: "EBONY EVENTS",
        href: "http://ebony-event.com/",
        linkText: "www.ebony-event.com",
    },
    {
        src: "/assets/img/logo/UNITED-AFRICAN.png",
        title: "MB-CREATION",
        href: "http://www.mb-creation.com",
        linkText: "www.mb-creation.com",
    },
    {
        src: "/assets/img/logo/PULSELIVE.png",
        title: "PULSE LIVE",
        href: "https://pulse-live.de/",
        linkText: "www.pulse-live.de",
    },
    {
        src: "/assets/img/logo/EsK_Translations.png",
        title: "ESK-TRANSLATIONS",
        href: "https://esk-translations.com/",
        linkText: "www.esk-translations.com",
    },
    {
        src: "/assets/img/logo/EMD-logo.png",
        title: "EMD PRODUCTION",
        href: "https://google.com/",
        linkText: "www.google.com",
    },
    {
        src: "/assets/img/logo/Madhi-logo.png",
        title: "MADHI",
        href: "https://google.com/",
        linkText: "www.google.com",
    },
    {
        src: "/assets/img/logo/epouse eden - c2023 logo.png",
        title: "EPOUSE EDEN",
        href: "https://google.com/",
        linkText: "www.google.com",
    },
    {
        src: "/assets/img/logo/ALVI LOGO.png",
        title: "ALVI 7 HOTEL",
        href: "https://alvi7hotel.com/",
        linkText: "www.alvi7hotel.com",
    },
    {
        src: "/assets/img/logo/DFIT LOGO.png",
        title: "D-FIT DELIVERY",
        href: "https://www.instagram.com/d_fit_delivery/",
        linkText: "instagram.com/d_fit_delivery"
    },
    {
        src: "/assets/img/logo/SAB.png",
        title: "SAB AFRIQUE",
        href: "https://sabafrique.com",
        linkText: "www.sabafrique.com"
    },
    {
        src: "/assets/img/logo/Logo Stromberg.png",
        title: "Stromberg Finanz Consulting",
        href: "https://www.aerzteberatung-duesseldorf.de/",
        linkText: "www.aerzteberatung-duesseldorf.de"
    }
]

function BrandClient({className, ...restProps}: DsnGridProps) {

    return (
        <DsnGrid className={dsnCN('wrapper-brand', className)} {...restProps}>
            {BrandDetails.map(
                (item, index) => {
                    return (
                        <div key={index} className="brand-item background-section">
                            <div className="box-img">
                                <LazyImg src={item.src} alt=""/>
                            </div>
                            <div className="info">
                                <div className="content">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </div>

                                    <div className="entry">
                                        <div>
                                            <h5 className='mb-20'>
                                                {item.title}
                                            </h5>
                                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                                {item.linkText}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
            )}
        </DsnGrid>

    )
}

export default BrandClient
