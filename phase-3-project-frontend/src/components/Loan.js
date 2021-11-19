import React from "react" ;
import { useState } from "react";



function Loan({name, currentValue, loan, postPayment,deleteLoan}) {
   const [loanvalue, setLoanValue] = useState(loan)
   
  
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
        updatedAmount = {...loanvalue, current_value: currentValue - e.target.amount.value}
        setLoanValue({...loanvalue, current_value: currentValue - e.target.amount.value})
        postPayment(updatedAmount, loanvalue.id)      
    }
    function showform(){
        setShowDelete(!showDelete)
    }
    function handleDelete(e){
        e.preventDefault()
        deleteLoan(loanvalue)
        
        }
        


    
return(
    <>
    <h1 className="hide">...</h1>
    <div>
       
        <h4 onClick={handleClick}>Name: {name}</h4>
        Current Value: {loanvalue.current_value}
        {showItem? <div>
         <h5>Cost: {loanvalue.item.cost}</h5>
        <h5>Item Type: {loanvalue.item.item_type}</h5>
        <h5>Term: {loanvalue.term}</h5>
        <h5>Intereset Rate: {loanvalue.intereset_rate}</h5>
        <button onClick={paymentClick}>Add payment</button>
        
        {showPayment? <form onSubmit={collectPayment}>
        <input value={amount} onChange={handleAmount} type="number" name="amount" placeholder="Amount"/>
        <button type="submit">Submit Payment</button>
      </form>: null}

      <button onClick={showform}>Delete Loan</button>

      {showDelete? <form onSubmit={handleDelete}>
        
            <h6>{loan.item.name}</h6>
            <p>${loanvalue.current_value}</p>
            {/* <input id="hidden" type="hidden" name="_method" value="delete"/> */}
        <button type="submit">Delete Loan</button>
      </form>: null}
        </div>
       
        : null}
    </div>
    </>
)}
export default Loan;