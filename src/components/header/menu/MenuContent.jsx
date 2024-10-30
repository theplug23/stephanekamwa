import React from 'react';
import {dsnCN} from "../../../hooks/helper";
import { useTranslation } from 'react-i18next';

function MenuContent({className}) {
    const {t} = useTranslation("common")

    const socialData = [
        {link: "https://www.facebook.com/thepluggroup1/", name: 'Facebook'},
        {link: "https://www.instagram.com/theplug_group/", name: 'Instagram'},
        {link: "https://www.linkedin.com/company/42470224", name: 'LinkedIn'},
        {link: "https://wa.me/+4915752069252/", name: 'Whatsapp'},
        {link: "https://twitter.com/THEPLUG_GROUP", name: 'Twitter'},
        {link: "https://www.youtube.com/@THEPLUG_GROUP", name: 'Youtube'},
    ];
    return (
        <div className={dsnCN('container-content  d-flex flex-column justify-content-center', className)}>
            <div className="nav__info">
                <div className="nav-content">
                    <h5 className="sm-title-block mb-10" >THEPLUG Com'</h5>
                    <p style={{textTransform:"capitalize"}}>
                    <img src="https://img.icons8.com/doodle/20/null/germany.png" alt='drapeau de la germany'/>  {t("Allemagne")}<br/>  <img src="https://img.icons8.com/doodle/20/null/france.png" alt='drapeau de la france'/> {t("France")} <br/><img src="https://img.icons8.com/color/20/null/cameroon.png" alt='drapeau du cameroun'/> {t("Cameroun")} <br/> <img src="https://img.icons8.com/color/20/null/senegal.png" alt='drapeau du senegal'/>  {t("senegal")}
        
                    </p>

                </div>
                <div className="nav-content mt-30">
                    <h5 className="sm-title-block mb-10">{t("Contacts")}</h5>
                    <p className="links over-hidden mb-1">
                        <a className="link-hover" href="tel:+491639209766" data-hover-text="(+49) 1639209766">
                        <i class="fa fa-phone" aria-hidden="true" style= {{color: '#b99226'}}> :</i> (+49) 1639209766
                        </a>
                        <br/>
                        <a className="link-hover" href="tel:+33754543997" data-hover-text="+33 754543997">
                        <i class="fa fa-phone" aria-hidden="true" style= {{color: '#b99226'}}> :</i> (+33) 754543997
                        </a>
                        <br/>
                        <a className="link-hover" href="tel:+237686117771" data-hover-text="+237 686117771">
                        <i class="fa fa-phone" aria-hidden="true" style= {{color: '#b99226'}}> :</i> (+237) 686117771
                        </a>
                        <br/>
                        <a className="link-hover" href="tel:+221777421948" data-hover-text="+221 77 742 19 48">
                        <i class="fa fa-phone" aria-hidden="true" style= {{color: '#b99226'}}> :</i> (+221) 777421948
                        </a>
                    </p>
                    <p className="links over-hidden">
                        <a className="link-hover" href="mailto:contact@theplug-group.com"
                           data-hover-text="contact@theplug-group.com"><i class="fa fa-envelope-o" aria-hidden="true" style= {{color: '#b99226'}}> :</i> contact@theplug-group.com</a>
                    </p>
                </div>
            </div>
            <div className="nav-social nav-content mt-30">
                <div className="nav-social-inner p-relative">
                    <h5 className="sm-title-block mb-10">{t("Suivez-nous sur :")} </h5>
                    <ul>
                        {socialData.map((item, index) =>
                            <li key={index}>
                                <a href={item.link} target="_blank" rel="nofollow noopener noreferrer">{item.name}</a>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuContent;