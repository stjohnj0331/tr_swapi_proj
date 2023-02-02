import React, { useEffect, useState } from "react"; 

export const Films = () => {
  //  const [film, setFilm] = useState({})
    let films = [];
    let url = 'https://swapi.dev/api/films';
  
/* 
    useEffect(() => {
        fetch(`https://swapi.dev/api/films/1`)
            .then(res = res.json())
            .then((res) => {
                setFilm(res);
            })
    }, []); */
    async function getFilms(){
        while(url){
            try{
                const fetchedFilms = await fetch(url)
                    .then(res => res.json())
                    .then(res => { url = res.next; return res })
                    .then(res => res.results)
                    films.push(...fetchedFilms)
            }
            catch (err){
                console.error("error reading films" + err.message);
            }
        }
    
    }
    console.log(films);
    getFilms();
    return(
        <div className="peopleDiv">
            <h1>Films</h1>
            {films.map((film, index) => (
                <p key={index}>Title: {film.title}</p>
            ))}
        </div>
    );
}

