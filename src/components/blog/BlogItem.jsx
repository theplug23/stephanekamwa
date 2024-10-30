import React from 'react'
import { useTranslation } from 'react-i18next';
import './style.scss'
import MetaPost from "../header/MetaPost";
import NavLink from "../button/NavLink";
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function BlogItem({id, image, category, title, author, href}) {
    const { t } = useTranslation("common")

    return (
        <React.Fragment>
            <Helmet>
                <meta property="og:image" content={`%PUBLIC_URL%/${image}`} />
                <meta property="og:image:type" content="image/jpg" />
            </Helmet>

            <div className="blog-item">
                <div className="box-img">
                    <img src={image} alt="article_image"/>
                </div>
                <div className="box-content background-section">
                    {category && <MetaPost category={category} separate=", "/>}
                    {title && <h4 className='title-block'>
                        <NavLink to={href} style= {{color: '#b99226'}}>{title}</NavLink>
                    </h4>}
                    {author && <p className="mt-15">{author}</p>}
                    <Button 
                        href={`${href}`} 
                        style= {{color: '#b99226', marginTop: '15px', textDecoration: 'underline'}}
                    >
                        {t("Voir plus")}
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BlogItem