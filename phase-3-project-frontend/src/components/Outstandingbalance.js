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
    const RADIAN = Math.PI / 180;
    let renderLabel = function(entry, cx, cy, midAngle, innerRadius, outerRadius) {  const radius = 25 + innerRadius + (outerRadius - innerRadius);
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
      return <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">`${entry.item_name}: ${entry.value}`</text>;
  }
    return(
        <div>
        <h1>Pie chart</h1>
        <h1>You Owe:  {ArraySum} dollars!</h1>

        <PieChart width={600} height={600}>
          <Pie data={finalArray} 
          dataKey="value" 
          outerRadius={200} 
          fill="#e9d8a6" 
          label={renderLabel} />
        </PieChart>
        </div>
    )
}
export default Outstandingbalance;