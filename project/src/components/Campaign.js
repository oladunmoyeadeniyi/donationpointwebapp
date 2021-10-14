import React from 'react'


function Campaign(props) {
    return (
        <div className="campaignCard">
            <p className="company">{props.company}</p>
            <div className="amount">
                <p>{props.raised}<span>Raised</span></p>
                <p>{props.donation}<span>Donation</span></p>
            </div>
            <div className="tabs">
            <div className="cardTab">Show Embed Code</div>
            <div className="cardTab">Edit Page</div>
            <div className="cardTab">Preview Page</div>
            <div className="cardTab">Publish Page</div>        
            </div>
        </div>
    )
}

export default Campaign
