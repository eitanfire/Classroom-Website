import React from 'react';
import '../App.css';
import { Col, Row, Container } from 'reactstrap';
import readMore from '../app/img/read-about-eitan-button.png';
import Contact from '../app/img/contact-button.png';
import Eitan from '../app/img/Eitans-portfolio-page-picture.png';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Footer from '../components/Footer.js';

const EitanInfo = () => {
    return (
                    <Card>
                          
                        <CardBody>
                            <Container className="border border-4 border-danger">
            <Row >
                
                <Col >
                    <img className="card-img-left mt-4" src={Eitan} alt='Eitans profile picture' />
                </Col >
               
                <Col >
                <Button   className='btn border border-4 btn-light mb-4 mt-4 btn-link '>
                    <Link to='/contact'>
                        
                        {/* <img className="offset-md-4" src={Contact} alt='Contact button' /> */}
                        Contact
                        </Link>
                        </Button>
                <Button   className='btn  border border-4 mb-4 btn-light btn-link '>
                <Link to='/read-more'>
                    Read about Eitan
                        {/* <img className="offset-md-2" src={readMore} alt='Read about Eitan' /> */}
                    </Link>
                    </Button>
                </Col>

            </Row>
            
        </Container>
        </CardBody>
                    </Card>
            );
        }
        
        {/* <Container className="border border-4 border-danger">
            <Row className="row justify-content-start">
                <Col className="col align-self-start">
                    <img src={Eitan} alt='Eitans profile picture' />
                </Col >
            <Col className="col align-self-start">
                    <Link to='/contact'>
                        <img src={Contact} alt='Contact button' />
                        </Link>
                        </Col>
            <Col className="col offset-md-3">
                    <Link to='/read-more'>
                        <img src={readMore} alt='Read about Eitan' />
                    </Link>
                </Col>
            </Row>
        </Container> */}

export default EitanInfo;