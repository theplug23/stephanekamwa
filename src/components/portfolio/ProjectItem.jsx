import React, { useEffect, useRef, useState } from "react";
import BgImage from "../header/BgImage";
import { dsnCN } from "../../hooks/helper";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { useTranslation } from "react-i18next";
// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

const ProjectItem = ({ portoDetails, textButton, imageOnly, className ,isHome}) => {
    const {t} = useTranslation("common")
    const ref = useRef();
    const home = true

    useEffect(() => {
        const video = ref.current.querySelector("video");
        if (!video) return;

        video.pause();
        const portItem = ref.current,
        mouseEnter = () => video.play(),
        mouseLeve = () => video.pause();

        portItem.addEventListener("mouseenter", mouseEnter);
        portItem.addEventListener("mouseleave", mouseLeve);

        return () => {
        if (!video) return;
        portItem.removeEventListener("mouseenter", mouseEnter);
        portItem.removeEventListener("mouseleave", mouseLeve);
        };
    });

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <a href={portoDetails.src} className={dsnCN("portfolio-item text-center v-dark-head", className)}
          ref={ref}>
          <div className="inner-img">
            <BgImage
              className={"dsn-swiper-parallax-transform"}
              src={portoDetails.src}
              video={portoDetails.video}
              alt={portoDetails.title}
              overlay={portoDetails.overlay}
              height={"100%"}
              imageOnly={imageOnly}
            />
          </div>
          {/* {isHome && (
            <div className="info-text">
              {portoDetails.category && (
                <MetaPost category={portoDetails.category} separate=", " />
              )}
    
              {portoDetails.title && (
                <h4 className="title-block">{t(portoDetails.title)}</h4>
              )}
              {textButton}
            </div>
          )} */}
        </a>
    );
}

export default React.memo(ProjectItem);