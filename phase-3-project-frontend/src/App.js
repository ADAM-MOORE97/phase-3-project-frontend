import './App.css';
import Loanlist from './components/Loanlist';
import PaymentCalculator from './components/PaymentCalculator';
import Functionlist from './components/Functionlist';
function App() {
  return (
    <div className="App">
      <Functionlist/>
      <PaymentCalculator />
      <Loanlist/>
    </div>
  );
}

export default App;
