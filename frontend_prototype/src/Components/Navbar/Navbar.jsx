import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import wreck from "../Assets/wreck.jpg";
import { FaHome } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { GrLogout } from "react-icons/gr";
import { RiLoginBoxLine } from "react-icons/ri";


function Navbar() {
  return (
    <>
    <div className='navbar' >
    
          <div className="logo">
            <h2>CampusConnect</h2>
          </div>
          {/*<div className='nav-search'>
                <input className='nav-text'
                    type="text"
                    placeholder="Search....."
                />
                <button className="search-button"></button>
             </div>*/}
            <div>
            <ul className="nav-menu1">
                <li>
               <Link to="/Home"><button className='page-button'><FaHome /></button></Link> 
                </li>
                {/*                <li>
               <Link to=""><button className='page-button'>E</button></Link>
                </li> */}
                <li>
                <Link to="../MyEvents"><button className='page-button'><MdEventNote /></button></Link>
                </li>
                <li>
                <Link to="/Communities"><button className='page-button'><RiTeamFill />
</button></Link>
                </li>
            </ul>
            </div>
            <div>
            <ul className="nav-menu2">
              {/*                <li>
                <Link to='/'><button id='subbutton'></button></Link>
                </li>
                <li>
                <Link to="/CreaterPage"><button id='subbutton'>CP</button></Link>
                </li> */}
                <li>
                {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}><GrLogout /></button>
        :<Link to='/' style={{ textDecoration: 'none' }}><button id='subbutton'><RiLoginBoxLine /></button></Link>}
                </li>
            </ul>
            </div>
            {/*            <div className='profile'>
              <img className="profile-button" src={wreck} alt='img'></img>
            </div> */}
            
    </div>
    </>
  )
}

export default Navbar