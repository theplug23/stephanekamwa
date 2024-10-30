import React, { useState, useEffect } from 'react'
import Isotope from "isotope-layout";
import { useTranslation } from "react-i18next";
import {getPortfolioData} from "../../api/portfolio/PortfolioData";
import PortfolioProjectItem from './PortfolioProjectItem';
import {Row, Col, NavLink, Button} from 'react-bootstrap';
import MetaPost from '../header/MetaPost';
import { displayWords } from '../../utils';
import BgImage from '../header/BgImage';
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner'

function PortfolioProjectList({ className, ...restProps }) {
    const {t} = useTranslation("common")  
    const [projects, setProjects] = useState([])
    const dataPortfolio = getPortfolioData();
    const category = new Set();
    const [isLoading, setIsLoading] = useState(true);
    dataPortfolio.map((p) => {
    return typeof p.category === "object"
        ? p.category.map((i) => category.add(i))
        : category.add(p.category);
    });
    
    const [colValue, setColValue] = useState(12)

    useEffect(() => {
        getProjects()
        const screenWidth = window.screen.width
        if (screenWidth > 800) {
            setColValue(4)
        } else if (screenWidth  <= 800 && screenWidth > 430) {
           setColValue(6)
        } else {
            setColValue(12)
        }
    }, [])

    function getProjects() {
        axios.get('https://api.comtheplug.com/api/portfolio')
        .then(res => {
            setProjects(res.data)
            setIsLoading(false);
        })
    }

    return (
        <section className='mb-section'>
            <Row>
                {isLoading ?
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#B58E25', '#FFFFFF', '#B99226', '#FFFFFF', '#000000']}
                    /> :
                    projects.map(
                        (item, index) => {
                            const video = JSON.parse(item.video)
                            return (
                                <Col xs={colValue} key={index} style={{marginBottom: 50}} className='portfolio-item'>
                                    <a href={`portfolio/${item.slug}`}>
                                        <div className="inner-img">
                                            <BgImage
                                                className={"dsn-swiper-parallax-transform"}
                                                src={item.src}
                                                video={video}
                                                alt={item.title}
                                                overlay={2}
                                                height={"100%"}
                                            />
                                        </div>
                                        <div className="box-content background-section">
                                            {item.title && <h4 className='title-block' style={{ margin: '15px 0px'}}>
                                                <NavLink to={item.href} style= {{color: '#b99226'}}>{item.title}</NavLink>
                                            </h4>}
                                            <p className="mt-15">{item.skils}</p>
                                            <Button 
                                                href={item.href} 
                                                style= {{color: '#b99226', marginTop: '15px', textDecoration: 'underline'}}
                                            >
                                                {t("Voir plus")}
                                            </Button>
                                        </div>
                                    </a>
                                </Col>
                            );
                        }
                    )
                }
            </Row>
        </section>
    )
}

export default PortfolioProjectList