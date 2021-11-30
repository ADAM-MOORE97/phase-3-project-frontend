
import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

import {useHistory} from 'react-router-dom';

const LandingPage = ({people,setLoans, setPersonState}) => {
    const [login, setLogIn]=useState({username: '',password: ''})
    const [verified, setVerified] = useState(true)
    let history = useHistory();
 

    const handleSubmit = (e) =>{
        e.preventDefault()
        people.filter(person => {
            if(person.username === login.username && person.password === login.password) {
                setPersonState(person)
                fetch(`https://loanmanagizerapi.herokuapp.com/people/${person.id}/loans`)
                .then((r)=>r.json())
                .then((data)=>{
                  setLoans(data)})
                  history.push('/home')
            }
            else if(person.username !== login.username && person.password !== login.password){
                setVerified(!verified)
            }
        });
        e.target.reset()
    }
 


  return (
    <>
      <h1 className="title">Loan Managizer</h1>
      <div className="landing">
        {/* <h3 className="welcome-message">Welcome Message ......</h3> */}
        {verified ? (
          <p className="welcome-message">
            Please LOGIN, new users can signup by clicking the button below!
          </p>
        ) : (
          <p className="welcome-message">
            Uh oh! user not recognized, try again or signup below!
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="login">
            <p>
              <input
                onChange={(e) =>
                  setLogIn({ ...login, username: e.target.value })
                }
                placeholder="username"
              ></input>
            </p>
            <p>
              <input
                type="password"
                onChange={(e) =>
                  setLogIn({ ...login, password: e.target.value })
                }
                placeholder="password"
              ></input>
            </p>
          </div>
          <button type="submit" className="landing-button">
            Log In
          </button>
        </form>

        <Link to="/signup">
          <button className="landing-button">Signup</button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
