import React, { useEffect, useState} from "react"; 
import {getUrl} from './getUrl'
import {Button, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPeople } from '../rest/index.js';

export const People = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {

        let promise = getPeople();
        promise.then(
            (text) => {
                let peopleArray = text;
                console.log(peopleArray);
                setPeople(peopleArray);
            }
        )
    }, []);
    /* let url = 'https://swapi.dev/api/people';
 
    useEffect(() => {
        //add loop to get all the pages
        //or truly paginate with a "next page" button
        getUrl(url)
        .then(listOfPeople => setPeople(listOfPeople))
    
    }, [url]); 

    console.log(people); */
    return(
        <>
            <Row>
                <h2 style={styles.h2}>People</h2>
                <Row id="People">
                    {people.map( 
                        (person, index) => {
                            return <li key={index}>{person.name}</li>
                        }
                    )}
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