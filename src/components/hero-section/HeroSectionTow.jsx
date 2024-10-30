import React from 'react';
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import ButtonDefault from "../button/button-default/ButtonDefault";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import BoxRight from "../box-right/BoxRight";
import {ParallaxImageProps} from "../parallax-image/ParallaxImage";

const heroContent = {
    title: "Comment est votre\nidentite visuelle?",
    src: '/assets/img/modelStudio.jpg',
    description: `A chaque fois que nous devons decrire une identite visuelle , tout commence par de l'art , le savoir faire , la passion .... Dans ce systeme ou les jeunes aiment tout ce qui brille , vous serez seduits`,
    to: "portfolio/bastian-bux",
    textButton: "Apprendre Plus",
    icon : faAngleRight
};

function HeroSectionTow({...restProps}: ParallaxImageProps) {
    return (
        <BoxRight  {...restProps} src={heroContent.src}>
            <FadeUpTrigger>
                <h2 className="pre-line">{heroContent.title}</h2>

                <p className="mt-30 m-w750 dsn-auto">{heroContent.description}</p>
                <ButtonDefault className="mt-30" icon={heroContent.icon} text={heroContent.textButton}
                               to={heroContent.to}/>
            </FadeUpTrigger>
        </BoxRight>
    );
}

export default HeroSectionTow;