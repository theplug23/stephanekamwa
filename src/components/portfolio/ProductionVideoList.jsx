import React, { useState, useEffect, useRef } from 'react'
import ProductionVideoItem from './ProductionVideoItem';
import { dsnCN } from '../../hooks/helper';
import DsnGrid, { DsnGridProps } from '../DsnGrid';
import Isotope from "isotope-layout";
import { useTranslation } from "react-i18next";

export default function ProductionVideoList({ className, ...restProps }: DsnGridProps) {
    const videos = [
        {
            title: "THEPLUG Reel 2023",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/Y9mjsPi7UDk",
            description: "Video montage representing a compilation of all the video projects produced by Theplug 2023",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 9.jpg',
                loop: true
            }
        },
        
        {
            title: "WifOR Institute GmbH (Darmstadt)",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/SzNp8ED68uM",
            description: "Photo and video coverage of the 15th anniversary of WifOR Institute",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 2.jpg',
                loop: true
            }
        },
        {
            title: "NULLDREI-Documentary",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/WOAzN_oYPG0",
            description: "Production of a documentary by the artist NULLDREI sponsored by the brand Pegasus PRO",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 5.jpg',
                loop: true
            }
        },
        {
            title: "ImageFilm - SoPlus Line GmbH",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/YgT_nYhYXEE",
            description: "Production of the advertising video for SoPlus Line GmbH",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 4.jpg',
                loop: true
            }
        },
        {
            title: "Behinderten und Rehabilitations Sportverband BERLIN Imagefilm",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/guefium_CSE",
            description: "Erleben Sie das engagierte Wirken des BRSV Berlin in der Förderung des Sports für Menschen mit Behinderung. Dieser Imagefilm zeigt inspirierende Geschichten von Athleten, die Hindernisse überwinden, die Dynamik von Wettbewerben und die Bedeutung sozialer Inklusion durch Sport. Der BRSV Berlin ist mehr als ein Verein – er ist ein Symbol für Resilienz und Hoffnung, das allen die Möglichkeit gibt, sich körperlich und mental zu entfalten. Begleiten Sie uns auf einer Reise, bei der jede Bewegung zählt und jeder Sieg geteilt wird.",
            overlay: 1,
            video: {
                poster: '/assets/img/project/vignette_Behinderten.png',
                loop: true
            }
        },
        {
            title: "Stromberg Finanz Consulting",
            slug: 'Spot',
            category: ['Video'],
            src: "https://www.youtube.com/watch?v=PirRprAka-U&t=143s",
            description: "",
            overlay: 1,
            video: {
                poster: '/assets/img/logo/Vignette_stromberg.png',
                loop: true
            }
        },
        {
            title: "Discover the Maldives with Epideaa",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/x-u_3hwtSww",
            description: "Creation of a concept and brand identity. Photography and videography",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 8.jpg',
                loop: true
            }
        },
        {
            title: "Theplug Communication 2023 advertising spot",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/aDTVWlWItsc?si=-tgs9C1BdETHLxMo",
            description: "Video montage of Theplug advertising spot",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette.jpg',
                loop: true
            }
        },
        {
            title: "Finex advertising spot",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/Gr5jwbfhV6E",
            description: "Production of an advertising spot for the Gabonese petroleum products transport company Finex",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 3.jpg',
                loop: true
            }
        },
        {
            title: "Pregnancy Announcement video",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/rzEP767qF-E",
            description: 'Pregnancy Announcement video by THEPLUG-WEDDING.COM in Darmstadt und Odenwald.',
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 7.jpg',
                loop: true
            }
        },
        {
            title: "8 MARCH CAMPAIGN",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/cEqwN3h95Jw",
            description: "Interview with a young student on International Women's Day 2024",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 6.jpg',
                loop: true
            }
        },
        {
            title: "Teaser - SAB Afrique 2024",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/D_d84zy4iSU?si=-i6KCPamVfjS6B0E",
            description: "",
            overlay: 1,
            video: {
                poster: '/assets/img/logo/Vignette_sab.jpg',
                loop: true
            }
        },
        {
            title: "Interview - Mme Adeline SEDE KAMGA",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/4b3pSgoF0VA?si=7TWRgiXA9W4nD8IZ",
            description: "",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette_fabafrik.jpg',
                loop: true
            }
        },
        {
            title: "Interview - Mme Mireille Flore DEFO FOTSO",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/l0A6l1a_efM?si=qq2jaorMowJJRZcO",
            description: "",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette_adeline.jpg',
                loop: true
            }
        },
        {
            title: "Interview - M. Joël KAMSU",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/kqYtcXOCIGA?si=OADKWPbioGXvv9YH",
            description: "",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette_yengafrica.jpg',
                loop: true
            }
        },
        {
            title: "Interview - M. Patrick Kofana",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/ztYQJ8YI5OU?si=TVmQV0VFbkTi-ujM",
            description: "",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette_tara.jpg',
                loop: true
            }
        },
        {
            title: "Interview - Mme Julia Samantha ÉDIMA",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/NddQuO2P3eA?si=4tC9VOR_PLtbU1mD",
            description: "",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette_miss.jpg',
                loop: true
            }
        },
        {
            title: "Interview - Maman KAMITE",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/O9kffKany6s?si=fJZiAbpc487tXj4K",
            description: "",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette_mmh.jpg',
                loop: true
            }
        },
        {
            title: "Interview - Mme ANGE MBAYEN",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/rEBG2Bw1OY0?si=LmFwNrXFcQ-jynfC",
            description: "",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette_bold.jpg',
                loop: true
            }
        },
        {
            title: "Interview - M. NDOCK BIDI",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/V049M03tjbc?si=pnK0vv6gOn93DJN1",
            description: "",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette_ndockbidi.jpg',
                loop: true
            }
        }
    ]
    const {t} = useTranslation("common")
    const iso = useRef();
    const [filter, setFilter] = useState("*");
    const refIsotope = useRef();
    const category = new Set();
    videos.map((p) => {
    return typeof p.category === "object"
        ? p.category.map((i) => category.add(i))
        : category.add(p.category);
    });

    useEffect(() => {
        iso.current = new Isotope(refIsotope.current, {
            itemSelector: ".portfolio-item",
        });

        return () => {
            iso.current.destroy();
        };
    });
    
    useEffect(() => {
        iso.current.arrange({ filter: filter });
    }, [filter]);

    return (
        <section className={dsnCN("dsn-portfolio port-classic", className)}>
            <DsnGrid {...restProps} isGallery ref={refIsotope}>
                
                {videos.map((item, index) => (
                    <ProductionVideoItem 
                        className={
                            typeof item.category === "object"
                            ? item.category.join(" ").toLowerCase()
                            : item.category.toLowerCase()
                        }
                        key={index}
                        portoDetails={item}
                        textButton={t("Voir Plus")}
                    />
                ))}
            </DsnGrid>
        </section>
    )
}