import React from 'react';
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import ButtonDefault from "../button/button-default/ButtonDefault";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import BoxRightContact from "../box-right/BoxRightContact";
import {ParallaxImageProps} from "../parallax-image/ParallaxImage";
import { Container } from 'react-bootstrap';
import DsnGrid from '../DsnGrid';
import InfoBox from '../contact/InfoBox';
import ContactForm from '../contact/ContactForm';
import { useTranslation } from 'react-i18next';

const heroContent = {
    title: "Comment est votre\nidentite visuelle?",
    src: '/assets/img/contact.jpg',
    description: `A chaque fois que nous devons decrire une identite visuelle , tout commence par de l'art , le savoir faire , la passion .... Dans ce systeme ou les jeunes aiment tout ce qui brille , vous serez seduits`,
    to: "portfolio/bastian-bux",
    textButton: "Apprendre Plus",
    icon : faAngleRight
};

function HeroSectionContact({...restProps}: ParallaxImageProps) {
    const {t} = useTranslation("common")
    return (
        <BoxRightContact  {...restProps} src={heroContent.src}>
            <Container className="section-margin">
                <DsnGrid col={2} colTablet={1}>
                    <InfoBox className="background-section p-30" />
                    <ContactForm />
                </DsnGrid>
        </Container>
        </BoxRightContact>
    );
}

export default HeroSectionContact;