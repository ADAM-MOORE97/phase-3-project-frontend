import React, {useState, useEffect} from "react";
import Loan from "./Loan";
function Loanlist({loans, postPayment}) {
      const singleloan = loans.map((loan)=>{
          return <Loan
          key={loan.id}
          name= {loan.item.name}
          currentValue = {loan.current_value}
          item={loan.item}
          loan= {loan}
          postPayment={postPayment}
          />
      })
return(
    <div>
       <ul>{singleloan}</ul>
    </div>
)}
export default Loanlist;