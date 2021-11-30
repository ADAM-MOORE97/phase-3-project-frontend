import React from "react" 
import { PieChart, Pie} from 'recharts';
function Outstandingbalance({loans}){
    let loanArray = []
    loanArray = [...loans.map((loan)=> (loan.current_value))]
    console.log(loanArray)
    function simpleArraySum(ar) {
        var sum = 0;
        for (var i = 0; i < ar.length; i++) {
          sum += ar[i];
        }
        return sum;
      }
    let ArraySum = simpleArraySum(loanArray)
    
      
    let pieData = []
    pieData= [...loans.map((loan)=>loan.item.name)]
    let finalArray = pieData.map(function(x,i){
      return { item_name: x, value: loanArray[i] }
    })
    console.log(finalArray)
    let renderLabel = function(entry) { 
      return`${entry.item_name}: ${entry.value}`
  }
    return(
        <div>
        <h1>Pie chart</h1>
        <h1>You Owe:  {ArraySum} dollars!</h1>

        <PieChart width={900} height={400}>
          <Pie data={finalArray} 
          dataKey="value" 
          fill="#006D77" 
          label={renderLabel} />
        </PieChart>
        </div>
    )
}
export default Outstandingbalance;