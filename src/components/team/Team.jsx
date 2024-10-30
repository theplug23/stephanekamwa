import React , {useState} from 'react';


import './style.scss'
import TeamItem from './TeamItem';
import 'swiper/css';


import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, SwiperOptions, Autoplay} from "swiper";
import 'swiper/css/autoplay';
import TeamDetails from './TeamDetails';
import { useTranslation } from 'react-i18next';

const Team = ({className, desktop, mobile, tablet, ...restProps}: SwiperOptions) => {
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation("common")

    const openModal = () => {
      setIsOpen(!isOpen);
    };

    return (
        <Swiper
            modules={[Pagination , Autoplay]}
            pagination={{clickable: true, el: '.swiper-pagination'}}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{delay: 3000}}
            breakpoints={{
                992: desktop,
                768: tablet,
                576: mobile
            }}
            className={`dsn-team ${className || ''}`}
            {...restProps}
        >
            {TeamDetails.map((item, index) =>
                <SwiperSlide key={index}>
                    <TeamItem src={item.src} title={item.title} subTitle={t(item.subTitle)} link={item.link} openModal={openModal}/>
                </SwiperSlide>
            )}
            <div className="swiper-pagination"/>
        </Swiper>
    );
}

Team.defaultProps = {
    desktop: {
        slidesPerView: 4
    },
    tablet: {
        slidesPerView: 3

    },
    mobile: {
        slidesPerView: 2
    }
}

export default Team
