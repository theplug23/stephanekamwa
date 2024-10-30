import React from "react";
import Navbar, {Nav} from "../../nav/Navbar";
import Brand from "../../brand/Brand";
import MenuContent from "./MenuContent";
import SelectorLanguage from '../../../SelectorLanguage'
import { useTranslation } from "react-i18next";


const menuContent = [
    // {
    //     name: "Home",
    //     dropdownMenu: [
    //         {name: "THEPLUG Home", to: "/"},
    //         // {name: "One Page 2", to: "/demo-2"},
    //         // {name: "One Page 3", to: "/demo-3"},
    //     ]
    // },
    // {
    //     name: "Portfolio",
    //     dropdownMenu: [
    //         // {
    //         //     name: "Sliders",
    //         //     dropdownMenu: [
    //         //         // {name: "Full Screen", to: "/slider"},
    //         //         // {name: "Padding Screen", to: "/slider-2"},
    //         //         {name: "Half Screen", to: "/slider-3"}
    //         //     ]
    //         // }, 
    //         {
    //             name: "Grids",
    //             dropdownMenu: [
    //                 {name: "Grid 2 Columns", to: "/portfolio"},
    //                 {name: "Grid 3 Columns", to: "/portfolio-2"},
    //             ]
    //         },

    //     ]
    // },
    // {
    //     name: "Works",
    //     dropdownMenu: [
    //         {
    //             name: "Works 01 - 05",
    //             dropdownMenu: [
    //                 {name: "Time Tag Watch", to: "/portfolio/time-tag-watch"},
    //                 {name: "Under Armour", to: '/portfolio/under-armour'},
    //                 {name: "Re Styling", to: '/portfolio/re-styling'},
    //                 {name: "Toast 2019 Reel", to: '/portfolio/toast-2019-reel'},
    //                 {name: "What If Gold", to: '/portfolio/what-if-gold'},
    //             ]
    //         }, {
    //             name: "Works 05 - 09",
    //             dropdownMenu: [
    //                 {name: "Nile - Kabutha", to: "/portfolio/nile-kabutha"},
    //                 {name: "Sleep Walker", to: '/portfolio/sleep-walker'},
    //                 {name: "Novara Conic", to: '/portfolio/novara-conic'},
    //                 {name: "Bastian Bux", to: '/portfolio/bastian-bux'},

    //             ]
    //         },
    //     ]
    // },
    {name: "Accueil", to: "/"},
    {name: "À propos", to: "/about"},
    {name: "Services", to: "/services"},
    {name: "Réalisations", to: "/portfolio"},
    {name: "Production Vidéo", to: "/video-production"},
    {name: "Web Design", to: "/webdesign-production"},
    {name: "Blog", to: "/blog"},
    {name: "Contact", to: "/contact"}
];

const DroowMenu = ({hamburger}) => {

    const {t} = useTranslation("common")

    let $key = 0;
    const getSubMenu = (items) => {
        $key++;
        if (items.dropdownMenu) {
            return (<Nav.Dropdown name={items.name}
                                key={$key}>{items.dropdownMenu.map(item => getSubMenu(item))}</Nav.Dropdown>);
        }
        return (
            <Nav.Link to={items.to} key={$key}>{t(items.name)}</Nav.Link>
        );
    }


    return (
        <Navbar hamburger={hamburger}>
            <Navbar.Brand to={"/"}>
                <Brand width="140px" height="140px"/>
            </Navbar.Brand>
            <SelectorLanguage/>
            <Navbar.Collapse cover="Menu">
                <Nav>
                    {menuContent.map(item => getSubMenu(item))}
                </Nav>
                <MenuContent className="section-margin"/>
            </Navbar.Collapse>
        </Navbar>
    );

}

DroowMenu.defaultProps = {
    hamburger: false
}


export default DroowMenu;