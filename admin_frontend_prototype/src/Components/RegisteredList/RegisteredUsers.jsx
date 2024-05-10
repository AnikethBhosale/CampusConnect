import React, { useState, useEffect } from 'react';
import './RegisteredUsers.css';

function RegisteredUsers() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4001/registeredUsers')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className='container-users'>
      <div className='eventname-search-bar'>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by Eventname" />
      </div>
      <h1 className='registered-users'>Registered Users</h1>
      {users.slice().reverse().filter(user => user.eventname.toLowerCase().includes(search.toLowerCase())).map(user => (
  <div key={user._id} className='user-boxes'>
    <p>Name: {user.name}&nbsp;&nbsp;&nbsp;&nbsp;</p>
    <p>Email: {user.email}&nbsp;&nbsp;&nbsp;&nbsp;</p>
    <p>Phone: {user.phone}&nbsp;&nbsp;&nbsp;&nbsp;</p>
    <p>SRN: {user.srn}&nbsp;&nbsp;&nbsp;&nbsp;</p>
    <p>School: {user.school}&nbsp;&nbsp;&nbsp;&nbsp;</p>
    <p>Course: {user.course}&nbsp;&nbsp;&nbsp;&nbsp;</p>
    <p>Section: {user.section}&nbsp;&nbsp;&nbsp;&nbsp;</p>
    <p>Event Name: {user.eventname}&nbsp;&nbsp;&nbsp;&nbsp;</p>
    <p>Event Organizer: {user.eventorganizer}&nbsp;&nbsp;&nbsp;&nbsp;</p>
    <hr />
  </div>
))}
    </div>
  );
}

export default RegisteredUsers;