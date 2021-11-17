import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Loanlist from './components/Loanlist';
import PaymentCalculator from './components/PaymentCalculator';
import LandingPage from './components/LandingPage'
import SignupPage from './components/SignupPage';
import Profile from './components/Profile';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';





function App() {
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState([])
  const [newUser, setNewUser] = useState([])
  const [loans, setLoans] = useState([])

  // Initial GET request for all People Data, used to login.
  useEffect(() => {
    fetch('http://localhost:9292/people')
      .then(r => r.json())
      .then(data => setPeople(data))
    return () => {
      "hey"
    }
  }, [newUser]);
    useEffect(()=>{
        fetch(`http://localhost:9292/people/${person.id}/loans`)
        .then((r)=>r.json())
        .then((data)=>{
          setLoans(data)})
      },[person])
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
  function handleSubmit(editProfile, id) {
    fetch(`http://localhost:9292/people/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editProfile),
    })
      .then((r) => r.json())
      .then((updatePerson) => setPerson(updatePerson));
  }
 function postPayment(amount,id){
   console.log(amount)
   fetch(`http://localhost:9292/loans/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(amount),
    })
      .then((r) => r.json())
      .then((updateCurrentValue) => console.log(updateCurrentValue));
 }




  return (
    
    <div className="App">
      
    <Route path='/' exact>
       <LandingPage setPersonState={setPersonState} people={people} />
    </Route>
    <Route path='/signup'>
      <SignupPage addUser={addUser}/>
    </Route>  
<Route exact path='/home'>
      <Switch>
      <Navbar/>

        <Route path='/home/profile'>
      <Profile person={person} handleSubmit={handleSubmit} />
        </Route>

        <Route path='/home/payment_calculator'>
      <PaymentCalculator />

        </Route>

        <Route path='/home/loan_list'>
      <Loanlist />
        </Route>
      </Switch>
      </Route>
     

      <Loanlist loans={loans} postPayment={postPayment} />

    </div>
    
  );
}

export default App;
