import './App.css';
import Calendar from './components/Calendar.js';
import Header from './components/Header';
import EitanInfo from './features/EitanInfo.js';

import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GoogleChart from './components/GoogleChart';
import StudentDashboard from './components/StudentDashboard';
import { Col, Row, Container } from 'reactstrap';
import Accordion from './Accordion';
import { accordionData } from './utils/content';
import { Routes, Route } from 'react-router-dom';
import EitansIntro from './pages/EitansIntro';
import ContactForm from './pages/ContactForm';
import HomePage from './pages/HomePage'

function App() {
  return (
    
    <div className="App">
       
      <Container>
        <Row>
            <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='read-more' element={<EitansIntro />} />
            <Route path='contact' element={<ContactForm />} />
          </Routes>
        </Row>
        <Row>
          <Col className="col-6 col-md-4 d-none d-lg-block">
            <EitanInfo />
          </Col>
          <Col >
          <div className="accordion" >
        {accordionData.map(({ title, content, image }) => (
          <Accordion title={title} content={content} image={image} />
        ))}
      </div>
          </Col>
          <Row >
          <Col >
            <Calendar />
          </Col>
          </Row>
        </Row>
        {/* <Row>
          <Col>
          <GoogleChart />
          </Col>
        </Row> */}
      </Container >
    </div>
    
  );
}


export default App;
