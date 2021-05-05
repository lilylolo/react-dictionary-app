import React, { useState } from "react";
import axios from "axios";
import Results from './Results'
import Photos from './Photos'
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("")
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }


    function handlePixabayResponse(response) {
        setPhotos(response.data.hits);
    }

   function search() {
            let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
            axios.get(apiUrl).then(handleDictionaryResponse);

            let pixabayApiKey = "21482582-81de24cd9f2082b4b2c2583d8";
            let pixabayApiUrl = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${keyword}&image_type=photo&per_page=6`
            axios.get(pixabayApiUrl).then(handlePixabayResponse);
        }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange (event) {
        setKeyword(event.target.value);

    }

    

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
   
    return (

        <div className="Dictionary">
            <section>
                <h2>What word would you like to search?</h2>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
             </section>
             
            <Results results={results}/>
            <Photos photos={photos} />
        </div>
    );
    } else {
        load();
        return "Loading";
    }
};