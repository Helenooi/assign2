import '../css/menu.css'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {
    const[isOpen,setIsOpen]=useState(false);

    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    }
    return ( 

        
        <>
        
      <header>
        
          <div className="container">
            <nav>
            <div className="logo">
                <h2>Penang Holiao</h2>
            </div>

           <ul className={isOpen ? "nav-link active":"nav-link"}>
           <li><a href="#homepage" className="active">Home</a></li>
             <li><a href="#contact">Contact Us</a></li>
            <li><a href="#aboutus">About Us</a></li>

        </ul>
        <div className="icon" onClick={toggleMenu}>
        <IoMenu />
        </div>
        </nav>
        </div>
        </header>

<div className="header2">
    
</div>
        </>
    );
}

export default Navbar;

