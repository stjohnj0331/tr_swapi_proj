import React, { useEffect, useState } from "react"; 
import {getUrl} from './getUrl'

export const Films = () => {
    const [films, setFilms] = useState([])
    let url = 'https://swapi.dev/api/films';
  
 
    useEffect(() => {
        getUrl(url)
        .then(listOfFilms => setFilms(listOfFilms))
    
    }, [url]); 
    // async function getFilms(){
    //     const tempFilms = [];
    //     while(url){
    //         try{
    //             const fetchedFilms = await fetch(url)
    //                 .then(res => res.json())
    //                 .then(res => { url = res.next; return res })
    //                 .then(res => res.results)
    //                 tempFilms.push(...fetchedFilms)
    //         }
    //         catch (err){
    //             console.error("error reading films" + err.message);
    //         }
    //     }
    //     setFilms(tempFilms);
    // }

    // getFilms();
    console.log(films);
    return(
        <>
            <h2>Films</h2>
            <section id="films">
                {films.map((film, index) => <div key={index}>{film.title}</div>)}
            </section>
        </>

    );
}

