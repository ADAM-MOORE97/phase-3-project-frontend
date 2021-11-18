import React from "react" ;
import { useState } from "react";

function Loan({name, currentValue, item, loan, postPayment, intereset_rate}) {
   
    console.log(intereset_rate)
    const [showItem, setShowItem]= useState(false)
    const [showPayment, setShowPayment]=useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [amount, setAmount] = useState('')
    function handleClick(){
        setShowItem(!showItem)
    }
    function paymentClick(){
      setShowPayment(!showPayment)
    }
    function handleAmount(e){
        setAmount(e.target.value)
    }
    function collectPayment(e){
        e.preventDefault()
        let updatedAmount = loan
        updatedAmount = {...loan, current_value: currentValue - e.target.amount.value}
        postPayment(updatedAmount, loan.id)      
    }
    function deleteLoan(){
        setShowDelete(!showDelete)
    }
    function handleDelete(e){
        e.preventDefault()
        if (loan.current_value === 0){
            fetch(`http://localhost:9292/loans/${loan.id}`, {
                method: "DELETE",
              })
              .then(r=>r.json())
              .then(data=>console.log(data))
           }
        }
        
 

    
return(
    <div>
        <h4 onClick={handleClick}>Name: {name}</h4>
        Current Value: {currentValue}
        {showItem? <div>
         <h5>Cost: {item.cost}</h5>
        <h5>Item Type: {item.item_type}</h5>
        <h5>Term: {loan.term}</h5>
        <h5>Intereset Rate: {intereset_rate}</h5>
        <button onClick={paymentClick}>Add payment</button>
        
        {showPayment? <form onSubmit={collectPayment}>
        <input value={amount} onChange={handleAmount} type="number" name="amount" placeholder="Amount"/>
        <button type="submit">Submit Payment</button>
      </form>: null}

      <button onClick={deleteLoan}>Delete Loan</button>

      {showDelete? <form onSubmit={handleDelete}>
        
            <h6>{loan.item.name}</h6>
            <p>${loan.current_value}</p>
            <input id="hidden" type="hidden" name="_method" value="delete"/>
        <button type="submit">Delete Loan</button>
      </form>: null}
        </div>
       
        : null}
    </div>
)}
export default Loan;