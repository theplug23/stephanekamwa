import React from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';


function MetaPost({date, category, separate, vues}) {
  const {t} = useTranslation("common")
    return (
      <Meta className="post-info">
          {date && <span className="post-date">{t("Posté le")} {date} </span>}
          {category && <div className="post-cat">
              {typeof category ==="object"? category.map((cat, index) => <span key={index} data-separate={separate}>{t(cat)}</span>) : <span>{t(category)}</span>}
          </div>}
          {vues && <span style={{ marginLeft: '20px'}}>{vues} {t("vues")}</span>}
      </Meta>
    )
}

MetaPost.defaultProps = {
    separate: ", ",
}

export const Meta = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.2px;
  word-spacing: 2px;
  
  span {
    margin-bottom: 8px;
  }

  .post-date, .post-cat {
    display: inline-block
  }

  .post-date {
    padding-right: 20px;
  }

  .post-cat span {

    &:not(:first-child):before {
      content: attr(data-separate);
    }
  }

`;


export default MetaPost;