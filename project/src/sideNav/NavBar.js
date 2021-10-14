import React from 'react'
import logo from '../images/Logo.png';
import Dashboard from './Dashboard'
import Addons from './Addons';
import Account from './Account';

function NavBar() {
    return (
        <div className="side">
        <div className="SideBar">
            <img src={logo} alt=""/>
            <Dashboard />
            <Addons/>
            <Account />
            <button id='logout'>Logout</button>
        </div>
        </div>
    )
}

export default NavBar
