import React, { Component } from 'react'

class DonationBar extends Component {
    render() {
        return (
            <div className="donationBar">
                <progress value="30" max="100"></progress>
                <div className="donationUpdateCard">
                    <div className="raised">
                        <div className="value">
                            <input type="button" defaultValue="$" id="currency"/>
                            <input type="button" defaultValue="0" id="value"/>
                        </div>
                        <label>Raised</label>
                    </div>
                    <div className="donations">
                        <div className="value">
                            <input type="button" defaultValue="0" id="value"/>
                        </div>
                        <label>Donations</label>
                    </div>
                    <div className="goal">
                        <div className="value">
                            <input type="button" defaultValue="$" id="currency"/>
                            <input type="button" defaultValue="100" id="value"/>
                        </div>
                        <label>Goal</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default DonationBar
