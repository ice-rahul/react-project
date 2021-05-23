import React from 'react'
import Home from './Home'
import About from './About'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>        
        <Header />
        <Switch>
          <Route path="/about">         
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;