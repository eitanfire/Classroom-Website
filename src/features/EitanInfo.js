import React from 'react';
import '../App.css';
import { Col, Row, Container } from 'reactstrap';
import readMore from '../app/img/read-about-eitan-button.png';
import Contact from '../app/img/contact-button.png';
import Eitan from '../app/img/Eitans-portfolio-page-picture.png';
import { Link } from 'react-router-dom';

const EitanInfo = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Link to='/contact'>
                        <img src={Contact} alt='Contact button' />
                    </Link>

                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={Eitan} alt='Eitans profile picture' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to='/read-more'>
                        <img src={readMore} alt='Read about Eitan' />
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default EitanInfo;