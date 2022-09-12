import Film from '../app/img/film-banner.png';
import Epics from '../app/img/epics-banner.png';
import Programming from '../app/img/programming-banner.png';
import Survival from '../app/img/survive-the-world-banner.png';
import '../App.css';

export const accordionData = [
  { 
    icon: <span className='icons'>📽</span>,
    title: <span ><span id='icon'>📽</span>  Film</span>,
    // title:  ` Film`,
    image: <img className="classImage mx-auto" src={Film} alt='Film banner' />,
    content: 
        < >
          <div id='filmColor'>
          <a 
          role='button'
          className='btn btn-light btn-link'
          href='https://docs.google.com/document/d/18EFYRk3c-5Y1wGQCO-ZzfasrFPO6V9Trhr3eDgPDEKY/edit?usp=sharing'target="_blank"  rel="noopener noreferrer">
        ✏️ Warm-Up Questions for Film
          </a>

          <a
          role='button'
          className='btn btn-light btn-link'
          href='https://classroom.google.com/u/1/c/NDk3NTAxMzY5NjMw' target="_blank"  rel="noopener noreferrer">
          📚 Classroom Page
          </a>

          <a
          role='button'
          className='btn btn-light btn-link'
          href='https://docs.google.com/document/d/1-ct5ojv5wnIFi2BEN6KSQpRi-XNPMddGc6i9x4i2dB0/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
          Honors & Extra Credit
          </a>

          <a
          role='button'
          className='btn btn-light btn-link'
          href='https://docs.google.com/document/u/1/d/1yR1lESYS7ZWYixmg3kjDqU4PGZwXBjFEgef_vt8vqZk/edit' target="_blank" rel="noopener noreferrer">
          Course Description
          </a>
          
            </div>
          </>
  },
  { 
    icon: <span className='icons'>👩🏿‍💻</span>,
    title: <span ><span id='icon'>👩🏿‍💻</span>  Programming</span>,
    image: <img className="classImage mx-auto" src={Programming} alt='Programming banner' />,
    content: 
        < >
     <div id='programmingColor' >
          <a 
          role='button'
          className='btn btn-light btn-link'
          href='https://docs.google.com/document/d/1jphl8btCdUDx29R0w4YJY3KA9PgyjdRWO5dmPQOFoSY/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
          ✏️ Warm-Up Questions for Programming
          </a>

          <a
          role='button'
          className='btn btn-light btn-link'
          href='https://classroom.google.com/u/1/c/NTM4NTIyMjY5MzUz' target="_blank" rel="noopener noreferrer">
          📚 Classroom Page
          </a>

          <a
          role='button'
          className='btn btn-light btn-link'
          href='https://docs.google.com/document/d/1WjDPLyE6bn7bbq1AWPDyLj3vLUvgBibL_16e2_TViUM/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
          Honors & Extra Credit
          </a>

          <a
          role='button'
          className='btn btn-light btn-link'
          href='https://docs.google.com/document/u/1/d/1zsWaLaGfaWAjilx5ikrSGXRmq20ydaqAyRf_RKMhbUY/edit' target="_blank" rel="noopener noreferrer">
          Course Description
          </a>
          
            </div>
          </>
  },
  {
    
    icon: '⚔',
    title: <span ><span id='icon'>⚔</span>  Epics</span>,
    image: <img className="classImage mx-auto"src={Epics} alt='Epics banner' />,
    content:  
    < >
     <div id='epicsColor'>
    <a
    role='button'
    className='btn btn-light btn-link'
    href='https://docs.google.com/document/d/1dxNDDvEg13rQXPFgN_05Jq4d34O498dfION8k6oisFM/edit?usp=sharing' target="_blank"  rel="noopener noreferrer">
  ✏️ Warm-Up Questions for Epics
    </a>

    <a
    role='button'
    className='btn btn-light btn-link'
    href='https://classroom.google.com/u/1/c/NDk3NTAxNDI0OTQz' target="_blank"  rel="noopener noreferrer">
    📚 Classroom Page
    </a>

    <a
    role='button'
    className='btn btn-light btn-link'
    href='https://docs.google.com/document/d/1QfKDnU4j-JTlKIE6JMCdapAgH95i3jc_XamNiEMWhMw/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
    Honors & Extra Credit
    </a>

    <a
    role='button'
    className='btn btn-light btn-link'
    href='https://docs.google.com/document/d/1V_O_Gi1ILTeoalAuvUfy9bhWXfGj85VPNt3p3Ei2bQc/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
    Course Description
    </a>
    </div>
    </>
  },
  {
    // title: `🧭`,
    title: <span ><span id='icon'>🧭</span>  Survive the World!</span>,
    // title: <span><span style={{ color: 'red' }}>🧭</span>  Survive the World!</span>,
    // icon: <span style={{ color: 'red' }}>🧭</span>,
    // icon: <span style={{ color: 'red' }}>🧭</span>,
    // Survive the World!,
    // title: `Survive the World!`,
    image: <img className="classImage mx-auto" src={Survival} alt='Survive the World banner' />,
    content: 
    < >
         <div id='stwColor'>
    <a
    role='button'
    className='btn btn-light btn-link'
    href='https://docs.google.com/document/d/1RaIlhaK5Zr4dBh2vGJDRgTUknocZDSNfc85rzBLyNxM/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
  ✏️ Warm-Up Questions for Survive the World!
    </a>

    <a
    role='button'
    className='btn btn-light btn-link'
    href='https://classroom.google.com/u/1/c/NTI2MzY3MTY1NDY0' target="_blank" rel="noopener noreferrer">
    📚 Classroom Page
    </a>

    <a
    role='button'
    className='btn btn-light btn-link'
    href='https://docs.google.com/document/d/11zngy-feCi3cO8GU7kg_uhJJ-vh4J7AI8ITwTRaoANY/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
    Honors & Extra Credit
    </a>

    <a
    role='button'
    className='btn btn-light btn-link'
    href='https://docs.google.com/document/d/1TdTq_k_Nu9NzwealS8cJjohWcGZoSXSDdl4LHLXUm5Y/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
    Course Description
    </a>
    </div>
    </>

  }
];