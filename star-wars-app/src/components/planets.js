import React, { useEffect, useState } from "react"; 
import {getUrl} from './getUrl'
import {Button, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Planets = () => {
    const [planets, setPlanets] = useState([])
    useEffect(() => {

        let promise = getPlanets();
        promise.then(
            (text) => {
                let planetsArray = text;
                console.log(planetsArray);
                setPlanets(planetsArray);
            }
        )
    }, []);
    // let url = 'https://swapi.dev/api/planets';

    // useEffect(() => {
    //     getUrl(url)
    //     .then(listOfPlanets => setPlanets(listOfPlanets))
    
    // }, [url]); 
    // console.log(planets);
    return(
        <>
            <Row>
                <h2 style={styles.h2}>Planets</h2>
                <Row id="films">
                    {planets.map((planet, index) => <div key={index}><Button variant="outline-warning">{planet.name}</Button></div>)}
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