import React from 'react'
import forward from '../images/forward.png';

function Addons() {
    return (
        <div>
        <div className="subheader">
        <h3>Addons</h3>
        <img src={forward} alt=""/>
        </div>
        <ul>
            <li>Text to give</li>
            <li>Mailchimp Integration</li>
            <li>Zapier Integration</li>
            <li>Salesforce Integration</li>
        </ul>
    </div>
    )
}

export default Addons
