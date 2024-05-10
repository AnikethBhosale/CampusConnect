import React from 'react'
import EventsList from '../../Components/EventsList/EventsList'
import EventsTimeline from '../../Components/EventsTimeline/EventsTimeline'
import { Link } from 'react-router-dom'
import thumbnail from '../../Components/Assets/facit.jpg'
import './BB.css'

function Facit() {
  return (
    <div className="parent-div"> {/* Apply fit-content to the parent div */}
      <div className='backbutton'>
        <Link to="/Communities"><button><h1>←</h1></button></Link>
      </div>
      <EventsList
        cname='FACIT'
        cimage={thumbnail}
        cinfo='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />
      <EventsTimeline category="Facit"/>
    </div>
  )
}

export default Facit
