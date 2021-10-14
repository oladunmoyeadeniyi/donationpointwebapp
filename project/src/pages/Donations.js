import React from 'react'
import NavBar from '../sideNav/NavBar';
import Campaigns from '../components/Campaigns';
import Header from '../sideNav/Header';
import Dropdown from '../components/Dropdown';

function Donations() {
    return (
        <div className="sideSplit">
      <NavBar/>
      <div className="rightSide"> 
       <Dropdown activ = "sort" />
      </div>
      </div>
    )
}

export default Donations
