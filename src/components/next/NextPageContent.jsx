import React from 'react';
import NextPage from "./NextPage";
import { useTranslation } from 'react-i18next';

function NextPageContent({...restProps}) {
    const {t} = useTranslation("common")
    return (
        <NextPage to="/contact"  text={t("contactez-nous directement en cliquant ici !")} {...restProps}>
            {t("Êtes-Vous satisfaits ?")}
        </NextPage>
    );
}

export default NextPageContent;