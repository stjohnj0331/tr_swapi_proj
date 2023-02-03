import React, { useEffect, useState} from "react"; 
import {getUrl} from './getUrl'
//import '../site.css';
import background from "../images/background.png"
import {Button, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const People = () => {
    const [people, setPeople] = useState([])
    let url = 'https://swapi.dev/api/people';
 
    useEffect(() => {
        //add loop to get all the pages
        //or truly paginate with a "next page" button
        getUrl(url)
        .then(listOfPeople => setPeople(listOfPeople))
    
    }, [url]); 

    console.log(people);
    return(
        <>
            <Row style={styles.container}>
                <h2 style={styles.h2}>People</h2>
                <Row id="People">
                    {people.map((person, index) => <div key={index}><Button variant="outline-warning">{person.name}</Button></div>)}
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