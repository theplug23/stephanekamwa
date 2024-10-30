import React from 'react';
import {dsnCN} from "../../hooks/helper";
import { useTranslation } from 'react-i18next';

function AddressFooter({className, ...restProps}) {

    const {t} = useTranslation("common")

    return (
        <div className={dsnCN('col-address' , className)} {...restProps}>
            <p style={{textTransform:"capitalize"}}>
            <img src="https://img.icons8.com/doodle/20/null/germany.png" alt='drapeau de la germany'/> {t("Allemagne")} <br/>
            <img src="https://img.icons8.com/doodle/20/null/france.png" alt='drapeau de la france'/> {t("France")}<br/>
             <img src="https://img.icons8.com/color/20/null/cameroon.png" alt='drapeau du cameroun'/> {t("Cameroun")}<br/>
            <img src="https://img.icons8.com/color/20/null/senegal.png" alt='drapeau du senegal'/> {t("senegal")}
            </p>
        </div>
    );
}

export default AddressFooter;