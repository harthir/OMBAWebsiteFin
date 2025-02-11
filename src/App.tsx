import { useState } from 'react'

import './App.css'

function Home(){
  return <>

    <div className = "home">
      <img src = "Img/VMHIMG.jpeg" id = "home-image" alt = "OMBA Image"></img>
      <h1 id = "home-text">OMBA Society</h1>
      <p id = "home-desc"> OMBA (Operations Management and Business Analytics) is a club that aims to bring students more knowledge about this major while also holding career-building events, professional networking opportunities, and even just fun ways to chat with current or previous OMBA majors.</p>
    </div>
   
  
  </>

}

function About(){

  return <>

    <div className = "about">
   
    
      <h1 id = "header">About Us</h1>
      <br></br>
      <p id = "desc">OMBA Society is dedicated to providing opportunities for students to excel in business and leadership. Through networking, workshops, and community events, we aim to support our members' growth and success.</p>

      <br></br>
      <div className = "boardPics">
        <div>
            <img src="Img/Ana.png" id = "board-images" alt="President"></img>
            <p><b>President</b></p>
            <p id = "name"> Ana Smith </p>
        </div>
        <div>
            <img src="Img/AnikaDeshmukh.png" alt="President" id = "board-images" ></img>
            <p><b>President</b></p>
            <p id = "name"> Anika Deshmukh </p>
        </div>
        <div>
            <img src="Img/HariniThirukonda.jpg" alt="VP of Technology"id = "board-images"></img>
            <p ><b>VP of Technology</b> </p>
            <p id = "name"> Harini Thirukonda </p>
        </div>
        <div>
            <img src="Img/James.JPG" alt="VP of Involvement" id = "board-images"></img>
            <p><b>VP of Involvement</b></p>
            <p id = "name"> James Wang</p>
        </div>
        <div>
            <img src="Img/Mae.PNG" alt="VP of Involvement" id = "board-images"></img>
            <p><b>VP of Involvement</b></p>
            <p id = "name"> Mae Crews </p>
        </div>
        <div>
            <img src="Img/NoveenAwan.jpg" alt="VP of Marketing" id = "board-images"></img>
            <p ><b>VP of Marketing</b></p>
            <p id = "name"> Noveen Awan </p>
        </div>
        <div>
            <img src="Img/CaelinStromberg.jpg" alt="VP of Marketing" id = "board-images"></img>
            <p><b>VP of Marketing</b> </p>
            <p id = "name"> Caelin Stromberg </p>
        </div>
       <div>
            <img src="Img/ViennaNguyen.jpg" alt="VP of Administration" id = "board-images"></img>
            <p ><b>VP of Administration</b></p>
            <p id = "name"> Vienna Nguyen </p>
        </div>
        <div>
            <img src="Img/Jordan.JPG" alt="VP of Finance" id = "board-images"></img>
            <p ><b>VP of Finance</b></p>
            <p id = "name"> Jordan Zhang </p>
        </div>
        <div>
            <img src="Img/JamieJung.jpg" alt="VP of Events" id = "board-images"></img>
            <p ><b>VP of Events</b></p>
            <p id = "name"> Jamie Jung </p>
        </div>
        <div>
            <img src="Img/GraceGilbert.jpg" alt="VP of Events" id = "board-images"></img>
            <p ><b>VP of Events</b></p>
            <p id = "name"> Grace Gilbert </p>
        </div>

        <div>
            <img src="Img/DenisKalinin.jpg" alt="VP of Professional Affairs" id = "board-images"></img>
            <p ><b>VP of Professional Affairs</b></p>
            <p id = "name"> Denis Kalinin </p>
        </div>

        <div>
            <img src="Img/HunterPearlstein.jpg" alt="VP of Professional Affairs" id = "board-images"></img>
            <p ><b>VP of Professional Affairs</b></p>
            <p id = "name"> Hunter Pearlstein </p>
        </div>

        <div>
            <img src="Img/NaaseraHusain.jpg" alt="VP of Recruitment" id = "board-images"></img>
            <p ><b>VP of Recruitment</b></p>
            <p id = "name"> Naasera Husain</p>
        </div>


        <div>
            <img src="Img/Anika G.jpg" alt="VP of Membership" id = "board-images"></img>
            <p ><b>VP of Membership</b></p>
            <p id = "name"> Anika Gupta </p>
        </div>

        <div>
            <img src="Img/Sarah.PNG" alt="VP of Membership" id = "board-images"></img>
            <p ><b>VP of Membership</b></p>
            <p id = "name"> Sara Shibu </p>
        </div>
        



    </div>

    </div>
  
  </>

}

