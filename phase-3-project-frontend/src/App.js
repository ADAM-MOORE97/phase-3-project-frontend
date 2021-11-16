import './App.css';
import Loanlist from './components/Loanlist';
import PaymentCalculator from './components/PaymentCalculator';
import LandingPage from './components/LandingPage'
import SignupPage from './components/SignupPage';
import Functionlist from './components/Functionlist';
import Profile from './components/Profile';
import { useEffect, useState } from 'react';





function App() {
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState([])
  const [newUser, setNewUser] = useState([])

  // Initial GET request for all People Data, used to login.
  useEffect(() => {
    fetch('http://localhost:9292/people')
      .then(r => r.json())
      .then(data => setPeople(data))
    return () => {
      "hey"
    }
  }, [newUser]);

  // Sets state of single person from People table, to be used in all subsequent
  // components, after successful Login
  function setPersonState(personObj) {
    setPerson(personObj)
  }

  // Sends Post request to API for new user sign up, 
  // changes state variable to trigger GET request again so 
  // new user can Log In.
  function addUser(newPerson) {
    fetch('http://localhost:9292/people', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPerson)
    }).then(r => r.json()).then(data => setNewUser(data))
  };

  // Sends PATCH request so users can edit profile information.
  function handleSubmit(editProfile) {
    console.log(editProfile)
    fetch("http://localhost:9292/people", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editProfile),
    })
      .then((r) => r.json())
      .then((updatePerson) => console.log(updatePerson));
  }





  return (
    <div className="App">

      <LandingPage setPersonState={setPersonState} people={people} />
      <SignupPage addUser={addUser} />

      <Functionlist />
      <Profile person={person} handleSubmit={handleSubmit} />
      <PaymentCalculator />
      <Loanlist />
    </div>
  );
}

export default App;
