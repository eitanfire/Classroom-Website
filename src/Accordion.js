import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';

const Accordion = ({ icon, title, content, image }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>

        {/* const icon = [📽, 👩🏿‍💻, ⚔, 🧭 ]
        const fancyTitle = icon.map(icon => {
            return icon+{title} 
        }) */}
{/* <CardImg>{icon}</CardImg> */}
      <CardTitle>{icon}{title}{image}
      {/* <span id='openCloseSymbols' style={{ color: 'red' }}>{isActive ? ' 🪐' : ' 🚀'}</span> */}
      </CardTitle>
      </div>
      <Card>
      <CardBody className="accordion-content-theme">
      {isActive && <div className="accordion-content" >{content}
      {/* <CardImg>{image}</CardImg> */}
      </div>}
      </CardBody>
      </Card>
    </div>
  );
};

export default Accordion;