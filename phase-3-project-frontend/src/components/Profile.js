import React from "react" 
import { useState } from 'react';
function Profile({person,handleSubmit}) {
 
    const [showForm, setShowForm] = useState(false)
    const [username, setUsername] = useState(person.username)
    const [password, setPassword] = useState(person.password)
    const [firstName, setFirstName] = useState(person.first_name)
    const [lastName, setLastName] = useState(person.last_name)
    const [phoneNumber, setPhoneNumber] = useState(person.phone_number)
    const [email, setEmail] = useState(person.email)
    const [address, setAddress] = useState(person.address)
    const [DOB, setDOB] = useState(person.DOB)
    const [gender, setGender] = useState(person.gender)
    
    function handleClick(){
        setShowForm(!showForm)
    }
    function handleUsername(e){
        setUsername(e.target.value)
        }
    function handlePassword(e){
        setPassword(e.target.value)
        }
    function handleFirstName(e){
    setFirstName(e.target.value)
    }
    function handleLastName(e){
        setLastName(e.target.value)
        }
    function handlePhoneNumber(e){
        setPhoneNumber(e.target.value)
        }
    function handleEmail(e){
        setEmail(e.target.value)
         }
    function handleAddress(e){
        setAddress(e.target.value)
          }
    function handleDOB(e){
            setDOB(e.target.value)
        }
    function handleGender(e){
        setGender(e.target.value)
        }
    function collectData(e){
        e.preventDefault()
        const newPerson ={
          username: e.target.username.value,
          password: e.target.password.value,
          first_name: e.target.first_name.value,
          last_name: e.target.last_name.value,
          phone_number: e.target.phone_number.value,
          email: e.target.email.value,
          address: e.target.address.value,
          DOB: e.target.DOB.value,
          gender: e.target.gender.value
        }
        handleSubmit(newPerson)
        e.target.reset()
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
       {showForm?  <form onSubmit={collectData}>
        <input value={username} onChange={handleUsername} type="text" name="username" placeholder="Username" /> 
        <input value={password} onChange={handlePassword} type="text" name="password" placeholder="Password" />
        <input value={firstName} onChange={handleFirstName} type="text" name="first_name" placeholder="First name" />
        <input value={lastName} onChange={handleLastName} type="text" name="last_name" placeholder="Last name" />
        <input value={phoneNumber} onChange={handlePhoneNumber} type="number" name="phone_number" placeholder="Phone Number" />
        <input value={email} onChange={handleEmail} type="text" name="email" placeholder="Email" />
        <input value={address} onChange={handleAddress} type="text" name="address" placeholder="Address" />
        <input value={DOB} onChange={handleDOB}type="text" name="DOB" placeholder="Date of Birth" />
        <input value={gender} onChange={handleGender} type="text" name="gender" placeholder="Gender" />
        <button type="submit">Submit</button>
      </form>
       
       
       
       
       :null}

    </div>
)}
export default Profile;