import {useState} from 'react'
import {useHistory} from 'react-router-dom';

const SignupPage = ({setNewUser}) =>{
    const [newPerson, setNewPerson] = useState({
        first_name: '',
        last_name: '',
        phone_number: 0,
        address: '',
        email: '',
        DOB: 1900-11-11,
        gender: '',
        username: '',
        password: ''
    })
    let history = useHistory();

    const submit = (e) =>{
        e.preventDefault()
        fetch('http://localhost:9292/people', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPerson)
    }).then(r => r.json()).then(data => setNewUser(data))
        e.target.reset()
        history.push('/')
    }






    return(
        <>
            <form className="sign-up" onSubmit={submit}>
                <p><input onChange={e =>setNewPerson({...newPerson, first_name: e.target.value})} placeholder='John'></input></p>
                <p><input onChange={e =>setNewPerson({...newPerson, last_name: e.target.value})} placeholder='Smith'></input></p>
                <p><input onChange={e =>setNewPerson({...newPerson, phone_number: e.target.value})} placeholder='phone number'></input></p>
                <p><input onChange={e =>setNewPerson({...newPerson, address: e.target.value})} placeholder='123 Easy St....'></input></p>
                <p><input onChange={e =>setNewPerson({...newPerson, email: e.target.value})} placeholder='email'></input></p>
                <p><input onChange={e =>setNewPerson({...newPerson, DOB: e.target.value})} placeholder='DOB: YYYY-MM-DD '></input></p>
                <p><input onChange={e =>setNewPerson({...newPerson, gender: e.target.value})} placeholder='Male'></input></p>
                <p><input onChange={e =>setNewPerson({...newPerson, username: e.target.value})} placeholder='username'></input></p>
                <p><input onChange={e =>setNewPerson({...newPerson, password: e.target.value})} placeholder='password'></input></p>

                <button type='submit'>SignUp</button>



            </form>

        </>
    )
}

export default SignupPage;