import Film from '../app/img/film-banner.png';
import Epics from '../app/img/epics-banner.png';
import Programming from '../app/img/programming-banner.png';
import Survival from '../app/img/survive-the-world-banner.png';

export const accordionData = [
  {
    title: `📽 Film`,
    image: <img width="100%" src={Film} alt='Film banner' />,
    content: 
        <>
          <a
          role='button'
          className='btn btn-light btn-link'
          href='https://docs.google.com/document/d/18EFYRk3c-5Y1wGQCO-ZzfasrFPO6V9Trhr3eDgPDEKY/edit?usp=sharing' target="_blank">
        ✏️ Warm-Up Questions for Film
          </a>

          <a
          role='button'
          className='btn btn-light btn-link'
          href='https://classroom.google.com/u/1/c/NDk3NTAxMzY5NjMw' target="_blank">
          📚 Classroom Page
          </a>

          <a
          role='button'
          className='btn btn-light btn-link'
          href='https://docs.google.com/document/d/1-ct5ojv5wnIFi2BEN6KSQpRi-XNPMddGc6i9x4i2dB0/edit?usp=sharing' target="_blank">
          Honors & Extra Credit
          </a>

          <a
          role='button'
          className='btn btn-light btn-link'
          href='https://docs.google.com/document/u/1/d/1yR1lESYS7ZWYixmg3kjDqU4PGZwXBjFEgef_vt8vqZk/edit' target="_blank">
          Course Description
          </a>
          </>
  },
  {
    title: '👩🏿‍💻 Programming and Web Development',
    image: <img width="100%" src={Programming} alt='Programming banner' />,
    content: ``
  },
  {
    title: '⚔ Epics',
    image: <img width="100%" src={Epics} alt='Epics banner' />,
    content: ``
  },
  {
    title: `🧭 Survive the World!`,
    image: <img width="100%" src={Survival} alt='Survive the World banner' />,
    content:``

  }
];