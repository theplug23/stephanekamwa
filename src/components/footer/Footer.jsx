import React from 'react'
import './style.scss'

import {Container} from 'react-bootstrap';

import SocialMedia from '../social-media/SocialMedia';
import DsnGrid from '../DsnGrid';
import Brand from "../brand/Brand";
import NavLink from "../button/NavLink";
import MenuFooter from "./MenuFooter";
import ContentFooter from "./ContentFooter";
import AddressFooter from "./AddressFooter";
import Copyright from "./Copyright";
import {dsnCN} from "../../hooks/helper";
import { useTranslation } from 'react-i18next';


function Footer({className, ...restProps}) {
    const {t} = useTranslation("common")
    return (
        <footer className={dsnCN('footer background-section', className)} {...restProps}>
            <Container>
                <div className="footer-links pt-70 pb-40 px-20">
                    <DsnGrid col={4} colTablet={2}>
                        {/*Band & Social*/}
                        <div className='dsn-col-footer'>
                            <NavLink to="/">
                                <Brand width="200px"/>
                            </NavLink>
                            <SocialMedia className="mt-20"/>
                        </div>
                        {/*Navigation*/}
                        <div className='dsn-col-footer'>
                            <h4 className="footer-title">{t("Menu")}</h4>
                            <MenuFooter/>
                        </div>

                        {/*Contact*/}
                        <div className='dsn-col-footer'>
                            <h4 className="footer-title">{t("Contacts")}</h4>
                            <ContentFooter/>
                        </div>
                        <div className='dsn-col-footer'>
                            <h4 className="footer-title">{t("Adresse")}</h4>
                            <AddressFooter/>
                        </div>
                    </DsnGrid>
                </div>
                {/* <div style={{ textAlign: 'center', marginBottom: 40}}>
                    <p>
                        Hochzeitsfotograf Darmstadt | Hochzeitsvideograf Darmstadt | Hochzeitsfotograf Frankfurt | Hochzeitsvideograf Frankfurt | Hochzeitsfotograf Rüsselsheim | Hochzeitsvideograf Rüsselsheim | Hochzeitsfotograf Mainz | Hochzeitsvideograf Mainz | Hochzeitsfotograf Wiesbaden | Hochzeitsvideograf Wiesbaden | Hochzeitsfotograf Hanau | Hochzeitsvideograf Hanau | Hochzeitsfotograf Langen | Hochzeitsvideograf Langen | Hochzeitsfotograf Neu-Isenburg | Hochzeitsvideograf Neu-Isenburg | Hochzeitsfotograf Dietzenbach | Hochzeitsvideograf Dietzenbach | Hochzeitsfotograf Heidelberg | Hochzeitsvideograf Heidelberg | Hochzeitsfotograf Mannheim | Hochzeitsvideograf Mannheim | Hochzeitsfotograf Bensheim | Hochzeitsvideograf Bensheim | Hochzeitsfotograf Dieburg | Hochzeitsvideograf Dieburg | Hochzeitsfotograf Rodgau | Hochzeitsvideograf Rodgau | Hochzeitsfotograf Worms | Hochzeitsvideograf Worms | Hochzeitsfotograf Maintal | Hochzeitsvideograf Maintal | Hochzeitsfotograf Weiterstadt | Hochzeitsvideograf Weiterstadt | Hochzeitsfotograf Bad Homburg | Hochzeitsvideograf Bad Homburg | Hochzeitsfotograf Friedberg | Hochzeitsvideograf Friedberg | Hochzeitsfotograf Gießen | Hochzeitsvideograf Gießen | Hochzeitsfotograf Oberursel | Hochzeitsvideograf Oberursel | Hochzeitsfotograf Taunusstein | Hochzeitsvideograf Taunusstein | Hochzeitsfotograf Königstein im Taunus | Hochzeitsvideograf Königstein am Taunus | Hochzeitsfotograf Weinheim | Hochzeitsvideograf Weinheim | Hochzeitsfotograf Bruchsal | Hochzeitsvideograf Bruchsal | Hochzeitsfotograf Karlsruhe | Hochzeitsvideograf Karlsruhe | Hochzeitsfotograf Heilbronn | Hochzeitsvideograf Heilbronn | Hochzeitsfotograf Bad Dürkheim | Hochzeitsvideograf Bad Dürkheim | Hochzeitsfotograf Speyer | Hochzeitsvideograf Speyer
                    </p>
                </div> */}
                <Copyright className="pt-40 pb-40"/>
            </Container>
        </footer>
    )
}


export default Footer