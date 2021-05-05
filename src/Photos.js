import React from 'react';
import './Photos.css'

export default function Photos(props) {
    if (props.photos) {
        return (
        <section className="Photos">
                    <div className="row">
                            {props.photos.map(function (photo, index) {
                            return ( 
                                <div className="col-4" key={index}>
                                <a href={photo.pageURL} target="_blank" rel="noreferrer">
                                <img src={photo.webformatURL} alt="/" className="img-fluid"/>
                                </a>
                                </div>
                            );
    })}
                    </div>
                </section>
        );
    } else {
        return null;
    }

};