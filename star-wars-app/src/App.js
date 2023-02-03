import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import {Films} from "./components/films"
import {Planets} from "./components/planets"
import {People} from "./components/people"
import {Home} from "./components/home"
import background from "./images/background.png"
import {Button, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <header className='nav'>
      <section>
        <Link to="/">Home</Link>
        <Link to ='/films'>Films</Link>
        <Link to ='/planets'>Planets</Link>
        <Link to ='/people'>People</Link>
      </section>
    </header>
      <Routes>
          <Route index element={<Home />} />
          <Route path="films" element={<Films />} />
          <Route path="planets" element={<Planets />} />
          <Route path="people" element={<People />} />
      </Routes>
      <footer>
        blah blah blah footer notes here
      </footer>
    </BrowserRouter>
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
export default App;
