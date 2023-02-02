import { useState, useEffect } from 'react'

let url = 'https://swapi.dev/api/films';

export const People = () => {
    const [people, getPeople] = useState([]);

    getPeople()
    
    return(
        <h1>People</h1>
    )
}

async function getPeople(){
    try{
        const fetchedFilms = await fetch(url)
            .then(res => res.json())
            //.then(res => {console.log({res});return res})
            //films.push(...res.results)
            //.then(res => {url = res.next; return res})
            .then(res => res.results)
            //.then(res.map(p => ({...p, id: +getFilmID(p.url)})))
            //console.log(res)
        films.push(...fetchedFilms);
    }catch(ex){
        console.error("Error reading films", ex.message);
    }
    console.log("***all the films are ", films);
    renderFilms(films);
}

const renderFilms = films => {
    console.log("in render")
    const divs = films.map(film => {
      const el = document.createElement('div');
      el.addEventListener('click', () => goToPersonPage(film.id));
      el.textContent = film.title;
      return el;
    })
    filmsSection.replaceChildren(...divs)
  }

const styles = {

}