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
import About from "./components/About";
import FAQs from "./components/FAQs";




function App() {
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState({})
  const [newUser, setNewUser] = useState([])
  const [loans, setLoans] = useState([])

  // Initial GET request for all People Data, used to login.
  useEffect(() => {
    fetch('https://loanmanagizerapi.herokuapp.com/people')
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
    console.log(person)
  }

  // Sends Post request to API for new user sign up, 
  // changes state variable to trigger GET request again so 
  // new user can Log In.
  function addUser(newPerson) {
    fetch('https://loanmanagizerapi.herokuapp.com/people', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPerson)
    }).then(r => r.json()).then(data => setNewUser(data))
  };

  // Sends PATCH request so users can edit profile information.
  function handleSubmit(editProfile, id) {
    fetch(`https://loanmanagizerapi.herokuapp.com/${id}`, {
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

   fetch(`https://loanmanagizerapi.herokuapp.com/${id}`, {
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
      
       <header className="App-header">
      <Navbar person={person}/>
      </header>
      
       <Switch>
    <Route exact path='/'>
       <LandingPage setPersonState={setPersonState} setLoans={setLoans} people={people} />
    </Route>
    <Route path='/signup'>
      <SignupPage setNewUser={setNewUser}/>
    </Route>  
      <main>
        <Route path='/home/profile'>
      <Profile person={person} handleSubmit={handleSubmit} />
        </Route>
        <Route exact path="/home" >
       <Outstandingbalance loans={loans}/>
       </Route>
       <Route exact path="/home/add_loan" >
       <Addloan setLoans={setLoans} person={person}/>
       </Route>
       <Route exact path="/home/about" >
       <About/>
       </Route>
       <Route exact path="/home/FAQs" >
       <FAQs/>
       </Route>
       <Route exact path="/home/payment_calculator" >
       <PaymentCalculator/>
       </Route>
        <Route exact path='/home/loan_list'>
        <Loanlist loans={loans} setLoans={setLoans} setPerson={setPerson} person={person} postPayment={postPayment} /> 
        </Route>
        </main>
    
       </Switch>
      
      

    </div>
  
  );
}

export default App;
