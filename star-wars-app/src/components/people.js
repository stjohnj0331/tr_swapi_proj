import React, { useEffect, useState } from "react"; 
import {getUrl} from './getUrl'

export const People = () => {
    const [people, setPeople] = useState([])
    let url = 'https://swapi.dev/api/people';
 
    useEffect(() => {
        getUrl(url)
        .then(listOfPeople => setPeople(listOfPeople))
    
    }, [url]); 

    console.log(people);
    return(
        <>
            <h2>People</h2>
            <section id="People">
                {people.map((person, index) => <div key={index}><button>{person.name}</button></div>)}
            </section>
        </>

    );
}


