import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [display, setDisplay] = useState(false);

  return (
    <nav>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/home/about">
          <li>About</li>
        </Link>

        <Link to="/home/FAQs">
          <li>FAQs</li>
        </Link>

        <Link to="/home/loan_list">
          <li>Loan List</li>
        </Link>
        <Link to="/home/add_loan">
          <li>Add Loan</li>
        </Link>
        <Link to="/home/payment_calculator">
          <li>Payment Caculator</li>
        </Link>
        <div style={{ display: "inline" }} className="subnav">
          <li onClick={(e) => setDisplay(!display)} className="subnavbtn">
            UserName▼
          </li>
            <li>
              <Link to="/home/profile">
                {" "}
                <a
                  style={display ? { display: "block" } : { display: "none" }}
                  href=""
                >
                  Profile
                </a>
              </Link>
            </li>
            <li>
            <Link to="/">
              {" "}
              <a
                style={display ? { display: "block" } : { display: "none" }}
                href=""
              >
                Log Out
              </a>
            </Link>
            </li>
          </div>
      </ul>
    </nav>
  );
};

export default Navbar;
