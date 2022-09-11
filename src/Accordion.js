import React, { useState } from 'react';
import { Card, CardBody } from 'reactstrap';

const Accordion = ({ icon, title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>

        {/* const icon = [📽, 👩🏿‍💻, ⚔, 🧭 ];
        const fancyTitle = icon.map(fancyTitle => icon+{title} ) */}
        
        {icon}{title}<span id='openCloseSymbols' style={{ color: 'red' }}>{isActive ? ' 🪐' : ' 🚀'}</span>
      </div>
      <Card>
      <CardBody className="accordion-content-theme">
      {isActive && <div className="accordion-content" >{content}
      {/* {image} */}
      </div>}
      </CardBody>
      </Card>
    </div>
  );
};

export default Accordion;