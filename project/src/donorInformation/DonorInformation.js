import React, { Component } from 'react'
import './DonorInformation.css'
import '../amountInformation/AmountInformation.css'

class DonorInformation extends Component {
    render() {
        return (
            <div id="donorInformation">
                <p className="title">DONOR INFORMATION</p>
                <div>
                    <main className="row">
                        <div>
                            <label className="label">
                                <div className="toggle greenBackground">
                                    <input className="toggle-state" type="checkbox" name="donorAddress" value="" />
                                    <div className="indicator greenButton"></div>
                                </div>
                                <label htmlFor="donorAddress">Collect Donor’s address</label>
                                <input type="checkbox" name="optionalAddress"/>
                                <label htmlFor="optionalAddress">Optional</label>
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <div className="toggle greenBackground">
                                    <input className="toggle-state" type="checkbox" name="donorPhone" value="" />
                                    <div className="indicator greenButton"></div>
                                </div>
                                <label htmlFor="donorPhone">Collect Donor’s Phone number</label>
                                <input type="checkbox" name="optionalPhone"/>
                                <label htmlFor="optionalPhone">Optional</label>
                            </label>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default DonorInformation
