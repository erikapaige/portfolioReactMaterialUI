import React from 'react'
import logo from './logo.svg'
import './App.css'
// bring in react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
// importing components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AltFooter from './components/AltFooter'
import Homepage from './pages/Homepage'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/aboutme'>
            <AboutMe />
          </Route>
          <Route exact path='/portfolio'>
           <Portfolio />
          </Route>
        </Switch>
        {/* <Footer /> */}
        <AltFooter />
      </div>
    </Router>
  )
}

export default App
