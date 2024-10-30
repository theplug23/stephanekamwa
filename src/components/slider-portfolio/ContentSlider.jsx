import React from 'react';
import MetaPost from "../header/MetaPost";
import NavLink from "../button/NavLink";
import {getPortfolioLink} from "../../api/portfolio/PortfolioData";
import ButtonDefault from "../button/button-default/ButtonDefault";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';

function ContentSlider({data , activeClass} , ref) {

    const {t} = useTranslation("common")


    return (
        <div className="dsn-slider-content hero-content">
            {data.map((item, key) =>
                <div className={`slide-content ${activeClass === key ? 'dsn-active' : ''}`} key={key}
                     ref={ref}>
                    
                    {item.title &&
                    <h1  className="title-heading"><NavLink to={getPortfolioLink(item)}>{t(item.title)}</NavLink>
                    </h1>}
                    {item.description && <div className="dsn-description mt-30">{t(item.description)}</div>}
                    <ButtonDefault href={item.video ? item.src : `/portfolio`} className="mt-30" text={t("Voir Plus")}
                                   icon={faAngleRight}/>
                </div>
            )}

        </div>
    );
}

export default React.forwardRef(ContentSlider);