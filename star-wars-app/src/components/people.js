import React, { useEffect, useState} from "react"; 
import {getData} from '../rest/index.js'
import {Button, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const People = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {

        let promise = getData("http://localhost:4000/people");
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
                            return <li style={styles.h2} key={index}>{person.fields.name}</li>
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