import { Row, Col, Button, NavLink } from "react-bootstrap";
import BgImage from "../header/BgImage";
import { displayWords } from "../../utils";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LazyImg from "../LazyImg";

const WebDesignList = ({projects}) => {
    const [colValue, setColValue] = useState(12)
    const {t} = useTranslation("common")

    useEffect(() => {
        const screenWidth = window.screen.width
        if (screenWidth > 800) {
            setColValue(4)
        } else if (screenWidth  <= 800 && screenWidth > 430) {
           setColValue(6)
        } else {
            setColValue(12)
        }
    }, [])

    return (
        <section className='mb-section'>
            <Row>
                {projects.map(
                    (item, index) => {
                        return (
                            <Col xs={colValue} key={index} className='portfolio-item' style={{marginBottom: '20px'}}>
                                <a href={`portfolio/${item.slug}`}>
                                    <div className="inner-img">
                                        <LazyImg className="cover-bg-video" src={item.srcSlider} alt={item.title}/>
                                    </div>
                                    <div className="box-content background-section">
                                        {item.title && <h4 className='title-block' style={{ margin: '15px 0px'}}>
                                            <NavLink to={item.href} style= {{color: '#b99226'}}>{item.title}</NavLink>
                                        </h4>}
                                        <p className="mt-15">{t(item?.skils)}</p>
                                        <Button 
                                            href={item.href} 
                                            style= {{color: '#b99226', marginTop: '15px', textDecoration: 'underline'}}
                                        >
                                            {t("Voir le site internet")}
                                        </Button>
                                    </div>
                                </a>
                            </Col>
                        );
                    }
                )}
            </Row>
        </section>
    )
}

export default WebDesignList