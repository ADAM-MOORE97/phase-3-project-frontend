import { useState } from "react";

const PaymentCalculator = () => {
  const [userInput, setUserInput] = useState({
    amount: "",
    term: "",
    interest: "",
    payment: "",
  });

  const [paymentVisible, setPaymentVisible] = useState(false);

  const handleInput = (e) =>
    setUserInput({ ...userInput, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    console.log(performCalculations(userInput));

  };

  const handleReset = () => {
    setUserInput({ amount: "", term: "", interest: "", payment: "" });
    toggleVisiblePayment()
  };

  const toggleVisiblePayment = () => {
    setPaymentVisible(!paymentVisible);
  };

  const performCalculations = ({ amount, term, interest, payment }) => {
    const interestDecimal = parseFloat(interest) / 100 / 12;
    const paymentInMonths = term * 12;
    const loanAmount = parseFloat(amount);
    const userPayment = parseFloat(payment);
    const intExponent = Math.pow(1 + interestDecimal, paymentInMonths);
    const amtInterest = loanAmount * interestDecimal;
    const monthlyPayment = (amtInterest * intExponent) / (intExponent - 1);
    const paymentRounded = Math.round(monthlyPayment * 100) / 100;
    const logOne = userPayment / (userPayment - amtInterest);
    const logTwo = 1 + interestDecimal;
    const calculatedTerm = Math.round(Math.log(logOne) / Math.log(logTwo));

    // return paymentRounded, calculatedTerm;
    if (payment == 0) return `Your monthly payment is  $${paymentRounded}`;
    else return `Your new term is ${calculatedTerm} months`;
  };

  return (
    <div className="content">
    <h2>Payment Calculator</h2>
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
      <p>
        <input
          name="payment"
          placeholder="monthly payment"
          value={userInput.payment}
          onChange={handleInput}
        />
      </p>
      <button
        onClick={() => {
          handleSubmit();
          toggleVisiblePayment();
        }}
      >
        calculate
      </button>{" "}
      <button onClick={handleReset}>Reset</button>
      <p>{paymentVisible && <>{`${performCalculations(userInput)}`}</>}</p>{" "}
    </div>
  );
};

export default PaymentCalculator;