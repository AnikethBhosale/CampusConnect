import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import wreck from "../Assets/wreck.jpg";
import { IoIosHome } from "react-icons/io";
import { MdEventSeat } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <>
    <div className='navbar' >
    
          <div className="logo">
            <h2>CampusConnect</h2>
          </div>
           <div className='nav-search'>
                <input className='nav-text'
                    type="text"
                    placeholder="  Search"
                />
                <button className="search-button"><FaSearch /></button>
            </div>
            <div>
            <ul className="nav-menu1">
                <li>
               <Link to="/"><button className='page-button'><IoIosHome /></button></Link> 
                </li>
                <li>
               <Link to="/SD"><button className='page-button'><MdEventSeat /></button></Link>
                </li>
                <li>
                <Link to="/EventInfo"><button className='page-button'>I</button></Link>
                </li>
                <li>
                <Link to="/Communities"><button className='page-button'><FaUserFriends /></button></Link>
                </li>
            </ul>
            </div>
            <div>
            <ul className="nav-menu2">
                <li>
                <Link to='/SF'><button id='subbutton'></button></Link>
                </li>
                <li>
                <Link to="/CreaterPage"><button id='subbutton'><IoCreate /></button></Link>
                </li>
                <li>
                <Link to='/Login'><button id='subbutton'><MdLogin /></button></Link>
                </li>
            </ul>
            </div>
            <div className='profile'>
              <img className="profile-button" src={wreck} alt='img'></img>{/* Add this line */}
            </div>
    </div>
    </>
  )
}

export default Navbar