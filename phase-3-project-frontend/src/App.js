import './App.css';
import PaymentCalculator from './components/PaymentCalculator';
import LandingPage from './components/LandingPage'
import { useEffect, useState } from 'react';

function App() {
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/people')
    .then(r => r.json())
    .then(data=>setPeople(data))
    return () => {
      "hey"
    }
  }, []);

  function setPersonState(){

  }
  return (
    <div className="App">
    <LandingPage setPersonState={setPersonState} people={people}/>
      <PaymentCalculator />
    </div>
  );
}

export default App;
