import { useState } from "react";

const PaymentCalculator = () => {
  const [userInput, setUserInput] = useState({
    amount: "",
    term: "",
    interest: "",
    payment: "",
  });

  const handleInput = (e) =>
    setUserInput({ ...userInput, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
  };

  return (
    <>
      <p>
        <input
          placeholder="loan amount"
          value={userInput.amount}
          onChange={handleInput}
        />
      </p>
      <p>
        <input
          placeholder="term"
          value={userInput.term}
          onChange={handleInput}
        />
      </p>
      months
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      years
      <p>
        <input
          placeholder="Interest Rate %"
          value={userInput.interest}
          onChange={handleInput}
        />
      </p>
      <p>
        <input
          placeholder="monthly payment"
          value={userInput.payment}
          onChange={handleInput}
        />
      </p>
      <button onSubmit={handleSubmit}>calculate</button>
    </>
  );
};

export default PaymentCalculator;
