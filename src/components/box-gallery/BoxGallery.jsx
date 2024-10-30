import React, {useEffect, useRef} from 'react';
import './style.scss';
import "@fancyapps/ui/dist/fancybox.css";
import {Fancybox as NativeFancybox} from "@fancyapps/ui";
import DsnGrid from "../DsnGrid";
import {DsnGridProps} from "../DsnGrid";
import {generateString} from "../../hooks/helper";


interface boxGalleryProps extends DsnGridProps {
    images?: [],
    options: {
        infinite?: true | false,
        hideScrollbar?: true | false,
        animated?: true | false,
        startIndex?: 0,
    }
}

function BoxGallery({children, bgVid, className, title_mini, images, options, ...restProps}: boxGalleryProps) {
    
    const target = useRef();
    const generateId = generateString(5);
    

    useEffect(() => {

        NativeFancybox.bind("[data-fancybox]", {parentEl: target.current, ...options,});

        return () => {
            NativeFancybox.destroy();
        };
    }, []);

    return (
        
        <div className={`dsn-box-gallery  ${className || ''}`} ref={target}>
            <DsnGrid {...restProps} >
                {images.map(({src, alt, bgImg, caption, groupPopup}, index) =>
                    <BoxGalleryItem bgVid={bgVid} bgImg={bgImg} src={src} alt={alt}
                        caption={caption} key={index} title_mini={title_mini}
                        groupPopup={groupPopup || generateId}/>)
                }
            </DsnGrid>
        </div>
    );
}

BoxGallery.defaultProps = {
    options: {
        infinite: false
    }
};

export function BoxGalleryItem({src, bgVid, bgImg, caption, title_mini, groupPopup, className, ...restProps}) {
    
    function isImageOrVideo(url) {
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            return 'video youtube';
        } else if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            return 'image';
        } else if (url.match(/\.(mp4|mov|avi|3gp)$/) != null) {
            return 'video';
        } else {
            return 'inconnu'
        }
    }
    

    return (

        src && (isImageOrVideo(src) === "image") ? <div className={`item-box section-padding ${className || ''}`} {...restProps}>
            <div className="image-zoom p-relative">
                <div className="single-image"
                    data-src={src}
                    data-caption={caption}
                    data-fancybox={groupPopup || ''}
                >
                    <img className="cover-bg-img" src={src} alt={caption}/>
                </div>
                {caption && <div className="caption">{title_mini ? title_mini : caption}</div>}
            </div>
        </div> :
        <div className={`item-box section-padding ${className || ''}`} {...restProps}>
            <div className="image-zoom p-relative">
                {bgVid &&
                    <div className="single-image"
                        data-src={src}
                        data-caption={caption}
                        data-fancybox={groupPopup || ''}
                    >
                        <video className="cover-bg-img" poster={bgImg}>
                            <source src={src} type='video/mp4' />
                        </video>
                    </div>
                }
                {caption && <div className="caption">{title_mini ? title_mini : caption}</div>}
            </div>
        </div>

    );
}

BoxGallery.item = BoxGalleryItem;


export default BoxGallery;