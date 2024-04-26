import React from 'react'
import './EventDetails.css'
import thumbnail from "../Assets/thumbnail.jpg";

function EventDetails() {
  return (
    <div className='container1'>
        <div className='container1-head'>
            <div className="header">
                <h1>Event Details</h1>
            </div>
            <div className="container1-body">
                <div className="body-head">
                    <div className="head1-img" >
                        <img src={thumbnail} alt="event"/>
                    </div>
                    <div className="head1-text">
                       <h2> Hosted by</h2>
                        <h3>Team 1</h3>
                        <h3>Team 2</h3>
                        <h3>Team 3</h3>
                    </div>
                </div>
                <div className="body1-content">
                    <div className="body-info">
                       <h1>DevArena</h1>
                       <h1>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry</h1> 
                    </div>
                    <div className="event-date-time"><h2>12 August 2024</h2></div>
                    <div className="event-location"><h2>Kuvempu Auditorium</h2></div>
                    <div className="registeration">
                        <h2>Registeration</h2>
                        <button className="button"><h3>Register</h3></button>
                    </div>
                    <div className="event-description">
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum</h3>

              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventDetails