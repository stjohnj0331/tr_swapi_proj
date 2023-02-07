import React, { useEffect, useState } from "react"; 
import {getData} from '../rest/index.js'
import {Button, Row} from 'react-bootstrap'
import background from "../images/background2.png"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Films = () => {
    const [films, setFilms] = useState([])
    useEffect(() => {

        let promise = getData("http://localhost:4000/films");
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
            <Row style={styles.body}>
                <h2 style={styles.h2}>Films</h2>
                <Row id="films">
                    {films.map((film, index) => <div key={index}><Button variant="outline-warning">{film.fields.title}</Button></div>)}
                </Row>
            </Row>
        </>
    );
}

const styles = {
    h2:{
        color: '#FFC933'
    },
    body:{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundheight: "100vh"
    }
}