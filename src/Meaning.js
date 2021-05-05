import React from 'react';
import Synonyms from './Synomyns'
import './Meanings.css'

export default function Meaning(props) {
    return (
        <div className="Meaning">
        <section>
        <h3>{props.meaning.partOfSpeech}</h3>

        {props.meaning.definitions.map(function (definition, index)
        {
            return (
                <div className="Meanings" key={index}>
                        <span className="Definition">{definition.definition}</span>
                        <div className="Example"><em>{definition.example}</em></div>
                        <div><Synonyms synonyms={definition.synonyms} /></div>
            
                </div>
            )
        })}
        </section>

        </div>
    );
}