import React, {useState, useEffect} from "react";
import Loan from "./Loan";
import { Link } from "react-router-dom";
function Loanlist({loans,person, postPayment, setPerson, setLoans}) {
    const [loanState, setLoanState] = useState(loans)
   function deleteLoan(loanvalue){
    if (loanvalue.current_value === 0){
        fetch(`https://loanmanagizerapi.herokuapp.com/${loanvalue.id}`, {
            method: "DELETE",
            
          })
          .then(r=>r.json())
          .then(data=>{
              setLoanState(data);
                setLoans(data)})
          
        
       }
   }
      let singleloan = loanState.map((loan)=>{
          return <Loan
          key={loan.id}
          name= {loan.item.name}
          currentValue = {loan.current_value}
          item={loan.item}
          loan= {loan}
          postPayment={postPayment}
          interest_rate={loan.interest_rate}
          setPerson={setPerson}
          person={person}
          deleteLoan={deleteLoan}
          className="loan"
          />
      })
      
return(
    <>
    <h1>...</h1>
    <div>
    { (loanState[0]!==undefined)?
    <div>
        {/* <h1>Loan list</h1> */}
       <div>{singleloan}</div>
    </div>:
    <div>
    <h3>Please log in to see your list of loans!</h3> 
    <Link to='/'><button>Log in</button></Link>
    </div>}
    </div>
    </>
)}
export default Loanlist;