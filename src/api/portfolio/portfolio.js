import SleepWalker from "../../views/portfolio/SleepWalker";
import ToastReel from "../../views/portfolio/ToastReel";
import UnderArmour from "../../views/portfolio/UnderArmour"
import TimeTagWatch from "../../views/portfolio/TimeTagWatch";
import ReStyling from "../../views/portfolio/ReStyling";
import WhatIfGold from "../../views/portfolio/WhatIfGold";
import NileKabutha from "../../views/portfolio/NileKabutha";
import NovaraConic from "../../views/portfolio/NovaraConic";

export const data = [
    {
        id: 1,
        title: "Une équipe de passionné(e)s",
        slug: 'harmony',
        src: '/assets/img/project/Wifor/Bild-28.jpg',
        srcSlider: '/assets/img/project/Wifor/Bild-28.jpg',
        category: ['Photographie'],
        description: "La réussite dans nos projets vient tout d'abord de la solidarité et de l'harmonie entre les membres de la team",
        overlay: 6,

        component: (props) => <UnderArmour {...props}/>
    },
    {
        id: 2,
        title: "Un matériel de pointe",
        slug: 'top-material',
        category: ['Photographie'],
        description: 'Nous ne saurons comment accomplir nos differentes tâches journalières sans un materiel de pointe',
        src: '/assets/img/pexels.jpg',
        srcSlider: '/assets/img/pexels.jpg',
        overlay: 6,
        component: (props) => <TimeTagWatch {...props} />
    },
    {
        id: 3,
        title: "Des Photos de qualité",
        slug: 'photography',
        src: '/assets/img/portfolio9.jpg',
        srcSlider: '/assets/img/portfolio9.jpg',
        category: ['Photographie'],
        description: "L'art de reconquerir la photo",
        overlay: 6,
        component: (props) => <ReStyling {...props}/>
    },
    {
        id: 4,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Video'],
        src: 'https://youtu.be/aDTVWlWItsc?si=DPqEYZW7CeWWSwVQ',
        video: {
            poster: '/assets/img/project/Wifor/Bild-78.jpg',
            loop: true
        },
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 5,
        title: "Une production audiovisuelle assurée",
        slug: 'photography',
        src: '/assets/img/project/Wifor/Bild-79.jpg',
        srcSlider: '/assets/img/project/Wifor/Bild-79.jpg',
        category: ['Photographie'],
        description: "Conserver le naturel, pour donner un autre aspect à la photographie",
        overlay: 6,
        component: (props) => <WhatIfGold {...props}/>
    },
    {
        id: 6,
        title: "Une stratégie de communication efficace",
        slug: 'photography',
        src: '/assets/img/project/Darmstadt/Bild-5.jpg',
        srcSlider: '/assets/img/project/Darmstadt/Bild-5.jpg',
        category: ['Photographie'],
        description: "Définir une stratégie marketing , est une solution clée pour les études sur le marché",
        overlay: 6,
        component: (props) => <WhatIfGold {...props}/>
    },
    {
        id: 7,
        title: "Un Design adapté",
        slug: 'mockup',
        category: ["Graphisme"],
        src: '/assets/img/mockup-presentation.jpg',
        srcSlider: '/assets/img/mockup-presentation.jpg',
        description: "Nous definissons une couverture idéale pour vos présentations",
        overlay: 6,
        component: (props) => <NileKabutha {...props}/>
    },
    {
        id: 8,
        title: "Conseils stratégiques",
        slug: 'photography',
        src: '/assets/img/project/Wifor/Bild-98.jpg',
        srcSlider: '/assets/img/project/Wifor/Bild-98.jpg',
        category: ['Photographie'],
        description: "Avec des experts dans chaque domaines d'activités nous ne cessons de mettre en oeuvre des stratégies imbattables",
        overlay: 6,
        component: (props) => <NovaraConic {...props}/>
    },
    {
        id: 9,
        title: "Des designs adaptés pour vos sites",
        slug: 'web',
        category: ['Web'],
        src: '/assets/img/mockup-sites.jpg',
        srcSlider: '/assets/img/mockup-sites.jpg',
        description: 'Nous intervenons également sur la production de vos sites web',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 10,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio1.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 11,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio2.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 12,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio3.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 13,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio4.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 14,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio5.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 15,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio6.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 16,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio7.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 17,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio8.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 18,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio9.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 19,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio10.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 20,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio11.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 21,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio12.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 22,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio13.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 23,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio14.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 24,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio15.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 25,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio16.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 26,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Photographie'],
        src: '/assets/img/portfolio17.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 27,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Graphisme'],
        src: '/assets/img/mockup2.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 28,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Graphisme'],
        src: '/assets/img/mockup3.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 29,
        title: "Des Photos de qualité",
        slug: 'picture',
        category: ['Graphisme'],
        src: '/assets/img/mockup4.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 30,
        title: "Mockup",
        slug: 'branding',
        category: ['Graphisme'],
        src: '/assets/img/mockup5.jpg',
        srcSlider: '/assets/img/direction.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 31,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Graphisme'],
        src: '/assets/img/roll-up.jpg',
        srcSlider: '/assets/img/roll-up.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 32,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Graphisme'],
        src: '/assets/img/project/Cake By Maman2noemi/Cakebymaman2noemi_Mock-up-1.jpg',
        srcSlider: '/assets/img/project/Cake By Maman2noemi/Cakebymaman2noemi_Mock-up-1.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 33,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Graphisme'],
        src: '/assets/img/project/Cake By Maman2noemi/Cakebymaman2noemi_Mock-up-2.jpg',
        srcSlider: '/assets/img/project/Cake By Maman2noemi/Cakebymaman2noemi_Mock-up-2.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 34,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Graphisme'],
        src: '/assets/img/project/Emd Prod/EMD.jpg',
        srcSlider: '/assets/img/project/Emd Prod/EMD.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 35,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Graphisme'],
        src: '/assets/img/project/Emd Prod/EMD-logo.jpg',
        srcSlider: '/assets/img/project/Emd Prod/EMD-logo.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 36,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Graphisme'],
        src: '/assets/img/project/Emd Prod/serges-beynaud-2visual.jpg',
        srcSlider: '/assets/img/project/Emd Prod/serges-beynaud-2visual.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 37,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Graphisme'],
        src: '/assets/img/project/Emd Prod/serges-beynaud-visual.jpg',
        srcSlider: '/assets/img/project/Emd Prod/serges-beynaud-visual.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 38,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Graphisme'],
        src: '/assets/img/project/Emd Prod/Toofan-visual.jpg',
        srcSlider: '/assets/img/project/Emd Prod/Toofan-visual.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 39,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Graphisme'],
        src: '/assets/img/project/Epouse Eden/invitation-card.jpg',
        srcSlider: '/assets/img/project/Epouse Eden/invitation-card.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 40,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Graphisme'],
        src: '/assets/img/project/Epouse Eden/Free_MacBook_Pro_2.jpg',
        srcSlider: '/assets/img/project/Epouse Eden/Free_MacBook_Pro_2.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 41,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Web'],
        src: '/assets/img/project/Esk Translations UG/esk-translation-Mock-up.jpg',
        srcSlider: '/assets/img/project/Esk Translations UG/esk-translation-Mock-up.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 42,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Graphisme'],
        src: '/assets/img/project/Madhi/Madhi-logo_.jpg',
        srcSlider: '/assets/img/project/Madhi/Madhi-logo_.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 43,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Graphisme'],
        src: '/assets/img/project/NHPC/Agenda-NHPC.jpg',
        srcSlider: '/assets/img/project/NHPC/Agenda-NHPC.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 44,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Graphisme'],
        src: '/assets/img/project/NHPC/Agenda-NHPC-2.jpg',
        srcSlider: '/assets/img/project/NHPC/Agenda-NHPC-2.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 45,
        title: "Des designs adaptés",
        slug: 'brand',
        category: ['Web'],
        src: '/assets/img/project/Pulse Live/pulselive-Website.jpg',
        srcSlider: '/assets/img/project/Pulse Live/pulselive-Website.jpg',
        description: 'Nous intervenons également sur la production des roll-up pour vos conférences',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 47,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Video'],
        src: '/assets/video/Pulse live animation logo.mp4',
        video: {
            poster: '/assets/img/logo/PULSELIVE.png',
            loop: true
        },
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 48,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Video'],
        src: '/assets/video/PULSE LIVE_Website presentation-.mp4',
        video: {
            poster: '/assets/img/logo/PULSELIVE.png',
            loop: true
        },
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 49,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Video'],
        src: 'https://youtu.be/Y9mjsPi7UDk',
        video: {
            poster: '/assets/img/logo/logo-150x150.png',
            loop: true
        },
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 50,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Video'],
        src: 'https://youtu.be/SeoF3Ei1E_E',
        video: {
            poster: '/assets/img/logo/epouse eden - c2023 logo.png',
            loop: true
        },
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 51,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Photographie'],
        src: '/assets/img/project/Cake By Maman2noemi/412_400 2.jpg',
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 52,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Photographie'],
        src: "/assets/img/project/Cake By Maman2noemi/412_400.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 53,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Photographie'],
        src: "/assets/img/project/Cake By Maman2noemi/633_950 3.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 54,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Photographie'],
        src: "/assets/img/project/Cake By Maman2noemi/Cupcake-3.png",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 55,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Photographie'],
        src: "/assets/img/project/Cake By Maman2noemi/gallery2.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 56,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Photographie'],
        src: "/assets/img/project/Cake By Maman2noemi/gallery6.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 57,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Photographie'],
        src: "/assets/img/project/Cake By Maman2noemi/gallery7.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 58,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Photographie'],
        src: "/assets/img/project/Cake By Maman2noemi/gallery9.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 59,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Photographie'],
        src: "/assets/img/project/Cake By Maman2noemi/service-3.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 60,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Graphisme'],
        src: "/assets/img/project/NHPC/CALENDIER-MURAL-02-NHPC-2024-SIMULATION.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 61,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Graphisme'],
        src: "/assets/img/project/NHPC/CALENDRIER-CHEVALET-01-NHPC-2024-.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 62,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Graphisme'],
        src: "/assets/img/project/NHPC/CALENDRIER-CHEVALET-02-NHPC-2024-.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <ToastReel {...props}/>
    },
    {
        id: 63,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Graphisme'],
        src: "/assets/img/project/NHPC/CALENDRIER-MURAL-01-NHPC-2024-SIMULATION.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 64,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Web'],
        src: "/assets/img/project/THEPLUG WEDDING/THEPLUG-Wedding-Mock-up.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 65,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Photographie'],
        src: "/assets/img/project/THEPLUG WEDDING/3.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 66,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Web'],
        src: "/assets/img/project/Epideaa/EPIDEAA-website.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    }, 
    {
        id: 67,
        title: "Des Vidéos publicitaires de qualité",
        slug: 'Spot',
        category: ['Web'],
        src: "/assets/img/project/Cake By Maman2noemi/Cake-by-maman2noemi-website.jpg",
        description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
        overlay: 6,
        component: (props) => <SleepWalker {...props}/>
    }
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "id") => {
    return data.find(item => {
        if (item[whereName] === value) return item;
        return null;
    });
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};