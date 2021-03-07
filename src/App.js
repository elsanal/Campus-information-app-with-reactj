import React, {Suspense} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import logo from './images/logo/app_logo.png'
import Header from './components/Header'
import Home from './components/Home'
import Scholarship from './components/Scholarship'
import University from './components/University'
import Top from './components/Top'
import Advice from './components/Advice'
import Job from './components/Job'
import About from './components/About'
import Footer from './components/Footer'
import Life from './components/StudentLife'
import Abroad from './components/StudyAbroad'
import Career from './components/CareerSalary'
import ScholarshipDetail from './components/ScholarshipDetail'

// loading component for suspense fallback

function App() {
  return (
    <Suspense fallback="loading">
      <div className="app">
          <Router>
            <Header/>
            <Switch>
                <Route component={Home}  path="/" exact />
                <Route component={Home}  path="/home" exact />
                <Route component={Scholarship} path="/scholarship" />
                <Route component={University} path="/university" />
                <Route component={Job} path="/job" />
                <Route component={Top} path="/top" />
                <Route component={Advice} path="/advice" />
                <Route component={About} path="/about" />
                <Route component={Career} path="/career-salary" />
                <Route component={Abroad} path="/study-abroad" />
                <Route component={Life} path="/student-life" />
                <Route component={ScholarshipDetail} path="/detail" />
              </Switch>
              <Footer/>
          </Router>
      </div>
    </Suspense>
  );
}


export default App
