import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import {Films} from "./components/films"
import {Planets} from "./components/planets"
import {People} from "./components/people"


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
          {/* <Route index element={<Home />} /> */}
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

export default App;
