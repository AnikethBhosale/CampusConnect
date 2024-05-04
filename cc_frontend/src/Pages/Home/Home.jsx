import React from 'react'
import './Home.css'
//import HomeSidebar1 from '../../Components/HomeSidebar/HomeSidebar1'
//import HomeSidebar2 from '../../Components/HomeSidebar/HomeSidebar2'
import HomeFeed from '../../Components/HomeFeed/HomeFeed'

function Home() {
  return (  
    // <HomeSidebar1/>
    //<HomeSidebar2/>
     <div className='home-container'>

       <HomeFeed/>
     </div>
  )
}

export default Home