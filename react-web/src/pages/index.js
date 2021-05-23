import React from 'react'
import Home from './Home'
import About from './About'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as ROUTE from '../constants/route'

const App = () => {
  return (
    <>
      <Router>        
        <Header className="padding-10-15px" />
        <div className="main padding-10-15px">
          <Switch>
            <Route path={ROUTE.ABOUT}>         
              <About />
            </Route>
            <Route path={ROUTE.HOME}>
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer className="padding-10-15px" />
      </Router>
    </>
  )
}

export default App;