import React from "react" 
import {useState} from "react"
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'
function Addloan({setLoans, person}){
    console.log(person.loans)
let history =useHistory();
const [newLoan1, setNewLoan1] = useState( {
    name: '',
    item_type:'',
    cost:0,
    interest_rate: 0,
    person_id: person.id,
    term: 0
})
 function collectNewLoan(e){
        e.preventDefault()
        fetch('https://loanmanagizerapi.herokuapp.com/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newLoan1)
          }).then(r => r.json())
          .then(data => 
              postLoan({...newLoan1, item_id: data.id}))
        e.target.reset()
        
    }

    function postLoan(newLoan1){
      fetch('https://loanmanagizerapi.herokuapp.com/loans', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLoan1)
      })
      .then(r => r.json())
      .then(data => setLoans(data))
      
      }
    return(
        <div className="content">
            {(person.id!== undefined)?
            <div>
        
       <h2>New Purchase</h2>
       <form onSubmit={collectNewLoan}>
        <p>
        <input onChange={e=>setNewLoan1({...newLoan1, name:e.target.value})} type="text" name="item_name" placeholder="Item Name"/>
        <input onChange={e=>setNewLoan1({...newLoan1, item_type:e.target.value})} type="text" name="item_type" placeholder="Item Type" />
        <input onChange={e=>setNewLoan1({...newLoan1, cost:e.target.value})} type="number" name="cost" placeholder="Price" />
        </p>
        <input onChange={e=>setNewLoan1({...newLoan1, interest_rate:e.target.value})} type="number" name="interest_rate" placeholder="Interest Rate" />
        <input onChange={e=>setNewLoan1({...newLoan1, term:e.target.value})} type="number" name="term" placeholder="Term" />
        <button type="submit">Submit</button>
      </form>
      </div>
      : <div>
          <h3>Please log in to add new loan!</h3> 
          <Link to='/'><button>Log in</button></Link>
          </div>}
        </div>
    )
}
export default Addloan;