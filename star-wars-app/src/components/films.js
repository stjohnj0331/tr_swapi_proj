import React, { useEffect, useState } from "react"; 
import {getUrl} from './getUrl'
import '../site.css';
import background from "../images/background.png"
import {Button, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Row style={styles.container}>
                <h2 style={styles.h2}>Films</h2>
                <Row id="films">
                    {films.map((film, index) => <div key={index}><Button variant="outline-warning">{film.title}</Button></div>)}
                </Row>
            </Row>
        </>
    );
}

const styles = {
    container:{
        backgroundImage: `url(${background})`, 
        flex: 1
    },
    h2:{
        color: '#FFC933'
    }
}