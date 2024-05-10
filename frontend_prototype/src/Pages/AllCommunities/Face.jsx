import React from 'react'
import EventsList from '../../Components/EventsList/EventsList'
import EventsTimeline from '../../Components/EventsTimeline/EventsTimeline'
import { Link } from 'react-router-dom'
import thumbnail from '../../Components/Assets/face.jpg'
import './BB.css'

function Face() {
  return (
    <div>
    <div className='backbutton'>
<Link to="/Communities"><button><h1>←</h1></button></Link>
   </div>
   <EventsList cname='FACE' cimage={thumbnail} cinfo='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
   <EventsTimeline category="Face" />
</div>
  )
}

export default Face