function Events(){
  return<>
    <div className = "events">
      <br></br>
      <h1 id = "header">Upcoming Events!</h1>

      <ul className="event-list">
            

            <li>
                <a href="https://www.instagram.com/ombasocietyumd/" target = "_blank" className = "event-button">
                    <div className="event-date">
                        <span className="month">FEB</span>
                        <span className="day">13</span>
                    </div>
                    <div className="event-info">
                        <h3>Valenties Day Fundraiser!</h3>
                        <p>Come check us out at VMH and treat yourself to some sweet valentines day themed chocolate truffles! </p>
                    </div>
                    {/*<div className="event-info">
                        <h3>No events coming up!</h3>
                        <p>Check back later!</p>
                    </div>**/}
                </a>
            </li>
        </ul>
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=b21iYXNvY2lldHl1bWQudGVjaG5vbG9neUBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043" id = "calendar" ></iframe>

      <br></br>
      

      </div>
    
  
  </>
}

const recapArray = [{pics:["Img/DinnerDialogues1.png", "Img/DinnerDialogues2.jpeg"],description:"Dinner Dialouge"}, {pics:["Img/2024PanelPicture.jpeg", "Img/Panel.jpeg"], description: "Fall 2024 Panel"}]

function Recap(){

  const [recapIndex,setRecapIndex] = useState(0)
  return<>
  <div className = "recap">

    
   <h1 id = "header">Event Recaps!</h1>
    <div className="slideshow-container">
        <div className = "slides">
        {recapArray[recapIndex].pics.map((x)=> <img src = {x} alt = "Pic unavailable" id = "slides-pic"></img>
           )}
        </div>
        <h2 id = "header">{recapArray[recapIndex].description}</h2>
        <div className = "button-container">
        
        <button disabled = {recapIndex==0?true:false} onClick={()=> setRecapIndex(recapIndex-1)}>Prev</button>
        <button disabled = {recapIndex==recapArray.length-1?true:false}onClick={()=> setRecapIndex(recapIndex+1)}>Next</button>
        </div>
        
    </div>
    </div>
  
  
  </>

}

function Contact(){
  return<>
  <div className = 'contact'>
  <h1 id = "header"> Contact Form </h1>
  <br></br>
  <div className = "body">
  <div className="linktree">
        <img src="Img/OMBAS Logo.jpg" alt="OMBA Society Logo"></img>
        <h1>@ombasocietyumd</h1>
        <a href="https://ombasociety.slack.com/join/shared_invite/zt-2yenhtre8-fEB5maoPfjnaW_iPeimoWw#/shared-invite/email" className="button" target="_blank">Slack</a>
        <a href="https://www.instagram.com/ombasocietyumd/" className="button" target="_blank">Instagram</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScB1kD2l5EB9ewQlrFEKi_QkOvc5K7ovTsScNeeOzS2XN7-RQ/viewform" className="button" target="_blank">Newsletter Sign-Up Form</a>
        <a href="https://terplink.umd.edu/organization/ombas" className="button" target="_blank">Join OMBAS on TerpLink</a>
    </div>
    </div>
  <div className = "form-container">
  


  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSddjL3XIb2H2LEy-FbGJtxLKVbv7k84Eu25x2n65YrfrOVgZw/viewform?embedded=true" id = "form">Loading…</iframe>
  </div>
  </div>
  

     
  
  </>

}
export default function App() {

  const [currentPage, setCurrentPage] = useState('home')
  

  return (
    <>
      <div className = "navbar">
          <button id = "home-button" onClick={()=> setCurrentPage('home')}>Home</button>
          <button id = "about-button"onClick={()=> setCurrentPage('about')}>About</button>
          <button id = "events-button"onClick={()=> setCurrentPage('events')}>Events</button>
          <button id = "recap-button"onClick={()=> setCurrentPage('recap')}>Recap</button>
          <button id = "contact-button"onClick={()=> setCurrentPage('contact')}>Contact</button>


      </div>

      {currentPage=='home' && <Home />}

      {currentPage=='about' && <About />}
      {currentPage=='events' && <Events />}
      {currentPage=='recap' && <Recap />}
      {currentPage=='contact' && <Contact />}
    </>
  )
}