import React from 'react'
import { Link } from 'react-router-dom'
import "./EventPost.css";

function EventPost(props) {
  return (
    <>
    <div className="timeline1" >
    <div className="timeline-cards">
       <Link to={`/EventInfo/${props.id}`}><div className="timeline-card1" >
                  <div className="card-img">
                    <img src={props.image} alt="event" />
                  </div>
                  <div className="card-text">
                    <h3>Name: {props.name}</h3>
                    <h3>Info: {props.info}</h3>
                    <h3>From: {props.time}</h3>
                    <h3>Venue: {props.venue}</h3>
                    <h3>Date: {props.date}</h3>

                  </div>
                </div>
                </Link>
        </div>
        
        </div>
        </>
  )
}

export default EventPost