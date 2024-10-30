import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.scss'
import { useTranslation } from "react-i18next";

function TeamItem({ src, title, subTitle, link ,openModal}) {
  const {t} =useTranslation("common")
 

  return (
    <div className="team-item">
      <div className="box-img" onClick={openModal}>
        <img className="team-img" src={src} alt={title} />
      </div>
      <div className="info">
        <div className="box-content">
          <h5 className="mt-4" style={{ color: "#0000050" }}>
            {title}
          </h5>
          <h6 style={{ color: "#b99226" }} className=" mb-10">
            {subTitle}
          </h6>
          <Link to={link}>{t("Contactez-moi")}</Link>
        </div>
      </div>
    </div>
  );
}

export default TeamItem;
