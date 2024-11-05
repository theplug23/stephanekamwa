import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import { useTranslation } from 'react-i18next';

const ServicesDetails = [
    // {
    //     title: "Expertise dans l'analyse du discours",
    //     description: "Nous utilisons une approche sémiotique pour réaliser des analyses minutieuses sur le marché, les produits, les marques et la communication déployée tout autour afin de faire un comparatif entre image voulue, perçue et réelle, tout en vous permettant de réajuster l’écart qui pourrait exister.Des recherches documentaires approfondies de votre secteur d’activité, et de la concurrence pour vous permettre de vous insérer dans le marché en misant sur le bon axe. ",
    // },
    // {
    //     title: "Expertise en méthodes qualitatives",
    //     description: "L’observation, les entretiens, les focus group, le recueil documentaire,  l’analyse des micro-comportements variés et changeants du consommateur pour obtenir des données de fond. Placer votre client au cœur de toutes nos démarches en misant sur le capital d’empathie qui implique d’écouter le client, de mieux le comprendre, et d’être en mesure de mieux capter son attention",
    // },
    {
        title: "Conception et mise en œuvre des stratégies de communication",
        description: "La créativité dans la mise en place de votre communication publicitaire, institutionnelle, ou pour le développement, par le graphisme, pour une meilleure communication sensorielle.Pour mieux toucher les affects de votre client il faut aller au-delà du fonctionnel, en faisant preuve d’imagination et d’innovation au niveau du design.Disponible : Un studio de production photo, 3D et animation, un matériel de qualité pour la production audiovisuelle (films documentaires, magazines, courts et longs métrages, etc.), une équipe de développeurs web, graphistes, monteurs vidéo, pour la conception et la réalisation de vos supports de communication.",
    }
]

const ServiceTow = ({className, ...restProps}: DsnGridProps) => {
    const {t} = useTranslation("common")
    return (
        <DsnGrid className={dsnCN('dsn-services service-tow', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                    <div className='service-item' key={index}>
                        <div className="line-before mb-20"/>
                        <h4 className='title-block' style={{color: '#b99226'}}>{t(item.title)}</h4>
                        <p className='mt-15 dsn-auto'>{t(item.description)}</p>
                    </div>
            )}

        </DsnGrid>
    );
};


export default ServiceTow