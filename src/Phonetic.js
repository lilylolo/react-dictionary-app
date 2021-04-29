import React from 'react';

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            {props.phonetic.text} <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
        </div>
    )

}