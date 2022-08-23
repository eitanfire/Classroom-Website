import React from 'react';
import '../App.css';
import { Col, Row, Container } from 'reactstrap';
import  Banner from '../app/img/class-website-banner.png';
import Logo from '../app/img/logo.jpg';
import chalk from 'chalk';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return(
    <div className='App'>
            <Container>
                <Row id= 'banner'>
                <Col className="col-6 col-md-4 float-start">
                    <img src={Banner} alt='Banner' />            
                </Col>
                <Col className="col-6 col-md-4 d-none d-lg-block">
                <img id="logo" src={Logo} alt='September School logo' align="left"/>
                        {/* <h2 id='loveLearning'className="col-sm-3 col-md-4 d-none d-lg-block">
                            Reawakening the love of learning for <strong>50 years</strong>
                        </h2> */}
                </Col>
                </Row>
            </Container>
    </div>
    );
}

export default Header;