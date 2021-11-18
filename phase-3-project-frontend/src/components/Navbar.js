import {useState} from 'react'
import { Link } from "react-router-dom";
const Navbar = () =>{
const [display, setDisplay] =useState(false)


    return(
        <nav>
        <div style={{display: 'inline'}}>
        <Link to='/home'><button>Home</button></Link>
        <Link to='/home/about'><button>About</button></Link>
        <Link to='/home/FAQs'><button>FAQs</button></Link>
        <Link to='/home/loan_list'><button>Loan List</button></Link>
        <Link to='/home/add_loan'><button>Add Loan</button></Link>
        <Link to="/home/payment_calculator"><button>Payment Caculator</button></Link>
        <div style={{display: 'inline'}} className="subnav">
            <button onClick={(e)=>setDisplay(!display)}  className="subnavbtn">"UserName"▼</button>
            <div className="subnav-content">
            <Link to='/home/profile'> <a  style={display?{display: 'block'}:{display: 'none'}} href="">Profile</a></Link>
            <Link to='/'> <a  style={display?{display: 'block'}:{display: 'none'}} href="">Log Out</a></Link>
            </div>
        </div>
        

        </div>
        </nav>
    )
}

export default Navbar;