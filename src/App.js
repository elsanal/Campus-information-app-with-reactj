import React, {Suspense} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import logo from './images/logo/app_logo.png'
import Header from './Components/Header'
import Home from './Pages/Home'
import Scholarship from './Pages/Scholarship'
import University from './Pages/University'
import Top from './Pages/Top'
import Advice from './Pages/Advice'
import Job from './Pages/Job'
import About from './Pages/About'
import Footer from './Components/Footer'
import Life from './Pages/StudentLife'
import Abroad from './Pages/StudyAbroad'
import Career from './Pages/CareerSalary'
import ScholarshipDetail from './Detail/ScholarshipDetail'

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
                <Route component={ScholarshipDetail} path="/scholar/detail/:id" />
            </Switch>
            <Footer/>
          </Router>
      </div>
    </Suspense>
  );
}


export default App
