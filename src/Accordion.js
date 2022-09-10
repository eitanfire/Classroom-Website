import React, { useState } from 'react';
import { Button, Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


const Accordion = ({ title, content, image }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
      </div>
      <Card>
      {/* <div id='openCloseSymbols'>{isActive ? '🪐' : '🚀'}</div> */}
      <CardBody className="accordion-content-theme">
      {isActive && <div className="accordion-content">{content}
      {/* {image} */}
      </div>}
      </CardBody>
      </Card>
    </div>
  );
};

export default Accordion;