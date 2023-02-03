import React, { useEffect, useState } from "react"; 
import {getUrl} from './getUrl'
import '../site.css';

export const Planets = () => {
    const [planets, setPlanets] = useState([])
    let url = 'https://swapi.dev/api/planets';

    useEffect(() => {
        getUrl(url)
        .then(listOfPlanets => setPlanets(listOfPlanets))
    
    }, [url]); 
    console.log(planets);
    return(
        <>
            <h2>Planets</h2>
            <section id="films">
                {planets.map((planet, index) => <div key={index}><button>{planet.name}</button></div>)}
            </section>
        </>

    );
}