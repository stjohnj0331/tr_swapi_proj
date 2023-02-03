import React, { useEffect, useState } from "react"; 
import {getUrl} from './getUrl'

export const Films = () => {
    const [films, setFilms] = useState([])
    let url = 'https://swapi.dev/api/films';
  
 
    useEffect(() => {
        getUrl(url)
        .then(listOfFilms => setFilms(listOfFilms))
    
    }, [url]); 
    console.log(films);
    return(
        <>
            <h2>Films</h2>
            <section id="films">
                {films.map((film, index) => <div key={index}><button>{film.title}</button></div>)}
            </section>
        </>

    );
}

