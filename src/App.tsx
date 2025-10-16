// App.tsx
import { useState } from 'react'
import './App.css'

const recapArray = [
  { pics: ['Img/DinnerDialogues1.png', 'Img/DinnerDialogues2.jpeg'], description: 'Dinner Dialogue' },
  { pics: ['Img/2024PanelPicture.jpeg', 'Img/Panel.jpeg'], description: 'Fall 2024 Panel' }
];

function Home() {
  return (
    <section className="home">
      <img src="Img/VMHIMG.jpeg" id="home-image" alt="OMBA Image" />
      <h1 id="home-text">OMBA Society</h1>
      <p id="home-desc">
        OMBA (Operations Management and Business Analytics) is a club that aims to bring students more knowledge about this major while also holding career-building events, professional networking opportunities, and even just fun ways to chat with current or previous OMBA majors.
      </p>
    </section>
  );
}

function About() {
  const members = [
    { img: 'Img/AnikaDeshmukh.png', title: 'President', name: 'Anika Deshmukh' },
    { img: 'Img/MaximLoukinov.JPG', title: 'President', name: 'Maxim Loukinov' },
    { img: 'Img/NoveenAwan.jpg', title: 'VP of Marketing', name: 'Noveen Awan' },
    { img: 'Img/NyssaPatel.JPG', title: 'VP of Marketing', name: 'Nyssa Patel' },
    { img: 'Img/NavyaGunna.JPEG', title: 'VP of Finance', name: 'Navya Gunna' },
    { img: 'Img/JamieJung.jpg', title: 'VP of Event Planning', name: 'Jamie Jung' },
    { img: 'Img/DenisKalinin.jpg', title: 'VP of Event Planning', name: 'Denis Kalinin' },
    { img: 'Img/HunterPearlstein.jpg', title: 'VP of Professional Affairs', name: 'Hunter Pearlstein' },
    { img: 'Img/NaaseraHusain.jpg', title: 'Chair of Fellowship', name: 'Naasera Husain' },
    { img: 'Img/Mae.PNG', title: 'VP of Administration', name: 'Mae Crews' },
    { img: 'Img/VisheshKhare.JPG', title: 'VP of Membership', name: 'Vishesh Khare' },
    { img: 'Img/Azraa.jpeg', title: 'Events Committee', name: 'Azraa Abdoul' },
    { img: 'Img/NatalieBaynes.JPG', title: 'Events Committee', name: 'Natalie Baynes' },
    { img: 'Img/ParidhiParekh.PNG', title: 'Director of Fellowship', name: 'Paridhi Parekh' },
    { img: 'Img/ShareenAhmad.jpg', title: 'Director of Fellowship', name: 'Shareen Ahmad' },
  ];

  return (
    <section className="about">
      <div className="container text-center">
        <h1 className="mb-4 fw-bold">About Us</h1>
        <p className="mb-5">OMBA Society is dedicated to providing opportunities for students to excel in business and leadership. Through networking, workshops, and community events, we aim to support our members' growth and success.</p>
        <div className="row row-cols-2 row-cols-md-4 g-4 justify-content-center">
          {members.map((m, i) => (
            <div className="col" key={i}>
              <img src={m.img} className="img-fluid rounded-circle mb-2" id="board-images" alt={m.title} />
              <p className="fw-bold mb-0">{m.title}</p>
              <p className="text-muted small">{m.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section className="events">
      <div className="container text-center">
        <h1 className="mb-4 fw-bold">Upcoming Events</h1>


          {/* If there are no events comment this out*/}
        {/* <div className="alert alert-info">No events coming up. Have a great summer!</div>*/}

        {/* ——— START: Single Event Card ——— */}
        <div className="d-flex justify-content-center">
          <a
            href="https://www.instagram.com/ombasocietyumd/"   // CHANGE: link to RSVP, IG, TerpLink, etc.
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <div className="d-flex align-items-center bg-white shadow-sm rounded p-3 mb-4" style={{ maxWidth: '700px' }}>
              {/* LEFT: Date box */}
              <div
                className="text-center bg-light border rounded p-2 me-3"
                style={{ width: '80px', color: '#000' }}
              >
                <div className="text-uppercase fw-bold small">Oct</div>   {/* CHANGE: Month (3 letters) */}
                <div className="fs-3 fw-bold">21</div>                    {/* CHANGE: Day (number) */}
              </div>

              {/* RIGHT: Event text */}
              <div className="text-start">
                <h5 className="text-dark mb-1">OMBA x Guest Speaker</h5>  {/* CHANGE: Event title */}
                <p className="text-muted mb-1 small">
                  AI & Analytics in Business • 6–7pm • VMH 1330             {/* CHANGE: brief details */}
                </p>
                <p className="text-primary small mb-0">Tap for details →</p>
              </div>
            </div>
          </a>
        </div>
        {/* ——— END: Single Event Card ——— */}



        <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: '1000px' }}>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=b21iYXNvY2lldHl1bWQudGVjaG5vbG9neUBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
            title="OMBA Calendar"
            style={{ border: '1px solid #777' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function Recap() {
  const [recapIndex, setRecapIndex] = useState(0);
  const recap = recapArray[recapIndex];

  return (
    <section className="recap py-5">
      <div className="container text-center">
        <h1 className="mb-4 fw-bold">Event Recaps</h1>
        <div className="row justify-content-center g-4 mb-3">
          {recap.pics.map((src, i) => (
            <div className="col-12 col-md-6" key={i}>
              <img
                src={src}
                alt={`Recap ${i + 1}`}
                className="img-fluid rounded shadow-sm w-100"
                style={{ aspectRatio: '4 / 3', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <h4 className="fw-bold">{recap.description}</h4>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <div className="d-flex justify-content-center gap-4 mt-4">
<div className="d-flex justify-content-center gap-4 mt-4">
  <button
    className="btn btn-lg btn-outline-dark px-4 py-2 rounded-pill shadow-sm"
    disabled={recapIndex === 0}
    onClick={() => setRecapIndex(recapIndex - 1)}
  >
    ← Prev
  </button>
  <button
    className="btn btn-lg btn-outline-dark px-4 py-2 rounded-pill shadow-sm"
    disabled={recapIndex === recapArray.length - 1}
    onClick={() => setRecapIndex(recapIndex + 1)}
  >
    Next →
  </button>
</div>
</div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact py-5">
      <div className="container text-center">
        <h1 className="mb-4 fw-bold">Contact Form</h1>
        <div className="linktree mx-auto">
          <img src="Img/OMBAS Logo.jpg" alt="OMBA Society Logo" />
          <h1>@ombasocietyumd</h1>
        <a href="https://ombasociety.slack.com/join/shared_invite/zt-2yenhtre8-fEB5maoPfjnaW_iPeimoWw#/shared-invite/email" className="button" target="_blank">Slack</a>
        <a href="https://www.instagram.com/ombasocietyumd/" className="button" target="_blank">Instagram</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScB1kD2l5EB9ewQlrFEKi_QkOvc5K7ovTsScNeeOzS2XN7-RQ/viewform" className="button" target="_blank">Newsletter Sign-Up Form</a>
        <a href="https://terplink.umd.edu/organization/ombas" className="button" target="_blank">Join OMBAS on TerpLink</a>
        </div>
        <div className="mt-4">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSddjL3XIb2H2LEy-FbGJtxLKVbv7k84Eu25x2n65YrfrOVgZw/viewform?embedded=true"
            id="form"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <span className="navbar-brand fw-bold text-white">OMBA</span>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
      <ul className="navbar-nav gap-3">
        {['home', 'about', 'events', 'recap', 'contact'].map((page) => (
          <li className="nav-item" key={page}>
            <a
              href="#"
              className={`nav-link fw-bold text-white ${currentPage === page ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(page);
              }}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
      {currentPage === 'events' && <Events />}
      {currentPage === 'recap' && <Recap />}
      {currentPage === 'contact' && <Contact />}
    </>
  );
}
