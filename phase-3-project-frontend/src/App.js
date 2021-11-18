import history from "./history";
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
import Outstandingbalance from './components/Outstandingbalance';
import Addloan from "./components/Addloan";





function App() {
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState({})
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
      if (person.id !== undefined)
        fetch(`http://localhost:9292/people/${person.id}/loans`)
        .then((r)=>r.json())
        .then((data)=>{
          setLoans(data)
        })
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

function postItem(newItem){
  console.log(newItem)
  fetch('http://localhost:9292/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newItem)
  }).then(r => r.json())
  .then(data => 
    {newItem.item_id=data.id
      postLoan(newItem)
    })
  }
function postLoan(newLoan){
  console.log(newLoan)
fetch('http://localhost:9292/loans', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newLoan)
})
.then(r => r.json())
.then(data => console.log(data))
}

  return (
    
    <div className="App">
       <header className="App-header">
      <Navbar/>
      </header>
     
       <Switch>
    <Route exact path='/'>
       <LandingPage setPersonState={setPersonState} people={people} loans={loans} postPayment={postPayment} />
    </Route>
    <Route path='/signup'>
      <SignupPage addUser={addUser}/>
    </Route>  
      <main>
        <Route path='/home/profile'>
      <Profile person={person} handleSubmit={handleSubmit} />
        </Route>
        <Route exact path="/home" >
       <Outstandingbalance loans={loans}/>
       </Route>
       <Route exact path="/home/add_loan" >
       <Addloan postItem={postItem} person={person}/>
       </Route>

       <Route exact path="/home/payment_calculator" >
       <PaymentCalculator/>
       </Route>
        <Route exact path='/home/loan_list'>
        <Loanlist loans={loans} postPayment={postPayment} /> 
        </Route>
        </main>
    
       </Switch>
      
      

    </div>
  
  );
}

export default App;
