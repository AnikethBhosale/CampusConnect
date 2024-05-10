import React from 'react'
import './Communities.css'
import { Link } from 'react-router-dom'
import ForceImage from '../../Components/Assets/force.jpg'
import DevImage from '../../Components/Assets/devtrack.jpg'
import FaceImage from '../../Components/Assets/face.jpg'
import FacitImage from '../../Components/Assets/facit.jpg'

function Communities() {
  return (
    <div>
       <div className='backbutton'>
    <Link to="/Home"><button><h1>←</h1></button></Link>
        </div>
    <div className='communities-container'>
        <div className='communities-head'>
            <h1>Communities</h1>
        </div>
        <div className='communities-list'>
        <Link to="/Force"><img className='community' src={ForceImage} /></Link>
          <Link to="/Facit"><img className='community' src={FacitImage} /></Link>
          <Link to="/Face"><img className='community' src={FaceImage} /></Link>
          <Link to="/Devtrack"><img className='community' src={DevImage} /></Link>
          <Link to="/Face"><img className='community' src={FaceImage} /></Link>
          <Link to="/Force"><img className='community' src={ForceImage} /></Link>
          <Link to="/Devtrack"><img className='community' src={DevImage} /></Link>
          <Link to="/Facit"><img className='community' src={FacitImage} /></Link>

        </div>
    </div>
    </div>
  )
}

export default Communities