import React, {useState, useEffect} from "react";
import Loan from "./Loan";
import { Link } from "react-router-dom";
function Loanlist({loans, postPayment}) {
      const singleloan = loans.map((loan)=>{
          return <Loan
          key={loan.id}
          name= {loan.item.name}
          currentValue = {loan.current_value}
          item={loan.item}
          loan= {loan}
          postPayment={postPayment}
          interest_rate={loan.interest_rate}
          />
      })
return(
    <div>
    { (loans[0]!==undefined)?
    <div>
        <h1>Loan list</h1>
       <ul>{singleloan}</ul>
    </div>:
    <div>
    <h3>Please log in to see your list of loans!</h3> 
    <Link to='/'><button>Log in</button></Link>
    </div>}
    </div>
)}
export default Loanlist;