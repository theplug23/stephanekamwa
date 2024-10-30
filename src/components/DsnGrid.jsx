import React from 'react';

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lg-video.css";
import lgVideo from "lightgallery/plugins/video";


export interface DsnGridProps {
    col?: number | 1,
    colTablet?: number | 1,
    colMobile?: number | 1,
    colGap?: number | string | 30,
    colGapTablet?: number | string | 30,
    colGapMobile?: number | string | 30,
    rowGap?: number | string | 30,
    rowGapTablet?: number | string | 30,
    rowGapMobile?: number | string | 30,
    isGallery?: boolean | false,
}



const DsnGrid = React.forwardRef((props: DsnGridProps, ref) => {

    const {
        className,
        col,
        colTablet,
        colMobile,
        colGap,
        colGapTablet,
        colGapMobile,
        rowGap,
        rowGapTablet,
        rowGapMobile,
        children,
        isGallery,
    } = props;

    const gapPx = ($param) => {
        if (!isNaN($param))
            return $param + "px";
        return $param;
    }


    const onInit = () => {
        console.log("lightGallery has been initialized");
    };

    return (!isGallery ? (
        <div
            style={{
                '--dsn-col-number': col,
                '--dsn-col-number-tablet': colTablet,
                '--dsn-col-number-mobile': colMobile,
                '--dsn-col-gap': gapPx(colGap),
                '--dsn-col-gap-tablet': gapPx(colGapTablet),
                '--dsn-col-gap-mobile': gapPx(colGapMobile),
                '--dsn-row-gap': gapPx(rowGap),
                '--dsn-row-gap-tablet': gapPx(rowGapTablet),
                '--dsn-row-gap-mobile': gapPx(rowGapMobile),
            }}
            className={`dsn-grid-layout ${className || ''}`}
            ref={ref}
        >
            {children}
        </div>

    ) : (
        <div ref={ref}>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgVideo]}
                elementClassNames={`dsn-grid-layout dsn-light-gallery ${className || ''}`}

            >

                {children}

            </LightGallery>
        </div>

    ));

});


DsnGrid.displayName = 'DsnGrid'

DsnGrid.defaultProps = {}

export default React.memo(DsnGrid);