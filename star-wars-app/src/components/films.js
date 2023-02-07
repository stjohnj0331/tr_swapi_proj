import React, { useEffect, useState } from "react"; 
import {getUrl} from './getUrl'
import {Button, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Films = () => {
    const [films, setFilms] = useState([])
    useEffect(() => {

        let promise = getFilms();
        promise.then(
            (text) => {
                let filmsArray = text;
                console.log(filmsArray);
                setFilms(filmsArray);
            }
        )
    }, []);
    return(
        <>
            <Row>
                <h2 style={styles.h2}>Films</h2>
                <Row id="films">
                    {films.map((film, index) => <div key={index}><Button variant="outline-warning">{film.title}</Button></div>)}
                </Row>
            </Row>
        </>
    );
}

const styles = {
    h2:{
        color: '#FFC933'
    }
}