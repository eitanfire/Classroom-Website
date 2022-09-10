import { Col, Row, Container } from 'reactstrap';
import EitanInfo from '../features/EitanInfo.js';
import { accordionData } from '../utils/content';
import Calendar from '../components/Calendar.js';
import Accordion from '../Accordion';
import Footer from '../components/Footer.js';

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col className="col-6 col-md-3 d-none d-lg-block">
                    <EitanInfo />
                </Col>
                <Col className=" accordion col-12 col-md-9">
                    {accordionData.map(({ title, content, image }) => (
                        <Accordion title={title} content={content} image={image} />
                    ))}
                </Col>
                <Row >
                    <Col >
                        <Calendar />
                    </Col>
                </Row>
                    <Col>
                        {/* <Footer /> */}
                    </Col>
            </Row>
        </Container>
    );
};

export default HomePage;