import { useState, useEffect } from "react";

const PaymentCalculator = () => {
  return (
    <>
      <p><input placeholder="loan amount" /></p>
      <p><input placeholder="term" /></p>
      <p><input placeholder="Interest Rate %" /></p>
      <button>calculate</button>
    </>
  );
};

export default PaymentCalculator;
