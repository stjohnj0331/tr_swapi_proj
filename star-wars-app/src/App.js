import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Films} from "./components/films"
import {Planets} from "./components/planets"
import {People} from "./components/people"


function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="films" element={<Films />} />
          <Route path="planets" element={<Planets />} />
          <Route path="people" element={<People />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
