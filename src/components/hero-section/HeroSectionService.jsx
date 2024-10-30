import React from 'react';
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import BoxRightContact from "../box-right/BoxRightContact";
import {ParallaxImageProps} from "../parallax-image/ParallaxImage";
import { Container } from 'react-bootstrap';
import ServiceOne from '../services/ServiceOne';


const heroContent = {
    // title: "Comment est votre\nidentite visuelle?",
    src: '/assets/img/services.jpg',
    // description: `A chaque fois que nous devons decrire une identite visuelle , tout commence par de l'art , le savoir faire , la passion .... Dans ce systeme ou les jeunes aiment tout ce qui brille , vous serez seduits`,
    // to: "portfolio/bastian-bux",
    // textButton: "Apprendre Plus",
    // icon : faAngleRight
};

function HeroSectionService({...restProps}: ParallaxImageProps) {
    return (
        <BoxRightContact  {...restProps} src={heroContent.src}>
            <Container className="section-margin "> 
                    <ServiceOne col={3} colMobile={1} />
            </Container>
        </BoxRightContact>
    );
}

export default HeroSectionService;