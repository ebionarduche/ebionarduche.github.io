import './App.css';
import React from 'react';
import Projects from './components/Projects';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
    return (
        <div className="App">
            <Main />
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
