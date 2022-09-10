import Employment from "./employment"
import Home from "./Home"
import Menu from "./Menu"
import Personal from "./personal"
import Qualifications from "./qualifications"
import References from "./references"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import './App.css'


export default function App() {
  return (<>
    <Menu />

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/personal" element={<Personal />} />

        <Route path="/qualifications" element={<Qualifications />} />
        
        <Route path="/employment" element={<Employment />} />

        <Route path="/references" element={<References />} />
      </Routes>
    </Router>

    <footer>&copy;2022</footer>
  </>)
}