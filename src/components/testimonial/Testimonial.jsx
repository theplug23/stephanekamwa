import React from 'react'
import './style.scss'
import TestimonialItem from './TestimonialItem';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import MoveTrigger from "../../animation/MoveTrigger";
import {Pagination, SwiperOptions,Autoplay} from "swiper";
import {dsnCN} from "../../hooks/helper";


const TestimonialDetails = [
    {
        name: "Marc Schröter",
        label: "Particulier",
        src: "assets/img/team/nico.jpg",
        description: `"Stephane a accompagné la fête d'été de notre entreprise et nous sommes complètement enthousiasmés par son travail professionnel et ses images qui racontent des histoires. Nous pouvons expressément recommander Stéphane et retravaillerons avec lui à tout moment. Il était en arrière-plan tout le temps et a capturé de manière authentique chaque instant et chaque émotion. Stéphane est aussi une personne très sympathique. Nous nous sommes beaucoup amusés avec lui et nous étions heureux de l'avoir avec nous lors de notre journée. Recommandation absolue!"`
    },
    {
        name: "Jessica",
        label: "Particulière",
        src: "assets/img/avatar/2.jpg",
        description: `"Cher Stéphane,
        Vous avez magnifiquement immortalisé notre mariage avec vos photos.
        Les larmes ont coulé en le regardant...
        Nous vous remercions du fond du cœur pour les magnifiques photos...
        Et aussi pour l'excellente communication avec vous....
        Nous vous réserverons certainement plus souvent 😉
        Jessica et Sacha "`
    },
    {
        name: "Marlene bone",
        label: "particuliere",
        src: "assets/img/avatar/3.jpg",
        description: `"Ouah!! Stephane est incroyablement bon et professionnel ! C'était très amusant de tourner avec lui et il a réussi à capturer notre mariage avec de nombreux clichés exactement comme nous le voulions ! Nous le réserverions encore et encore!
        Merci Stephane 😊"`
    },

]


function Testimonial({className, title, ...restProps}: SwiperOptions) {
    return (

        <section className={dsnCN('dsn-testimonial background-section testimonial-one', className)}>
            <div className="testimonial-inner ">
                <div className="title-box">
                    {title &&
                    <MoveTrigger from={{y: 0, opacity: 0}} to={{y: -60, opacity: 1}} mobile={false}>
                        {(ref) => <h2 className='title-section p-relative z-index-1' ref={ref}>
                            {title}
                        </h2>}
                    </MoveTrigger>
                    }

                </div>
                <div className='content-box'>
                    <Swiper
                        modules={[Pagination,Autoplay]}
                        pagination={{clickable: true, el: '.swiper-pagination'}}
                        slidesPerView={1}
                        {...restProps}
                    >
                        {TestimonialDetails.map(
                            (item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <TestimonialItem
                                            src={item.src} authorName={item.name} label={item.label}
                                            description={item.description}/>
                                    </SwiperSlide>

                                );
                            }
                        )}

                        <div className="swiper-pagination"/>

                    </Swiper>
                </div>

            </div>
        </section>

    )
}


export default Testimonial;