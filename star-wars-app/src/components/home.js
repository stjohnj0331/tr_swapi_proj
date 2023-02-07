import React, { useEffect, useState} from "react"; 
import {Button, Row} from 'react-bootstrap'
import background from "../images/background.png"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
    return <>
        <Row style={styles.body}>
            <Row>
                <h2 style={styles.h2}></h2>
            </Row>    
        </Row>
    </>
}

const styles = {
    h2:{
        color: '#FFC933'
    },
    body:{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        height: "80vh", 
        width: "100%"
    }
}