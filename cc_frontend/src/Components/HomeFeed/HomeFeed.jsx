import React from "react";
import "./HomeFeed.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FeedPost from "../Posts/FeedPost";


const HomeFeed = ()  =>{

  const [allposts, setAllPosts] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4001/allposts') 
            .then((res) => res.json()) 
            .then((data) => setAllPosts(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])

  return (
    <>
      <div className='home-feed'>
    <div className='home-content'>
            <div className='home-content-head'>
                <div className='home-content-img'>
                </div>
                <Link to="/EventInfo"><button>Know More</button></Link>
            </div>
            <div className='home-content-text'>
                <h1>Event Name</h1>
                <p>Event Description</p>
            </div>
    </div>
            {allposts.map((item,i)=>{
                    return  <Link to="/EventInfo"> <FeedPost name={item.eventname} info={item.eventinfo} time={item.eventstime} venue={item.eventvenue} date={item.eventdate} image={item.image}/> </Link>
            
            })}
        </div>
    </>
  )
}

export default HomeFeed;



