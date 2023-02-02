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
                    tempPeople.push(...fetchedPeople)
            }
            catch (err){
                console.error("error reading films" + err.message);
            }
        }
        setPeople(tempPeople);
    }

    getPeople();
    console.log(people);
    return(
        <>
            <h2>People</h2>
            <section id="People">
                {people.map((person, index) => <div key={index}>{person.name}</div>)}
            </section>
        </>

    );
}

