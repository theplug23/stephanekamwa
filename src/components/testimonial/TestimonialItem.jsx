import React from 'react'
import LazyImg from "../LazyImg";

function TestimonialItem({src, authorName, label, description}) {
    return (

        <div className="testimonial-item">
            <p className='mb-25'>{description}</p>

            <div className="author-box">
                {src && <span className="avatar">
                    {/* <LazyImg className='cover-bg-img' src={src} alt={authorName}/> */}
                </span>}
                <h5 className="auth-info">{authorName}{(authorName && label) && ','} <span style={{color: '#b99226'}}>{label}</span></h5>

            </div>
        </div>
    )
}


export default TestimonialItem;