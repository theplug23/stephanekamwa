import React from 'react';
import {dsnCN} from "../../hooks/helper";
import { useTranslation } from 'react-i18next';

function Copyright({className, ...restProps}) {
    const {t} = useTranslation("common")
    return (
        <div className={dsnCN('copyright', className)} {...restProps}>
            <div className="text-center">
                <p>© {new Date().getFullYear()} STEPHANE KAMWA </p>
                <div className="copyright-text over-hidden">
                    <a href='/impressum' style={{color: '#b99226'}}>{t("Mentions légales")}</a> 
                    {t(" ")}| <a href="/protection-data" style={{color: '#b99226'}}>{t("Protection de données")}</a> | {t("Designé par")}
                    <a href="#" style={{color: '#b99226'}}>
                        THEPLUG COM
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Copyright;