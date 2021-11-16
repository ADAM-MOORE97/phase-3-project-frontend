import {useState, useEffect} from 'react'

const LandingPage = ({people,setPersonState}) => {
    const [username, setUserName] = useState()
    const [password, setPassWord] = useState()
    // let username = ''
    // let password = ''

    const userName =(e)=>{
        setUserName(e.target.value)
        // username = e.target.value
     
    }
    const passWord = (e) =>{
        setPassWord(e.target.value)
        password = e.target.value
    }
    console.log(username)
 
  
    return(
        <>
            <h1>Loan Managizer</h1>

            <h6>Welcome Message ......</h6>

            <form>
            <p><input placeholder='username'></input></p>
            <p><input placeholder='password'></input></p>
            <button>Login</button></form>
            
            <button>Signup</button>


        </>
    );
}

export default LandingPage;