import './App.css';
import Calendar from './components/Calendar.js';
import Header from './components/Header';
import EitanInfo from './features/EitanInfo.js';

import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GoogleChart from './components/GoogleChart';
import StudentDashboard from './components/StudentDashboard';
// import { Col, Row, Container } from 'reactstrap';
import Accordion from './Accordion';
import { accordionData } from './utils/content';
import { Routes, Route } from 'react-router-dom';
import EitansIntro from './pages/EitansIntro';
import ContactForm from './pages/ContactForm';
import HomePage from './pages/HomePage'

function App() {
  return (
    
    <div className="App">
            <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='read-more' element={<EitansIntro />} />
            <Route path='contact' element={<ContactForm />} />
          </Routes>
    </div>
    
  );
}


export default App;
