import React from 'react'
import './Navbar.css'
import Menu from './Menu'
import { FaMoneyBill } from 'react-icons/fa';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar-container">
                <Menu title="My money" icon={<FaMoneyBill size="" />}/>
                
            </nav>
        </div>
    )
}

export default Navbar
