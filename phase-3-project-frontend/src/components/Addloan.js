import React from "react" 
import {useState} from "react"
import { Link } from "react-router-dom";
function Addloan({postItem, person}){
   const [itemName, setItemName] = useState('')
   const [itemType, setItemType] = useState('')
   const [price, setPrice] = useState('')
   const [interestRate, setInterestRate] = useState('')
   const [term, setTerm] = useState('')
    function handleItemName(e){
        setItemName(e.target.value)
    }
    function handleItemType(e){
        setItemType(e.target.value)
    }
    function handlePrice(e){
        setPrice(e.target.value)
    }
    function handleInterestRate(e){
        setInterestRate(e.target.value)
    }
    function handleTerm(e){
        setTerm(e.target.value)
    }
    function collectNewLoan(e){
        e.preventDefault()
        const newLoan = {
            name: e.target.item_name.value,
            item_type: e.target.item_type.value,
            cost: e.target.cost.value,
            interest_rate: e.target.interest_rate.value,
            person_id: person.id,
            term: e.target.term.value
        }
        
        postItem(newLoan)
    }
    return(
        <div>
            {(person.id!== undefined)?
            <div>
       <h2>New Purchase</h2>
       <form onSubmit={collectNewLoan}>
        <input value={itemName} onChange={handleItemName} type="text" name="item_name" placeholder="Item Name"/>
        <input value={itemType} onChange={handleItemType} type="text" name="item_type" placeholder="Item Type" />
        <input value={price} onChange={handlePrice} type="number" name="cost" placeholder="Price" />
        <input value={interestRate} onChange={handleInterestRate} type="number" name="interest_rate" placeholder="Interest Rate" />
        <input value={term} onChange={handleTerm} type="number" name="term" placeholder="Term" />
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