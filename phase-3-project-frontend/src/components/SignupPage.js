import {useState} from 'react'
const SignupPage = ({addUser}) =>{
    const [newPerson, setNewPerson] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        address: '',
        email: '',
        DOB: '',
        gender: '',
        username: '',
        password: ''
    })

    const submit = (e) =>{
        e.preventDefault()
        addUser(newPerson)
        e.target.reset();
    }






    return(
        <>
            <form onSubmit={submit}>
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