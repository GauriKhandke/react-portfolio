import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills'
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Header />
        {/* <Switch> */}
          <About/>
          <Skills />
          <Portfolio/>
        {/* </Switch> */}
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
