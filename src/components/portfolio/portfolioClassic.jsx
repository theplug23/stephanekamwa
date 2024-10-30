import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { getPortfolioData } from "../../api/portfolio/portfolio";
import DsnGrid, { DsnGridProps } from "../DsnGrid";
import FilterPortfolio from "./FilterPortfolio";
import Isotope from "isotope-layout";
import { dsnCN } from "../../hooks/helper";
import { useTranslation } from "react-i18next";
import BoxGallery from '../../components/box-gallery/BoxGallery';
import PortfolioSwiper from "./PortfolioSwiper";
import ProjectItem from "./ProjectItem";


const PortfolioClassic = ({ className, ...restProps }: DsnGridProps) => {
  const {t} = useTranslation("common")
  const dataPortfolio = getPortfolioData();
  const iso = useRef();
  const [filter, setFilter] = useState("*");
  const refIsotope = useRef();
  const category = new Set();
  dataPortfolio.map((p) => {
    return typeof p.category === "object"
      ? p.category.map((i) => category.add(i))
      : category.add(p.category);
  });

  useEffect(() => {
    iso.current = new Isotope(refIsotope.current, {
      itemSelector: ".portfolio-item",
    });

    return () => {
      iso.current.destroy();
    };
  });

  useEffect(() => {
    iso.current.arrange({ filter: filter });
  }, [filter]);

  //console.log(dataPortfolio)

  return (
    <section className={dsnCN("dsn-portfolio port-classic", className)}>
      <FilterPortfolio
        className="mb-80"
        categories={[...category]}
        actionFilter={setFilter}
      />

      <DsnGrid {...restProps} isGallery ref={refIsotope}>
        
        {dataPortfolio.map((item, index) => (
            <ProjectItem
              className={
                typeof item.category === "object"
                  ? item.category.join(" ").toLowerCase()
                  : item.category.toLowerCase()
                }
                key={index}
                portoDetails={item}
                textButton={t("Voir Plus")}
            />
        ))}
       
      </DsnGrid>
          
    </section>
  );
};

export default PortfolioClassic;
