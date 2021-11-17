import React from "react" 
import { useState } from "react";
function Loan({name, currentValue, item, loan, postPayment}) {
    console.log(currentValue)
    const [showItem, setShowItem]= useState(false)
    const [showPayment, setShowPayment]=useState(false)
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
    
return(
    <div>
        <h4 onClick={handleClick}>Name: {name}</h4>
        Current Value: {currentValue}
        {showItem? <div>
         <h5>Cost: {item.cost}</h5>
        <h5>Item Type: {item.item_type}</h5>
        <h5>Term: {loan.term}</h5>
        <h5>Intereset Rate: {loan.intereset_rate}</h5>
        <button onClick={paymentClick}>Add payment</button>
        {showPayment? <form onSubmit={collectPayment}>
        <input value={amount} onChange={handleAmount} type="number" name="amount" placeholder="Amount"/>
        <button type="submit">Submit Payment</button>
      </form>: null}
        </div>
       
        : null}
    </div>
)}
export default Loan;