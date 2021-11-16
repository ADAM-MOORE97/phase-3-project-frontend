import React, {useState, useEffect} from "react";
import Loan from "./Loan";
function Loanlist() {
    const [loans, setLoans] = useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/people/1/loans")
        .then((r)=>r.json())
        .then((data)=>{
          setLoans(data)})
      },[])
      const singleloan = loans.map((loan)=>{
          return <Loan
          key={loan.id}
          name= {loan.item.name}
          currentValue = {loan.current_value}
          />
      })
return(
    <div>
       <ul>{singleloan}</ul>
    </div>
)}
export default Loanlist;