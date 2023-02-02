import React, { useEffect, useState } from "react"; 

export const People = () => {
    const [people, setPeople] = useState([])
    let url = 'https://swapi.dev/api/people';
  
/* 
    useEffect(() => {
        fetch(`https://swapi.dev/api/films/1`)
            .then(res = res.json())
            .then((res) => {
                setFilm(res);
            })
    }, []); */
    async function getPeople(){
        const tempPeople = [];
        while(url){
            try{
                const fetchedPeople = await fetch(url)
                    .then(res => res.json())
                    .then(res => { url = res.next; return res })
                    .then(res => res.results)
                    //.then(res.map(p => ({...p, id: +getFilmID(p.url)})))
                    tempPeople.push(...fetchedPeople)
            }
            catch (err){
                console.error("error reading people" + err.message);
            }
        }
        setPeople(tempPeople);
    }

    getPeople();
    console.log(people);
    return(
        <>
            <h2>Films</h2>
            <section id="people">
                {people.map((person, index) => <div key={index}>{person.title}</div>)}
            </section>
        </>

    );

    
}
const getFilmID = (url) => {
    const input = /.*film\/(\d+).*/;
    const matches = url.match(input);
    console.log(matches);
    if(!matches) throw "Not a StarWars film.";
    return matches[1];
}

