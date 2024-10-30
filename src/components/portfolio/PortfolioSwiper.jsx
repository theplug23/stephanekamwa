import React from 'react'
import './style.scss'
import 'swiper/css';
import 'swiper/css/autoplay';


import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination , SwiperOptions, Autoplay} from "swiper";

import { useTranslation } from "react-i18next";


import PortfolioItem from './PortfolioItem';
import {getPortfolioData} from "../../api/portfolio/PortfolioData";


import LightGallery from "lightgallery/react";

// // import styles
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

// // If you want you can use SCSS instead of css
// import "lightgallery/scss/lightgallery.scss";
// import "lightgallery/scss/lg-zoom.scss";

// // import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";


const PortfolioSwiper = ({desktop, mobile, tablet, ...restProps}:SwiperOptions) => {
    const {t} = useTranslation("common")
    const dataPortfolio = getPortfolioData();

    return (
        <Swiper
            modules={[Pagination,Autoplay]}
            pagination={{clickable: true, el: '.swiper-pagination'}}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                992: desktop,
                768: tablet,
                576: mobile
            }}
            {...restProps}
        >
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}

            >
            {
                dataPortfolio.map((item, index) =>
                    <SwiperSlide key={index}>
                        <PortfolioItem portoDetails={item} textButton={t("Voir Plus")} isHome/>
                    </SwiperSlide>)
            }
            </LightGallery>

            <div className="swiper-pagination"/>


        </Swiper>

    );
}

PortfolioSwiper.defaultProps = {
    desktop: {
        slidesPerView: 3
    },
    tablet: {
        slidesPerView: 2

    },
    mobile: {
        slidesPerView: 2
    }
}

export default PortfolioSwiper