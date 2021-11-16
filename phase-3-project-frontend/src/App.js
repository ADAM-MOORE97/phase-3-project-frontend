import './App.css';
import Loanlist from './components/Loanlist';
import PaymentCalculator from './components/PaymentCalculator';
import LandingPage from './components/LandingPage'
import SignupPage from './components/SignupPage';
import Functionlist from './components/Functionlist';
import { useEffect, useState } from 'react';



import Functionlist from './components/Functionlist';
import Profile from './components/Profile';


function App() {
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState([])
  const [newUser, setNewUser] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:9292/people')
    .then(r => r.json())
    .then(data=>setPeople(data))
    return () => {
      "hey"
    }
  }, [newUser]);
  function setPersonState(personObj){
    setPerson(personObj)
  }
  function addUser(newPerson){
    fetch('http://localhost:9292/people', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({newPerson})
    }).then(r=>r.json()).then(data=>console.log(data))

  }

  
  return (
    <div className="App">

    <LandingPage setPersonState={setPersonState} people={people}/>
    <SignupPage addUser={addUser}/>

      <Functionlist/>
      <Profile person={person}/>
      <PaymentCalculator />
      <Loanlist/>
    </div>
  );
}

export default App;
