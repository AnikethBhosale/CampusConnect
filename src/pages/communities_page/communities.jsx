import React, { Component } from 'react';
import './communitiesStyle.css';
import { Helmet } from 'react-helmet';
class Communities extends Component {
  state = {  } 
  render() { 
    return (
      <div className='bgColor'>
        <Helmet>
          <style>{'body{background-color: rgba(40, 39, 77, 1)}'}</style>
        </Helmet>


        <div className='communitiesListContainer'>
          <div className='community1'>Force</div>
          <div className='community2'>Faceit</div>
          <div className='community3'>Face</div>
          <div className='community4'>DevTrack</div>
          <div className='community5'>Force</div>
          <div className='community6'>Faceit</div>
          <div className='community7'>Face</div>
          <div className='community8'>DevTrack</div>
        </div>



      </div>

    );
  }
}
 
export default Communities;