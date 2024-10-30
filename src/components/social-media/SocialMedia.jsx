import React, {useEffect, useRef} from 'react'
import {dsnCN} from '../../hooks/helper'
import './style.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faLinkedin, faTwitter, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {splittingItems} from "../../hooks/Spltting";


function SocialMedia({className}) {
    const ref = useRef();
    const socialData = [
        {link: "https://www.facebook.com/thepluggroup1/", icon: faFacebookF},
        {link: "https://www.instagram.com/theplug_group/", icon: faInstagram},
        {link: "https://www.linkedin.com/company/42470224", icon: faLinkedin},
        {link: "https://wa.me/+4915752069252/", icon: faWhatsapp},
        {link: "https://twitter.com/THEPLUG_GROUP", icon: faTwitter},
        {link: "https://www.youtube.com/@THEPLUG_GROUP", icon: faYoutube},
    ];


    useEffect(() => {
        splittingItems(ref.current, 'li')
    });

    return (
        <ul className={dsnCN('social-one', className)} ref={ref} style={{marginTop: '20px'}}>
            {socialData.map((item, index) =>
                <li key={index}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={item.icon}/>
                    </a>
                </li>
            )}
        </ul>

    )
}

export default SocialMedia