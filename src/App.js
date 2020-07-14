import React from 'react'
import logo from './logo.svg'
import './App.css'
// importing components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AltFooter from './components/AltFooter'
import Homepage from './pages/Homepage'
import AboutMe from './pages/AboutMe'



const App = () => {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Footer /> */}
      <AltFooter />
    </div>
  )
}

export default App
