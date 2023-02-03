import React, { useEffect, useState } from "react"; 
import {getUrl} from './getUrl'

export const Planets = () => {
    const [films, setFilms] = useState([])
    let url = 'https://swapi.dev/api/planets';
  
 
    useEffect(() => {
        getUrl(url)
        .then(listOfFilms => setFilms(listOfFilms))
    
    }, [url]); 
    console.log(films);
    return(
        <>
            <h2>Films</h2>
            <section id="films">
                {films.map((film, index) => <div key={index}><button>{film.name}</button></div>)}
            </section>
        </>

    );
}