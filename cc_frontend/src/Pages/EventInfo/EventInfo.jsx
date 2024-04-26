import React from 'react'
import EventDetails from '../../Components/EventDetails/EventDetails'
import { Link } from 'react-router-dom'
import './EventInfo.css'

function EventInfo() {
  return (
    <div>
      <div className='backbutton'>
    <Link to="/ExploreEvents"><button><h1>←</h1></button></Link>
        </div>
      <EventDetails/>
    </div>
  )
}

export default EventInfo