import {useState} from 'react'
import { Link } from "react-router-dom";
const Navbar = () =>{
const [display, setDisplay] =useState(false)


    return(
        <nav>
        <div style={{display: 'inline'}}>
        <Link to='/home'><button>Home</button></Link>
        <button>About</button>
        <button>FAQs</button>
        <Link to='/home/loan_list'><button>Loan List</button></Link>
        <button>Add Loan</button>
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