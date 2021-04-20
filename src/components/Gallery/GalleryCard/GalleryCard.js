import React from 'react';
import './GalleryCard.scss';
function GalleryCard(props){
    return(
        <div className="gallery-card">
            <img src={props.url} alt={props.alt}/>
            <h4 className="title">{props.description}</h4>
        </div>
    )
}

export default GalleryCard;