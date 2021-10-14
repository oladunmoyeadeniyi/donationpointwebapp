import React from 'react'
import forward from '../images/forward.png';

function Account() {
    return (
        <div>
            <div className="subheader">
        <h3>Account</h3>
        <img src={forward} alt=""/>
        </div>
        <ul>
            <li>Loan Details</li>
            <li>Team Member</li>
            <li>Organization Call</li>
            <li>Fraud Prevention</li>
            <li>Payment Method</li>
        </ul>
        </div>
    )
}

export default Account
