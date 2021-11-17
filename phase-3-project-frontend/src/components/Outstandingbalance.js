import React from "react" 
function Outstandingbalance({loans}){
    let loanArray = []
    loanArray = [...loans.map((loan)=> (loan.current_value))]
    function simpleArraySum(ar) {
        var sum = 0;
        for (var i = 0; i < ar.length; i++) {
          sum += ar[i];
        }
        return sum;
      }
    let ArraySum = simpleArraySum(loanArray)
    return(
        <div>
        <h1>You Owe:  {ArraySum} dollars!</h1>
        <h1>Pie chart</h1>
        </div>
    )
}
export default Outstandingbalance;