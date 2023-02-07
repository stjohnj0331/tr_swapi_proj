import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import {Films} from "./components/films"
import {Planets} from "./components/planets"
import {People} from "./components/people"
import {Home} from "./components/home"
import background from "./images/background.png"
import {Button, Row, Col, ButtonGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <Row style={styles.container} className="img-fluid mx-auto">
      <header className='nav'>
        <ButtonGroup>
          <Col xs={8}></Col>
          <Col><Button variant="warning"><Link style={styles.nav} to="/">Home</Link></Button></Col>
          <Col><Button variant="warning"><Link style={styles.nav} to ='/films'>Films</Link></Button></Col>
          <Col><Button variant="warning"><Link style={styles.nav} to ='/planets'>Planets</Link></Button></Col>
          <Col><Button variant="warning"><Link style={styles.nav} to ='/people'>People</Link></Button></Col>
        </ButtonGroup>
      </header>
      <main>
        <Row>
          <Routes>
              <Route index element={<Home />} />
              <Route path="films" element={<Films />} />
              <Route path="planets" element={<Planets />} />
              <Route path="people" element={<People />} />
          </Routes>
        </Row>
      </main>
      <footer style={styles.footer}>
        Copyright &copy; kmj.com {new Date().getUTCFullYear()}
      </footer>
    </Row>
    </BrowserRouter>
  );
}

const styles = {
  container:{
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    height: "100vh"
  },
  h2:{
    color: '#FFC933'
  },
  nav:{
    color: "black",
    height: "5%"
  }, 
  body:{
    height: "90%"
  },
  footer:{
    position: "absolute",
    bottom: 0,
    height: '5%', 
    color: '#FFC933'
  }
}
export default App;
