import {useState} from 'react'
const Navbar = () =>{
const [display, setDisplay] =useState(false)

    return(
        <nav>
        <div style={{display: 'inline'}}>
        <button>Home</button>
        <button>About</button>
        <button>FAQs</button>
        <div style={{display: 'inline'}} className="subnav">
            <button onClick={(e)=>setDisplay(!display)}  className="subnavbtn">"UserName"▼</button>
            <div className="subnav-content">
                <a  style={display?{display: 'block'}:{display: 'none'}} href="">Profile</a>
                <a  style={display?{display: 'block'}:{display: 'none'}} href="">Log Out</a>
            </div>
        </div>
        

        </div>
        </nav>
    )
}

export default Navbar;