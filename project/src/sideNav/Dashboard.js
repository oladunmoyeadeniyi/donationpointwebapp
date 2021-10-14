import React from 'react'
import forward from '../images/forward.png';

function Dashboard() {
    return (
        <div>
            <div className="subheader">
            <h3>Dashboard</h3>
            <img src={forward} alt=""/>
            </div>
            <ul>
                <li>Campaigns</li>
                <li>Donations</li>
            </ul>
        </div>
    )
}

export default Dashboard
