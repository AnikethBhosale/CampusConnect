import React from 'react'
import './FeedPost.css'
import { Link } from 'react-router-dom'

function FeedPost(props) {
  return (
    <> 
   <div className='home-content'>
            <div className='home-content-head'>
                <div className='home-content-img'>
                    <img src={props.image}  alt=""></img>
                </div>
                <Link to={`/EventInfo/${props.id}`}><button>Know More</button></Link>
            </div>
            <div className='home-content-text'>
                    <h1>{props.name}</h1>
                    <p className='home-content-text-event-info'>{props.info}</p>
                    <h3>Time: {props.time}</h3>
                    <h3>Location: {props.venue}</h3>
            </div>
    </div>
</>
  )
}

export default FeedPost