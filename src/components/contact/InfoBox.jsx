import React from 'react';
import './style.scss'
import { dsnCN } from "../../hooks/helper";
import { useTranslation } from 'react-i18next';

function InfoBox({ className }) {
    const {t} = useTranslation("common")
    return (

        <div className={dsnCN('box-info-contact', className)}>
            <h3 className="mt-10">
            {t("Avec grand plaisir, nous répondrons à toutes vos questions.")}
            </h3>
        </div>

    );
}

export default InfoBox;