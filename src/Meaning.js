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
                    <p>
                        <span className="Definition">{definition.definition}</span>
                        <br />
                        <em className="Example">{definition.example}</em>
                        <br />
                        <Synonyms synonyms={definition.synonyms} />
                    </p>
                </div>
            )
        })}
        </section>

        </div>
    );
}