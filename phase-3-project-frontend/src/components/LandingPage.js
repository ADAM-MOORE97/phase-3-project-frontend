import {useState, useEffect} from 'react'

const LandingPage = ({people,setPersonState}) => {
    const [login, setLogIn]=useState({username: '',password: ''})
    const [verified, setVerified] = useState(true)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        people.filter(person => {
            if(person.username === login.username && person.password === login.password) {
                setPersonState(person);
                console.log(person)
            }
            else if(person.username !== login.username && person.password !== login.password){
                setVerified(!verified)
            }
        });
        e.target.reset()
    }
 
  
    return(
        <>
            <h1>Loan Managizer</h1>

            <h3>Welcome Message ......</h3>
            {verified? <p>Please LOGIN, new user's can signup by clicking button below!</p>:<p>Uh oh! user not recognized, try again or signup below!</p>}
            <form onSubmit={handleSubmit}>
            <p><input onChange={e=>setLogIn({...login, username:e.target.value})} placeholder='username'></input></p>
            <p><input type="password" onChange={e=>setLogIn({...login, password:e.target.value})} placeholder='password'></input></p>
            <button type="submit">Login</button>
            </form>
            
            <button>Signup</button>


        </>
    );
}

export default LandingPage;