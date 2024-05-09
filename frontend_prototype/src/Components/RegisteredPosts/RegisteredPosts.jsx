import React, { useContext } from 'react'
import './RegisteredPosts.css'
import { PostContext } from '../../Context/PostContext'
import removebtn from '../../Components/Assets/removebtn.png'

const RegisteredPosts = () => {
    const {posts,registeredPosts,removeFromRegisteredList} = useContext(PostContext);
  return (
    <div className='Registered-page-container'>
    <div className='Registered-page-head'>
      <h1>My Events</h1>
      </div>
      <div className='Registered-page-body'>
        <div className='list-allRegisteredposts'>
        {posts.slice().reverse().map((e,i)=>{
  if(registeredPosts[e.id]>0)
  {
    return <React.Fragment key={i}>
      <hr />
      <div  className='Registeredpost'>
        <img src={e.image} alt="" className="Registeredpost-poster" />
        <p>{e.eventname}</p>
        <p>Date: {e.eventdate}</p>
        <p>From: {e.eventstime}</p>
        <p>To: {e.eventetime}</p>
        <p>At: {e.eventvenue}</p>
        <p>By: {e.eventorganizer}</p>
        <img onClick={()=>{removeFromRegisteredList(e.id)}} src={removebtn} alt="" className="Registeredpost-remove-btn" />
      </div>
    </React.Fragment>
  }
  else{
    return null;
  }
})}
        </div>
      </div>
</div>
  )
}

export default RegisteredPosts
