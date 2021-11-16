import React from "react" 
import { useEffect, useState } from 'react';
function Profile() {
    const [person, setPerson] = useState([])
    useEffect(() => {
        fetch('http://localhost:9292/people/1')
        .then(r => r.json())
        .then(data=>setPerson(data))
      }, []);
    const [showForm, setShowForm] = useState(false)
    function handleClick(){
        setShowForm(true)
    }
return(
    <div>
        <h2>User Profile</h2>
       <h4>Username: {person.username}</h4>
       <h4>First Name: {person.first_name}</h4> 
       <h4>Last Name: {person.last_name}</h4>
       <h4>Phone number: {person.phone_number}</h4>
       <h4>Email: {person.email}</h4>
       <h4>Address: {person.address}</h4>
       <h4>Date of Birth: {person.DOB}</h4>
       <h4>Gender: {person.gender}</h4>

       <button onClick={handleClick}>Edit Profile</button>
       <form></form>

    </div>
)}
export default Profile;