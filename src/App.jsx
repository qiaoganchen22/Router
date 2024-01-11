import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './components/Nav'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'

function App() {

  return (
    <>
      <Router>
        <Nav />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/blue' element={<Blue/>}></Route>
            <Route path='/red' element={<Red/>}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
