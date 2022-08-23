import { Col, Row, Container } from 'reactstrap';
import EitanInfo from '../features/EitanInfo.js';
import { accordionData } from '../utils/content';
import Calendar from '../components/Calendar.js';
import Accordion from '../Accordion';


const HomePage = () => {
    return   (
    <Container>
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
        </Container>
    );
};

export default HomePage;