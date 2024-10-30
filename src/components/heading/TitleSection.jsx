import React from 'react';
import {dsnCN} from "../../hooks/helper";

function TitleSection({className, tag: Tag = 'h2', children, description}) {

    return (
        <div className={dsnCN('section-heading', className)}>
            {description && <h2 className="title-sub" style= {{color: '#b99226',fontSize: '17px'}}>{description}</h2>}
            {children && <Tag className="title-section">{children}</Tag>}
        </div>
    );
}

export default TitleSection;