import React from 'react';
import '../App.css';
import { Col, Row, Container } from 'reactstrap';
import readMore from '../app/img/read-about-eitan-button.png';
import Contact from '../app/img/contact-button.png';
import Eitan from '../app/img/Eitans-portfolio-page-picture.png';

const EitanInfo = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={Contact} alt='Contact button' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={Eitan} alt='Eitans profile picture' />
                </Col>
            </Row>
            <Row>
                <Col>
                
                    <img src={readMore} alt='Read about Eitan' />
                </Col>
            </Row>
        </Container>
    );
}

export default EitanInfo;