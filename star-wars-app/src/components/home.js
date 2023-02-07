import React, { useEffect, useState} from "react"; 
import {Button, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
    return <>
        <Row>
            <Row>
                <h2 style={styles.h2}></h2>
            </Row>    
        </Row>
    </>
}

const styles = {
    h2:{
        color: '#FFC933'
    }
}