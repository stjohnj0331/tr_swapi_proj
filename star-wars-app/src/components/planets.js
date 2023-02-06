import React, { useEffect, useState } from "react"; 
import {getUrl} from './getUrl'
import '../site.css';
import background from "../images/background.png"
import {Button, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Row style={styles.container}>
                <h2 style={styles.h2}>Planets</h2>
                <Row id="films">
                    {planets.map((planet, index) => <div key={index}><Button variant="outline-warning">{planet.name}</Button></div>)}
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