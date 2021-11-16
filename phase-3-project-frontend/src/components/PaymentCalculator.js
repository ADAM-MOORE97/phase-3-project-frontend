import { useState } from "react";

const PaymentCalculator = () => {
  const [userInput, setUserInput] = useState({
    amount: "",
    term: "",
    interest: "",
  });

  const handleInput = (e) =>
    setUserInput({ ...userInput, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(performCalculations(userInput));
  };

  const performCalculations = ({ amount, term, interest }) => {
    const interestDecimal = parseFloat(interest) / 100 / 12;
    const paymentInMonths = term * 12;
    const loanAmount = parseFloat(amount);
    const intExponent = Math.pow(1 + interestDecimal, paymentInMonths);
    const monthlyPayment =
      (loanAmount * interestDecimal * intExponent) / (intExponent - 1);

    const paymentRounded = Math.round(monthlyPayment * 100) / 100;
    return paymentRounded;
  };

  return (
    <>
      <p>
        <input
          name="amount"
          placeholder="loan amount"
          value={userInput.amount}
          onChange={handleInput}
        />
      </p>
      <p>
        <input
          name="term"
          placeholder="term"
          value={userInput.term}
          onChange={handleInput}
        />
      </p>
      {/* months
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      years */}
      <p>
        <input
          name="interest"
          placeholder="Interest Rate %"
          value={userInput.interest}
          onChange={handleInput}
        />
      </p>
      {/* <p>
        <input
          name="payment"
          placeholder="monthly payment"
          value={userInput.payment}
          onChange={handleInput}
        />
      </p> */}
      <button onClick={handleSubmit}>calculate</button>
    </>
  );
};

export default PaymentCalculator;
