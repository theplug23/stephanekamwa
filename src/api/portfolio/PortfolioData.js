import UnderArmour from "../../views/portfolio/UnderArmour";
import ToastReel from "../../views/portfolio/ToastReel";

const data = [
    {
        id: 1,
        title: "Podcast WithOrWithout",
        slug: 'Braydon-Manu-Der-Profifußballer-der-Talent-auf-dem-Spielfeld-und-den-Glauben-an-Christus-vereint',
        src: '/assets/video/WITH OR WITHOUT  LOGO ANIMATION.mp4',
        srcSlider: '/assets/img/project/WithOrWithout/With or without logo.jpg',
        category: ['Graphisme', 'Vidéographie', 'Photographie'],
        description: [
            {
                isTitle: true,
                text: "Braydon Manu : Le Footballeur Professionnel Qui Combine Talent sur le Terrain et Foi en Christ"
            },
            "En tant que joueur de football professionnel pour SV Darmstadt 98, Braydon Manu est bien connu pour son talent sur le terrain. Mais ce qui le distingue vraiment, c'est son engagement profond envers sa foi en Christ, une dimension importante de sa vie qui se reflète également dans ses projets hors du terrain. Avec son récent podcast 'With or Without', Manu offre une perspective unique sur la vie d'un athlète de haut niveau et sur la façon dont la foi guide ses choix et ses actions.",
            {
                isTitle: true,
                text: "La Carrière de Braydon Manu : Talent et Dévouement"
            },
            "Né le 28 mars 1997 à Hambourg, en Allemagne, MANU Braydon Marvin est un footballeur professionnel allemand qui évolue habituellement en tant que milieu de terrain au sein du club de Bundesliga Darmstadt 98. Grâce à son talent et à sa détermination, Manu a commencé sa carrière de footballeur en rejoignant le club de Bunseliga Hallescher FC pour la saison 2017-2019. Grâce à son travail acharné et à ses performances exceptionnelles sur le terrain, il a capté l'attention de beaucoup et s'est hissé au sommet de sa carrière. Cela lui vaut une place au SV Darmstadt 98, annoncée pour juin 2019, où il se fera les dents en tant que joueur professionnel. Enfin, en janvier 2021, il rejoint le Hallescher FC sous forme de prêt pour le reste de la saison 2020-2021. Attaché à ses origines, le jeune homme a exprimé sa fierté d'être appelé en équipe nationale senior du Ghana pour défendre les couleurs de son pays natal. Il a assuré sa place dans les matchs de l'équipe nationale pour les éliminatoires de la Coupe du monde 2022.",
            {
                isTitle: true,
                text: "La Foi en Christ : Une Force Motrice"
            },
            "Pour Braydon Manu, sa foi en Christ est au cœur de tout ce qu'il fait. En tant que chrétien dévoué, il trouve la force et l'inspiration dans sa relation avec Dieu, ce qui se reflète dans son comportement sur et en dehors du terrain. Sa foi lui donne une perspective unique sur la vie et le sport, l'aidant à surmonter les défis et à rester concentré sur ses objectifs.",
            {
                isTitle: true,
                text: "Le Podcast 'With or Without' : Une Exploration de la Foi, du Sport et de la Vie"
            },
            "Dans son podcast 'With or Without', Braydon Manu invite ses auditeurs à plonger dans son monde, partageant des réflexions personnelles sur sa foi, son parcours en tant que footballeur professionnel et les défis qu'il a rencontrés en cours de route. Avec des épisodes captivants et des invités spéciaux, le podcast offre une occasion unique d'entendre directement de la part de Manu sur des sujets qui lui tiennent à cœur.",
            {
                isTitle: true,
                text: "La Collaboration Avec Notre Agence : Créativité et Innovation"
            },
            "En tant qu'agence de communication créative, nous avons eu le privilège de collaborer avec Braydon Manu sur son projet de podcast « With or Without ». De la création du logo et de l'identité visuelle à la production des épisodes et aux séances photos, notre équipe a travaillé en étroite collaboration avec Manu pour donner vie à sa vision. Cette collaboration a été une expérience enrichissante, qui nous a permis de combiner nos compétences créatives avec la passion et la détermination de Manu, pour aboutir à un produit final dont nous sommes tous fiers.",
            {
                isTitle: true,
                text: "Inspirer à Travers la Foi et le Sport"
            },
            "Braydon Manu incarne l'idée que la foi et le sport ne sont pas mutuellement exclusifs, mais plutôt complémentaires. Son parcours inspirant sur le terrain et son engagement envers sa foi en Christ en font un modèle pour les athlètes et les fans du monde entier. Avec son podcast 'With or Without' et notre collaboration fructueuse, Manu continue de toucher des vies et d'inspirer les autres à poursuivre leurs rêves, peu importe les obstacles."
        ],
        overlay: 4,
        bgVid: '/assets/img/project/Play icon.png',
        date: "24-04-2024",
        images: [ 
            "/assets/video/WITH OR WITHOUT  LOGO ANIMATION.mp4",
            "/assets/img/project/WithOrWithout/with or without.jpg",
            "/assets/img/project/WithOrWithout/With or without logo.jpg",
            "/assets/img/project/WithOrWithout/with or without 2.jpg",
            "/assets/img/project/WithOrWithout/img-1.jpg",
            "/assets/img/project/WithOrWithout/img-2.jpg",
            "/assets/img/project/WithOrWithout/img-3.jpg",
            "/assets/img/project/WithOrWithout/img-4.jpg",
            "/assets/img/project/WithOrWithout/img-5.jpg",
            "/assets/img/project/WithOrWithout/img-6.jpg",
            "/assets/img/project/WithOrWithout/img-7.jpg",
            "/assets/img/project/WithOrWithout/img-8.jpg",
            "/assets/img/project/WithOrWithout/img-9.jpg",
            "/assets/img/project/WithOrWithout/img-10.jpg",
            "/assets/img/project/WithOrWithout/img-11.jpg",
            "/assets/img/project/WithOrWithout/img-12.jpg",
            "/assets/img/project/WithOrWithout/img-13.jpg",
            "/assets/img/project/WithOrWithout/img-14.jpg"
        ],
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            client: 'Braydon Manu',
            design: "THEPLUG COM'",
            videographie: "Stephane KAMWA"
        },
        video: {
            poster: '/assets/video/WITH OR WITHOUT  LOGO ANIMATION.mp4',
            loop: true
        },
        isvideo: true
    },
    {
        id: 2,
        title: "SV Darmstadt 98",
        slug: 'sv-darmstadt-98',
        src: '/assets/img/logo/SV_Darmstadt_98_Logo.png',
        srcSlider: '/assets/img/logo/SV_Darmstadt_98_Logo.png',
        category: ['Photographie'],
        description: [],
        overlay: 3,
        bgVid: '/assets/img/project/Play icon.png',
        date: "12-05-2024",
        images: [ 
            "https://www.youtube.com/embed/mDK7OuYPnpg?si=_kDK40IhuAFdbrl4",
            "/assets/img/logo/SV_Darmstadt_98_Logo.png",
            "/assets/img/project/Darmstadt/Bild.jpg",
            "/assets/img/project/Darmstadt/Bild-2.jpg",
            "/assets/img/project/Darmstadt/Bild-3.jpg",
            "/assets/img/project/Darmstadt/Bild-4.jpg",
            "/assets/img/project/Darmstadt/Bild-5.jpg",
            "/assets/img/project/Darmstadt/Bild-6.jpg",
            "/assets/img/project/Darmstadt/Bild-7.jpg",
            "/assets/img/project/Darmstadt/Bild-8.jpg",
            "/assets/img/project/Darmstadt/Bild-9.jpg",
            "/assets/img/project/Darmstadt/Bild-10.jpg",
            "/assets/img/project/Darmstadt/Bild-11.jpg",
            "/assets/img/project/Darmstadt/Bild-12.jpg"
        ],
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            client: 'SV Darmstadt 98'
        }
    },
    {
        id: 3,
        title: "WifOR Institute GmbH feiert 15-jähriges Jubiläum im Merck-Stadion am Böllenfalltor(Darmstadt)",
        title_mini: "WifOR Institute GmbH",
        slug: 'WifOR-Institute-GmbH-feiert-15-jähriges-Jubiläum-im-Merck-Stadion-am-Böllenfalltor(Darmstadt)',
        src: '/assets/img/project/Wifor/Bild-2.jpg',
        category: ['Photographie', 'Vidéographie'],
        description: [
            "Die WifOR Institute GmbH aus Darmstadt feierte kürzlich ihr bemerkenswertes 15-jähriges Jubiläum mit einer spektakulären Feier im Fußballstadion der Stadt, dem Merck-Stadion am Böllenfalltor. Als beauftragte Fotografen und Videografen hatten wir das Privileg, diesen besonderen Anlass festzuhalten und möchten Ihnen einen Einblick in dieses unvergessliche Ereignis geben.",
            "Seit 15 Jahren ist die WifOR Institute GmbH ein bedeutender Akteur in der Welt der Forschung und Beratung. Ihr Jubiläum markiert nicht nur eine Zeitspanne kontinuierlichen Wachstums und Erfolgs, sondern auch ein Engagement für Exzellenz und Innovation.",
            "Die Jubiläumsfeier im Merck-Stadion am Böllenfalltor war ein wahrhaft denkwürdiges Ereignis. Von festlicher Dekoration bis hin zu mitreißender Musik und inspirierenden Reden war die Atmosphäre voller Glanz und Glamour. Prominente Persönlichkeiten aus Wirtschaft, Politik und Wissenschaft waren anwesend, um dieses bedeutsame Jubiläum zu feiern.",
            "Als beauftragte Fotografen und Videografen hatten wir die Ehre, jeden besonderen Moment dieses ereignisreichen Tages festzuhalten. Von lachenden Gesichtern bis hin zu bewegenden Reden haben wir unser Bestes gegeben, um die Magie dieser Feier einzufangen. Unsere Aufnahmen spiegeln die Freude, Begeisterung und Bedeutung dieses Jubiläums für die WifOR Institute GmbH wider.",
            "Während wir auf die letzten 15 Jahre zurückblicken, sind wir auch gespannt auf die Zukunft von WifOR. Mit einem starken Fundament aus Erfahrung, Fachwissen und Engagement sind wir zuversichtlich, dass die nächsten 15 Jahre genauso erfolgreich und bedeutungsvoll sein werden wie die vergangenen.",
            "Wir möchten uns bei der WifOR Institute GmbH für die Gelegenheit bedanken, an dieser außergewöhnlichen Feier teilzunehmen und sie festzuhalten. Bleiben Sie dran, um weitere spannende Updates und Einblicke in die Arbeit von WifOR zu erhalten."
        ],
        overlay: 3,
        href: "https://www.wifor.com/de/",
        date: "27-02-2024",
        bgVid: '/assets/img/project/Play icon.png',
        images: [
            'https://youtu.be/SzNp8ED68uM',
            '/assets/img/project/Wifor/Bild.jpg',
            '/assets/img/project/Wifor/Bild-2.jpg',
            '/assets/img/project/Wifor/Bild-3.jpg',
            '/assets/img/project/Wifor/Bild-4.jpg',
            '/assets/img/project/Wifor/Bild-5.jpg',
            '/assets/img/project/Wifor/Bild-6.jpg',
            '/assets/img/project/Wifor/Bild-7.jpg',
            '/assets/img/project/Wifor/Bild-8.jpg',
            '/assets/img/project/Wifor/Bild-9.jpg',
            '/assets/img/project/Wifor/Bild-10.jpg',
            '/assets/img/project/Wifor/Bild-11.jpg',
            '/assets/img/project/Wifor/Bild-12.jpg',
            '/assets/img/project/Wifor/Bild-13.jpg',
            '/assets/img/project/Wifor/Bild-14.jpg',
            '/assets/img/project/Wifor/Bild-15.jpg',
            '/assets/img/project/Wifor/Bild-16.jpg',
            '/assets/img/project/Wifor/Bild-17.jpg',
            '/assets/img/project/Wifor/Bild-18.jpg',
            '/assets/img/project/Wifor/Bild-19.jpg',
            '/assets/img/project/Wifor/Bild-20.jpg',
            '/assets/img/project/Wifor/Bild-21.jpg',
            '/assets/img/project/Wifor/Bild-22.jpg',
            '/assets/img/project/Wifor/Bild-23.jpg',
            '/assets/img/project/Wifor/Bild-24.jpg',
            '/assets/img/project/Wifor/Bild-25.jpg',
            '/assets/img/project/Wifor/Bild-26.jpg',
            '/assets/img/project/Wifor/Bild-27.jpg',
            '/assets/img/project/Wifor/Bild-28.jpg',
            '/assets/img/project/Wifor/Bild-29.jpg',
            '/assets/img/project/Wifor/Bild-30.jpg',
            '/assets/img/project/Wifor/Bild-31.jpg',
            '/assets/img/project/Wifor/Bild-32.jpg',
            '/assets/img/project/Wifor/Bild-33.jpg',
            '/assets/img/project/Wifor/Bild-34.jpg',
            '/assets/img/project/Wifor/Bild-35.jpg',
            '/assets/img/project/Wifor/Bild-36.jpg',
            '/assets/img/project/Wifor/Bild-37.jpg',
            '/assets/img/project/Wifor/Bild-38.jpg',
            '/assets/img/project/Wifor/Bild-39.jpg',
            '/assets/img/project/Wifor/Bild-40.jpg',
            '/assets/img/project/Wifor/Bild-41.jpg',
            '/assets/img/project/Wifor/Bild-42.jpg',
            '/assets/img/project/Wifor/Bild-43.jpg',
            '/assets/img/project/Wifor/Bild-44.jpg',
            '/assets/img/project/Wifor/Bild-45.jpg',
            '/assets/img/project/Wifor/Bild-46.jpg',
            '/assets/img/project/Wifor/Bild-47.jpg',
            '/assets/img/project/Wifor/Bild-48.jpg',
            '/assets/img/project/Wifor/Bild-49.jpg',
            '/assets/img/project/Wifor/Bild-50.jpg',
            '/assets/img/project/Wifor/Bild-51.jpg',
            '/assets/img/project/Wifor/Bild-52.jpg',
            '/assets/img/project/Wifor/Bild-53.jpg',
            '/assets/img/project/Wifor/Bild-54.jpg',
            '/assets/img/project/Wifor/Bild-55.jpg',
            '/assets/img/project/Wifor/Bild-56.jpg',
            '/assets/img/project/Wifor/Bild-57.jpg',
            '/assets/img/project/Wifor/Bild-58.jpg',
            '/assets/img/project/Wifor/Bild-59.jpg',
            '/assets/img/project/Wifor/Bild-60.jpg',
            '/assets/img/project/Wifor/Bild-61.jpg',
            '/assets/img/project/Wifor/Bild-62.jpg',
            '/assets/img/project/Wifor/Bild-63.jpg',
            '/assets/img/project/Wifor/Bild-64.jpg',
            '/assets/img/project/Wifor/Bild-65.jpg',
            '/assets/img/project/Wifor/Bild-66.jpg',
            '/assets/img/project/Wifor/Bild-67.jpg',
            '/assets/img/project/Wifor/Bild-68.jpg',
            '/assets/img/project/Wifor/Bild-69.jpg',
            '/assets/img/project/Wifor/Bild-70.jpg',
            '/assets/img/project/Wifor/Bild-71.jpg',
            '/assets/img/project/Wifor/Bild-72.jpg',
            '/assets/img/project/Wifor/Bild-73.jpg',
            '/assets/img/project/Wifor/Bild-74.jpg',
            '/assets/img/project/Wifor/Bild-75.jpg',
            '/assets/img/project/Wifor/Bild-76.jpg',
            '/assets/img/project/Wifor/Bild-77.jpg',
            '/assets/img/project/Wifor/Bild-78.jpg',
            '/assets/img/project/Wifor/Bild-79.jpg',
            '/assets/img/project/Wifor/Bild-80.jpg',
            '/assets/img/project/Wifor/Bild-81.jpg',
            '/assets/img/project/Wifor/Bild-82.jpg',
            '/assets/img/project/Wifor/Bild-83.jpg',
            '/assets/img/project/Wifor/Bild-84.jpg',
            '/assets/img/project/Wifor/Bild-85.jpg',
            '/assets/img/project/Wifor/Bild-86.jpg',
            '/assets/img/project/Wifor/Bild-87.jpg',
            '/assets/img/project/Wifor/Bild-88.jpg',
            '/assets/img/project/Wifor/Bild-89.jpg',
            '/assets/img/project/Wifor/Bild-90.jpg',
            '/assets/img/project/Wifor/Bild-91.jpg',
            '/assets/img/project/Wifor/Bild-92.jpg',
            '/assets/img/project/Wifor/Bild-93.jpg',
            '/assets/img/project/Wifor/Bild-94.jpg',
            '/assets/img/project/Wifor/Bild-95.jpg',
            '/assets/img/project/Wifor/Bild-96.jpg',
            '/assets/img/project/Wifor/Bild-97.jpg',
            '/assets/img/project/Wifor/Bild-98.jpg',
            '/assets/img/project/Wifor/Bild-99.jpg',
            '/assets/img/project/Wifor/Bild-100.jpg',
            '/assets/img/project/Wifor/Bild-101.jpg',
            '/assets/img/project/Wifor/Bild-102.jpg',
            '/assets/img/project/Wifor/Bild-103.jpg',
            '/assets/img/project/Wifor/Bild-104.jpg',
            '/assets/img/project/Wifor/Bild-105.jpg',
            '/assets/img/project/Wifor/Bild-106.jpg',
            '/assets/img/project/Wifor/Bild-107.jpg',
            '/assets/img/project/Wifor/Bild-108.jpg',
            '/assets/img/project/Wifor/Bild-109.jpg',
            '/assets/img/project/Wifor/Bild-110.jpg',
            '/assets/img/project/Wifor/Bild-111.jpg',
            '/assets/img/project/Wifor/Bild-112.jpg',
            '/assets/img/project/Wifor/Bild-113.jpg',
            '/assets/img/project/Wifor/Bild-114.jpg',
            '/assets/img/project/Wifor/Bild-115.jpg',
            '/assets/img/project/Wifor/Bild-116.jpg',
            '/assets/img/project/Wifor/Bild-117.jpg',
            '/assets/img/project/Wifor/Bild-118.jpg',
            '/assets/img/project/Wifor/Bild-119.jpg',
            '/assets/img/project/Wifor/Bild-120.jpg',
            '/assets/img/project/Wifor/Bild-121.jpg',
            '/assets/img/project/Wifor/Bild-122.jpg',
            '/assets/img/project/Wifor/Bild-123.jpg',
            '/assets/img/project/Wifor/Bild-124.jpg',
            '/assets/img/project/Wifor/Bild-125.jpg',
            '/assets/img/project/Wifor/Bild-126.jpg',
            '/assets/img/project/Wifor/Bild-127.jpg',
            '/assets/img/project/Wifor/Bild-128.jpg',
            '/assets/img/project/Wifor/Bild-129.jpg',
            '/assets/img/project/Wifor/Bild-130.jpg',
            '/assets/img/project/Wifor/Bild-131.jpg',
            '/assets/img/project/Wifor/Bild-132.jpg',
            '/assets/img/project/Wifor/Bild-133.jpg',
            '/assets/img/project/Wifor/Bild-134.jpg',
            '/assets/img/project/Wifor/Bild-135.jpg',
            '/assets/img/project/Wifor/Bild-136.jpg',
            '/assets/img/project/Wifor/Bild-137.jpg',
            '/assets/img/project/Wifor/Bild-138.jpg',
            '/assets/img/project/Wifor/Bild-139.jpg',
            '/assets/img/project/Wifor/Bild-140.jpg',
            '/assets/img/project/Wifor/Bild-141.jpg',
            '/assets/img/project/Wifor/Bild-142.jpg',
            '/assets/img/project/Wifor/Bild-143.jpg',
            '/assets/img/project/Wifor/Bild-144.jpg',
            '/assets/img/project/Wifor/Bild-145.jpg',
            '/assets/img/project/Wifor/Bild-146.jpg',
            '/assets/img/project/Wifor/Bild-147.jpg',
            '/assets/img/project/Wifor/Bild-148.jpg',
            '/assets/img/project/Wifor/Bild-149.jpg',
            '/assets/img/project/Wifor/Bild-150.jpg',
            '/assets/img/project/Wifor/Bild-151.jpg',
            '/assets/img/project/Wifor/Bild-152.jpg',
            '/assets/img/project/Wifor/Bild-153.jpg',
            '/assets/img/project/Wifor/Bild-154.jpg',
            '/assets/img/project/Wifor/Bild-155.jpg',
            '/assets/img/project/Wifor/Bild-156.jpg',
            '/assets/img/project/Wifor/Bild-157.jpg',
            '/assets/img/project/Wifor/Bild-158.jpg',
            '/assets/img/project/Wifor/Bild-159.jpg',
            '/assets/img/project/Wifor/Bild-160.jpg',
            '/assets/img/project/Wifor/Bild-161.jpg',
            '/assets/img/project/Wifor/Bild-162.jpg',
            '/assets/img/project/Wifor/Bild-163.jpg',
            '/assets/img/project/Wifor/Bild-164.jpg',
            '/assets/img/project/Wifor/Bild-165.jpg',
            '/assets/img/project/Wifor/Bild-166.jpg',
            '/assets/img/project/Wifor/Bild-167.jpg',
            '/assets/img/project/Wifor/Bild-168.jpg',
            '/assets/img/project/Wifor/Bild-169.jpg',
            '/assets/img/project/Wifor/Bild-170.jpg',
            '/assets/img/project/Wifor/Bild-171.jpg',
            '/assets/img/project/Wifor/Bild-172.jpg',
            '/assets/img/project/Wifor/Bild-173.jpg',
            '/assets/img/project/Wifor/Bild-174.jpg',
            '/assets/img/project/Wifor/Bild-175.jpg',
            '/assets/img/project/Wifor/Bild-176.jpg',
            '/assets/img/project/Wifor/Bild-177.jpg',
            '/assets/img/project/Wifor/Bild-178.jpg',
            '/assets/img/project/Wifor/Bild-179.jpg',
            '/assets/img/project/Wifor/Bild-180.jpg',
            '/assets/img/project/Wifor/Bild-181.jpg',
            '/assets/img/project/Wifor/Bild-182.jpg',
            '/assets/img/project/Wifor/Bild-183.jpg',
            '/assets/img/project/Wifor/Bild-184.jpg',
            '/assets/img/project/Wifor/Bild-185.jpg',
            '/assets/img/project/Wifor/Bild-186.jpg',
            '/assets/img/project/Wifor/Bild-187.jpg',
            '/assets/img/project/Wifor/Bild-188.jpg',
            '/assets/img/project/Wifor/Bild-189.jpg',
            '/assets/img/project/Wifor/Bild-190.jpg',
            '/assets/img/project/Wifor/Bild-191.jpg',
            '/assets/img/project/Wifor/Bild-192.jpg',
            '/assets/img/project/Wifor/Bild-193.jpg',
            '/assets/img/project/Wifor/Bild-194.jpg',
            '/assets/img/project/Wifor/Bild-195.jpg',
        ],
        isvideo: false,
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            photographie: "Stephane KAMWA",
            videographie: "Stephane KAMWA & Philipp KOPP",
            client: 'WifOR Institute GmbH',
        }
    },
    {
        id: 4,
        title: "SOPLUSLINE",
        slug: 'soplusline',
        src: '/assets/video/FINAL COMP.mp4',
        category: ['Vidéographie'],
        description: [
            "SOPLUSLINE Bunna GmbH est une entreprise moderne basée à Darmstadt en Allemagne dont la mission première est de promouvoir la transition énergétique et d’aider leurs clients à profiter des nombreux avantages de l’énergie solaire.",
            "Nous avons proposé à notre client un logo animé qui évoque la renaissance, la nature, et l'écologie en utilisant des tons de vert. Cela apporte une touche de fraîcheur et d'éclat, renforcée par des petites bulles de lumières blanches qui se transforment en vert, formant ainsi le nom de l'entreprise. Ce logo exprime également la modernité grâce à l'association du vert et du noir.",
            "Nous avons également réalisé une vidéo “Retour Client” qui met en avant les services de l’entreprise et la valeur qu’elle apporte à sa clientèle."
        ],
        overlay: 3,
        href: "https://comtheplug.com",
        date: "09-01-2023",
        video: {
            poster: '/assets/video/FINAL COMP.mp4',
            loop: true
        },
        bgVid: '/assets/img/project/Play icon.png',
        images: [
            'https://youtu.be/OltI1VpYxFs',
            'https://youtu.be/YgT_nYhYXEE'
        ],
        isvideo: true,
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            client: 'SOPLUSLINE'
        }
    },
    {
        id: 5,
        title: "EPIDEAA",
        slug: 'epideaa',
        src: '/assets/video/EPIDEAA animation logo final.mp4',
        srcSlider: "/assets/img/project/Epideaa/EPIDEAA-website.jpg",
        category: ['Web Design', 'Graphisme', 'Photographie', 'Vidéographie'],
        description: [
            "EPIDEAA se présente comme le guide idéal pour des vacances aux Maldives, offrant une exploration des trésors naturels de ce paradis terrestre. En tant qu'expert de renom sur cet archipel, il met à la disposition de sa clientèle des services de conseil, de recommandation et de planification d'activités afin de garantir des expériences mémorables et un séjour inoubliable. Les Maldives occupent actuellement une place de choix parmi les 15 destinations les plus prisées à l'échelle mondiale, bénéficiant d'une notoriété considérable. Face à l'affluence de visiteurs et à la multitude de guides disponibles, il est essentiel pour EPIDEAA de se positionner judicieusement dans ce secteur concurrentiel.",
            "Nous avons eu le privilège d'accompagner notre client, EPIDEAA, dans le processus crucial de renforcement de sa visibilité. Ce projet s'est révélé particulièrement gratifiant, car nous avons été chargés de concevoir l'ensemble des supports de communication de l'entreprise. Notre intervention a débuté par la création de l'identité visuelle, englobant la conception dulogotype et de la charte graphique. Ensuite, nous avons élaboré divers supports tels que des brochures, des flyers, des cartes de visite, des roll-ups, ainsi que l’animation du logo (motion design), la réalisation d'une vidéo promotionnelle de l'entreprise, et enfin, le développement du site internet.",
            "Nous avons cherché à mettre en avant la splendeur naturelle des Maldives, incarnée par ses îles et plages, en utilisant les couleurs bleu et blanc. Ces couleurs évoquent également le calme et la sérénité, des valeurs expérientielles cruciales pour les consommateurs en quête de bien-être lors de leur séjour aux Maldives. Pour exprimer le caractère ensoleillé de ces escapades, nous avons intégré une représentation iconique du soleil autour du 'e' dans le nom d'EPIDEAA. Les lignes sinueuses, telles des vagues intégrées au logo, se retrouvent également sur d'autres supports, associées à des photographies des plages et îles, rappelant ainsi la richesse première des Maldives : leur ressource marine. Ces éléments évoquent le dynamisme et le mouvement. EPIDEAA est à la quête de l'excellence au travers des services offerts, pour créer des moments uniques aux Maldives, que nous avons par des cercles, symbolisant la perfection."
        ],
        skils: "Design du logo, charte graphique, site internet, flyers, Roll-Up, carte de visite, dépliant, stand design",
        overlay: 1,
        href: "https://epideaa.com",
        date: "12-01-2024",
        video: {
            poster: '/assets/video/EPIDEAA animation logo final.mp4',
            loop: true
        },
        bgVid: '/assets/img/project/Play icon.png',
        images: [
            '/assets/video/Epideaa_video.mp4',
            '/assets/video/EPIDEAA animation logo final.mp4',
            '/assets/img/project/Epideaa/EPIDEAA LOGO OFFICIAL_PP.jpg',
            '/assets/img/project/Epideaa/EPIDEAA-website.jpg',
            '/assets/img/project/Epideaa/epideaa 1-100.jpg',
            '/assets/img/project/Epideaa/epideaa 2-100.jpg',
            '/assets/img/project/Epideaa/epideaa_brochure.jpg',
            '/assets/img/project/Epideaa/ROLL-UP-Epideaa.jpg',
            '/assets/img/project/Epideaa/VISIT-CARD-EPIDEAA.jpg',
            '/assets/img/project/Epideaa/graphic-charter-epideaa-mock-up.jpg',
            '/assets/img/project/Epideaa/banner-stand-epideaa.jpg',
            '/assets/img/project/Epideaa/Polo-Shirt-epideaa-Mockup.jpg'
        ],
        isvideo: true,
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            client: 'EPIPHANIE',
            design: "THEPLUG COM'"
        }
    },
    {
        id: 6,
        title: "Cake By Maman2Noemi",
        slug: 'cake-by-maman2noemi',
        src: '/assets/img/project/Cake By Maman2noemi/Cakebymaman2noemi_Mock-up-1.jpg',
        srcSlider: '/assets/img/project/Cake By Maman2noemi/Cake-by-maman2noemi-website.jpg',
        category: ['Graphisme', 'Photographie', 'Web Design'],
        description: [
            "Etablissement de pâtisserie, spécialisé dans le cake design, Cake by Maman2Noemi conçoit pour chacun de ses clients des gâteaux uniques et personnalisés en fonction des préférences, des thèmes et des occasions particulières, avec des ingrédients choisis de façon très précise et méticuleuse pour un goût et une texture unique.",
            "En modernisant son entreprise, notre cliente aspirait à obtenir une identité visuelle et des supports de communication reflétant au mieux ses valeurs fondamentales, à savoir la sobriété, la chaleur et l'élégance. Il était également essentiel de mettre en avant des éléments tels que la gourmandise, la cuisine, la fraîcheur, tout en préservant une touche de modernité qui soit représentative de l'esprit contemporain de sa pâtisserie.",
            "En répondant aux directives de notre cliente, nous lui avons proposé un logo épuré qui met en avant son expertise et la qualité exceptionnelle de ses produits, en utilisant une image de pâtissière dans un cercle. Son site internet reflète parfaitement son identité visuelle, mettant en lumière sa compétence et ses performances à travers des produits dont les photographies ont été réalisées par ThePlug Com', accompagnées d'avis clients."
        ],
        skils: "Design du logo, charte graphique, photographie, site internet",
        overlay: 3,
        bgVid: '/assets/img/project/Play icon.png', 
        date: "11-15-2023",
        href: "https://www.maman2noemi.com",
        images: [
            "/assets/video/Website_Presentation_maman2noemi.mp4",
            "/assets/img/project/Cake By Maman2noemi/Cakebymaman2noemi_Mock-up-1.jpg",
            "/assets/img/project/Cake By Maman2noemi/Cakebymaman2noemi_Mock-up-2.jpg",
            "/assets/img/project/Cake By Maman2noemi/Cake-by-maman2noemi-website.jpg",
            "/assets/img/project/Cake By Maman2noemi/Maman2noemi 1-100.jpg",
            "/assets/img/project/Cake By Maman2noemi/Maman2noemi 2-100.jpg",
            "/assets/img/project/Cake By Maman2noemi/412_400 2.jpg",
            "/assets/img/project/Cake By Maman2noemi/412_400.jpg",
            "/assets/img/project/Cake By Maman2noemi/633_950 3.jpg",
            "/assets/img/project/Cake By Maman2noemi/Cupcake-3.png",
            "/assets/img/project/Cake By Maman2noemi/gallery2.jpg",
            "/assets/img/project/Cake By Maman2noemi/gallery6.jpg",
            "/assets/img/project/Cake By Maman2noemi/gallery7.jpg",
            "/assets/img/project/Cake By Maman2noemi/gallery9.jpg",
            "/assets/img/project/Cake By Maman2noemi/service-3.jpg",
        ],
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            design: "THEPLUG COM'",
            client: 'SYVIANNE',
            photographie: "STEPHANE KAMWA"
        }
    },
    {
        id: 7,
        title: "NHPC",
        slug: 'nhpc',
        category: ["Graphisme"],
        src: '/assets/img/project/NHPC/Agenda-NHPC.jpg',
        srcSlider: '/assets/img/project/NHPC/Agenda-NHPC.jpg',
        description: [
            "NHPC est une Société Anonyme (SA) de droit camerounais ayant pour mission la conception, le financement, et la construction de l'aménagement hydroélectrique de Nachtigal, situé à 70 km au Nord-Est de Yaoundé. En outre, la société est chargée de la réalisation de la ligne de transport d'énergie entre Nachtigal et Nyom 2, situé au Nord de Yaoundé.",
            "Il est essentiel pour l'entreprise de communiquer et d'informer sur ses missions. C'est pourquoi elle accorde une grande attention à la conception de chacun de ses supports de communication, veillant à ce qu'ils expriment clairement ses missions. Un exemple concret est l'agenda 2024 que nous avons conçu, mettant en avant l'objectif majeur de NHPC pour l'année 2024 : œuvrer pour un Cameroun entièrement éclairé."
        ],
        overlay: 1,
        date: "11-20-2023",
        images: [
            "/assets/img/project/NHPC/Agenda-NHPC.jpg",
            "/assets/img/project/NHPC/Agenda-NHPC-2.jpg",
            "/assets/img/project/NHPC/CALENDIER-MURAL-02-NHPC-2024-SIMULATION.jpg",
            "/assets/img/project/NHPC/CALENDRIER-CHEVALET-01-NHPC-2024-.jpg",
            "/assets/img/project/NHPC/CALENDRIER-CHEVALET-02-NHPC-2024-.jpg",
            "/assets/img/project/NHPC/CALENDRIER-MURAL-01-NHPC-2024-SIMULATION.jpg",
        ],
        component: (props) => <UnderArmour {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            client: 'NHPC'
        }
    },
    {
        id: 8,
        title: 'THEPLUG WEDDING',
        slug: 'theplug-wedding',
        src: '/assets/img/logo/LOGO WEDDING-NOIR.png',
        srcSlider: '/assets/img/project/THEPLUG WEDDING/THEPLUG-Wedding-Mock-up.jpg',
        category: ['Graphisme', 'Vidéographie', 'Web Design', 'Photographie'],
        description: [
            "THEPLUG WEDDING est une agence spécialisée dans la capture des moments les plus mémorables des mariages, tant en photographie qu'en vidéo. La mission de l’agence est d'immortaliser les cérémonies officielles qui unissent deux êtres dans la promesse d'un amour et d'une fidélité éternels. Chez THEPLUG WEDDING, l'amour et l'art fusionnent pour exprimer une beauté exceptionnelle.",
            "Cette philosophie transparaît dans la conception de leur site internet, où les photographies et vidéos mettent en lumière un univers harmonieux empreint de joie et de bonheur. Notre objectif dans cette réalisation était de démontrer que la photographie de mariage va au-delà de simples 'clics', mais qu'elle vise à capturer toute la magie d'un moment unique. Cela requiert créativité et une collaboration étroite entre les mariés et le photographe, contribuant à faire ressortir toute la magie de cet instant unique"
        ],
        skils: "Design du logo, charte graphique, site internet, photographie, vidéographie, carte de visite, identité de marque",
        overlay: 4,
        date: "07-15-2023",
        href: "https://theplug-wedding.com",
        video: {
            poster: '/assets/img/logo/LOGO WEDDING-NOIR.png',
            loop: true
        },
        bgVid: '/assets/img/project/Play icon.png',
        images: [
            '/assets/video/theplug wedding website.mp4',
            '/assets/img/project/THEPLUG WEDDING/THEPLUG-Wedding-Mock-up.jpg',
            '/assets/img/logo/LOGO WEDDING-NOIR.png',
            "/assets/img/project/THEPLUG WEDDING/3.jpg",
            '/assets/img/project/THEPLUG WEDDING/Card Stephane.jpg'
        ],
        isvideo: false,
        component: (props) => <ToastReel {...props} />,
        info: {
            direction: "THEPLUG COM'",
            design: "THEPLUG COM'",
            client: 'THEPLUG WEDDING',
            photographie: 'STEPHANE KAMWA'
        }
    },
    {
        id: 9,
        title: "Epouse Eden",
        slug: 'epouse-eden',
        src: 'https://youtu.be/SeoF3Ei1E_E',
        category: ['Graphisme', 'Vidéographie'],
        description: [
            "Vision portée par l’association Mastering your life de Leipzig en Allemagne qui se donne pour mission de détruire et renverser les systèmes de pensée du monde actuel, afin de rétablir la vérité qui affranchit des faux raisonnements pour exercer une vraie liberté en Christ, rendant chaque chrétien capable de briller dans tous les domaines : politique, économique, artistique, sportif, entrepreneuriat, médias, etc.",
            "Pour la troisième édition de son événement EdenDay, se déroulant au Congo à Lubumbashi et ayant pour thème: L'Epouse Arrive. ThePlug Com' a joué un rôle essentiel en créant un film destiné à servir de bande-annonce pour accompagner la communication de l'événement."
        ],
        overlay: 2,
        date: "09-15-2023",
        href: "https://comtheplug.com",
        video: {
            poster: '/assets/img/logo/epouse eden - c2023 logo.png',
            loop: true
        },
        bgVid: '/assets/img/project/Play icon.png',
        images: [
            "https://youtu.be/SeoF3Ei1E_E",
            "/assets/img/project/Epouse Eden/Business_Card_Mockup.jpg", 
            "/assets/img/project/Epouse Eden/epouse-eden-document-mock-up.jpg",
            "/assets/img/project/Epouse Eden/Free_Baseball_Cap_Mockup_2.jpg", 
            "/assets/img/project/Epouse Eden/Free_MacBook_Pro_2.jpg", 
            "/assets/img/project/Epouse Eden/Free_Mug_Mockup_2.jpg",
            "/assets/img/project/Epouse Eden/Free_Pen_Mockup_1.jpg",
            "/assets/img/project/Epouse Eden/Free_Shopping_Bag_Mockup_1.jpg",
            "/assets/img/project/Epouse Eden/invitation-card.jpg",
            "/assets/img/project/Epouse Eden/T-Shirt-Blanc_Maquette.jpg"
        ],
        isvideo: true,
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            client: 'STELLA TCHOUMI'
        }
    },
    {
        id: 10,
        title: "Pulse Live",
        slug: 'pulse-live',
        src: '/assets/video/Pulse live animation logo.mp4',
        srcSlider: "/assets/img/project/Pulse Live/pulselive-Website-1.jpg",
        category: ['Graphisme', 'Vidéographie', 'Web Design'],
        description: [
            "PULSE LIVE ENTERTAINMENT établit en Allemagne, se distingue en tant que société spécialisée dans la planification de tournées, la production de concerts, de festivals et de spectacles. Fondée par des enthousiastes de musique, elle s'engageà promouvoir la scène musicale africaine, en mettant l'accent sur l'Allemagne, tout en visant une présence remarquable à l'échelle européenne et mondiale",
            "Dans le but d'accentuer la visibilité et la dynamique de leur travail, l'entreprise nous a contactés pour rédefinir son logo, et travailler à la création de leur site internet. L'objectif était de rendre le logo veritablement représentatif de leur entreprise, en mettant en avant son aspect festif et dynamique, avec une touche de glamour, à travers l'utilisation de couleurs vibrantes et d'éléments animés. Le site internet, quant à lui, met en lumière la musique africaine en mettant en avant des visages qui incarnent parfaitement cette richesse culturelle, contribuant ainsi à sa promotion à l&#39;échelle internationale."
        ],
        skils: "Design du logo, charte graphique, vidéographie",
        overlay: 2,
        date: "01-09-2023",
        href: "https://www.pulse-live.de",
        video: {
            poster: '/assets/video/Pulse live animation logo.mp4',
            loop: true
        },
        bgVid: '/assets/img/project/Play icon.png',
        images: [
            "/assets/video/PULSE LIVE_Website presentation-.mp4",
            '/assets/img/logo/PULSELIVE.png',
            "/assets/img/project/Pulse Live/pulselive-Website.jpg",
            "/assets/img/project/Pulse Live/pulselive-Website-1.jpg",
            "/assets/img/project/Pulse Live/compound-slider.jpg"
        ],
        isvideo: true,
        component: (props) => <ToastReel {...props} />,
        info: {
            direction: "PULSE LIVE",
            design: "THEPLUG COM'",
            client: 'PULSE LIVE'
        }
    },
    {
        id: 11,
        title: "Esk Translations UG",
        slug: 'esk-translations-ug',
        src: "/assets/img/logo/EsK_Translations.png",
        srcSlider: "/assets/img/project/Esk Translations UG/esk-translation-Mock-up.jpg",
        category: ['Graphisme', 'Web Design'],
        description: [
            "ESK TRANSLATIONS UG se positionne en tant qu'agence de traduction offrant des services de qualité exceptionnelle aux entreprises internationales, multinationales, ainsi qu'aux particuliers. Elle veille à ce que ses traductions reflètent parfaitement la vision de ses clients, offrant ainsi une expérience enrichissante, captivante et agréable.",
            "L'entreprise avait besoin d'un site vitrine pour exposer ses divers services et mettre en avant les offres d'une agence de traduction allant au-delà de la simple traduction. Le site met en lumière des services tels que le sous-titrage, la rédaction, la relecture des traductions, l'édition, et bien d'autres prestations que vous pouvez explorer en détail sur la plateforme en ligne."
        ],
        skils: "Design du logo, charte graphique, carte de visite, vidéographie",
        overlay: 3,
        bgVid: '/assets/img/project/Play icon.png',
        date: "10-10-2023",
        href: "https://www.esk-translations.com",
        images: [
            "/assets/video/Website_Presentation_ESK translation.mp4",
            "/assets/img/project/Esk Translations UG/esk-translation-Mock-up.jpg",
            "/assets/img/logo/EsK_Translations.png",
            "/assets/img/project/Esk Translations UG/trans.jpg"
        ],
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            design: "THEPLUG COM'",
            client: 'ESTELLE KAMWA'
        }
    },
    {
        id: 12,
        title: "EMD PROD",
        slug: 'emd-prod',
        src: '/assets/img/project/Emd Prod/EMD.jpg',
        srcSlider: '/assets/img/project/Emd Prod/EMD.jpg',
        category: ['Graphisme'],
        description: [
            "EMD PROD, en pleine expansion dans l'industrie musicale, a sollicité notre expertise pour améliorer sa visibilité. Nous avons pris en charge la conception de son logo ainsi que d'autres outils de communication à venir. En tant qu'accompagnateur privilégié de cette entreprise, nous assumons la responsabilité de concevoir ses divers visuels événementiels pour renforcer sa présence sur le marché."
        ],
        overlay: 1,
        bgVid: '/assets/img/project/Play icon.png',
        date: "09-01-2023",
        images: [
            "/assets/video/EMD_HD.mp4",
            "/assets/img/project/Emd Prod/EMD.jpg",
            "/assets/img/project/Emd Prod/EMD-logo.jpg",
            "/assets/img/project/Emd Prod/serges-beynaud-2visual.jpg",
            "/assets/img/project/Emd Prod/serges-beynaud-visual.jpg",
            "/assets/img/project/Emd Prod/Toofan-visual.jpg"
        ],
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            client: 'EMD PROD'
        }
    },
    {
        id: 13,
        title: "Madhi",
        slug: 'madhi',
        src: '/assets/img/project/Madhi/Madhi-logo_.jpg',
        srcSlider: '/assets/img/project/Madhi/Madhi-logo_.jpg',
        category: ['Graphisme'],
        description: [
            "Spécialisée dans la promotion et commercialisation de la culture africaine à travers des œuvres artisanales en Europe, l'entreprise MADHI a sollicité nos services pour la conception de son logo. Ce dernier a été conçu tel un réservoir, symbolisant une maison qui abrite la richesse africaine. Il traduit également des valeurs de résistance, de sérieux, et d'autorité, accentuées par l'utilisation de lettres en majuscules."
        ],
        overlay: 2,
        bgVid: '/assets/img/project/Play icon.png',
        date: "09-01-2023",
        images: [ 
            "/assets/video/madhi animation.mp4",
            "/assets/img/project/Madhi/Madhi-logo_.jpg"
        ],
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            client: 'MADHI'
        }
    },
    {
        id: 14,
        title: "SAB Afrique",
        slug: 'sab-afrique',
        src: '/assets/video/Montage_SAB.mp4',
        srcSlider: "/assets/img/project/SAB Afrique/2024/SABAFRIQUE-Mock-up.jpg",
        category: ['Graphisme', 'Vidéographie', 'Web Design', 'Photographie'],
        description: [],
        skils: "Réalisation du site web, vidéographie, montage vidéo, graphic design, photographie",
        overlay: 2,
        date: "28-06-2024",
        href: "https://sabafrique.com/",
        video: {
            poster: '/assets/video/Montage_SAB.mp4',
            loop: true
        },
        bgVid: '/assets/img/project/Play icon.png',
        images: [],
        isvideo: true,
        component: (props) => <ToastReel {...props} />,
        info: {
            direction: "D-FIT",
            design: "THEPLUG COM'",
            client: 'SAB Afrique',
            photographie: "THEPLUG COM'",
            videographie: "THEPLUG COM'"
        }
    },
    {
        id: 15,
        title: "Leslie & Daniel",
        slug: 'leslie-et-daniel',
        src: '/assets/img/project/Leslie&Daniel/Leslie-&-Daniel-website-Mock-up.jpg',
        srcSlider: "/assets/img/project/Leslie&Daniel/Leslie-&-Daniel-website-Mock-up.jpg",
        category: ['Web Design'],
        description: [],
        skils: "Réalisation du site web, gestion numérique des invitations",
        overlay: 2,
        date: "20-06-2024",
        href: "https://leslieetdaniel.fr",
        images: [],
        isvideo: false,
        component: (props) => <ToastReel {...props} />,
    },
    {
        id: 16,
        title: "ThePlug Wedding Cameroun",
        slug: 'cm-theplug-wedding',
        src: '/assets/img/project/CM THEPLUG WEDDING/theplug-wedding-CM-website-Mock-up.jpg',
        srcSlider: "/assets/img/project/CM THEPLUG WEDDING/theplug-wedding-CM-website-Mock-up.jpg",
        category: ['Web Design', 'Design'],
        description: [],
        skils: "Réalisation du site web",
        overlay: 2,
        date: "20-06-2024",
        href: "https://cm.theplug-wedding.com/",
        images: [],
        isvideo: false,
        component: (props) => <ToastReel {...props} />,
    },
    {
        id: 17,
        title: "ThePlug Communication",
        slug: 'theplugcom',
        src: '/assets/img/project/COM THEPLUG/Theplug-COM-website-Mock-up.jpg',
        srcSlider: "/assets/img/project/COM THEPLUG/Theplug-COM-website-Mock-up.jpg",
        category: ['Web Design', 'Design', 'Photographie', 'Vidéographie'],
        description: [],
        skils: "Réalisation du site web, Design du logo, charte graphique, cartes de visite, vidéographie, flyers",
        overlay: 2,
        date: "01-09-2023",
        href: "https://www.comtheplug.com",
        images: [],
        isvideo: false,
        component: (props) => <ToastReel {...props} />,
    },
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