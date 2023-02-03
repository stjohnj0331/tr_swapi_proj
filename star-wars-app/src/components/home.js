//import '../site.css';
import background from "../images/background.png"
import React, { useEffect, useState} from "react"; 
import {Button, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
    return <>
        <Row style={styles.container}>
            <Row>
                <h2 style={styles.h2}>Home Page</h2>
            </Row>    
        </Row>
    </>
}

const styles = {
    container:{
        backgroundImage: `url(${background})`, 
        flex: 1,
        height: "100vh"
    },
    h2:{
        color: '#FFC933'
    }
}