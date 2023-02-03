import React, { useEffect, useState } from "react"; 
import {getUrl} from './getUrl'
import '../site.css';

export const People = () => {
    const [people, setPeople] = useState([])
    let url = 'https://swapi.dev/api/people';
 
    useEffect(() => {
        //add loop to get all the pages
        //or truly paginate with a "next page" button
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


