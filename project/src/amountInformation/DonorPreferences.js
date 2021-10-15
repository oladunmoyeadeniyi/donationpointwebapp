import React, { Component } from 'react'
import HigherOrderComponent from '../components/HOComponent'

class DonorPreferences extends Component {
    render() {
        const {period,currency,actionMessage,inputing} = this.props
        return (
            <div id="donorPreferences">
                <p className="title">DONOR PREFERENCES</p>
                <div>
                    <main>
                        <div>
                            <div className="row">
                                <div className="column selectType">
                                    <p>Select types</p>
                                    <div className="row">
                                        <input type="checkbox"  name="one-time"/>
                                        <label htmlFor="one-time">One time</label>
                                        <input type="checkbox" name="quarterly"/>
                                        <label htmlFor="quarterly">Quaterly</label>
                                    </div>
                                </div>
                                <div className="column defaultSelection">
                                    <p>Set Default Selection</p>
                                    <select name="period" value={period} onChange={inputing}>
                                        <option>Quaterly</option>
                                        <option>One time</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="donationCurrency">
                                    <p>Set Donation Currency</p>
                                    <select name="currency" value={currency} onChange={inputing}>
                                        <option>USD Dollar</option>
                                        <option>NGN</option>
                                        <option>EURO</option>
                                    </select>
                                </div>
                                <div className="donorComment">
                                    <p>Donor comments</p>
                                    <div>
                                        <label className="label">
                                            <div className="toggle greenBackground">
                                                <input className="toggle-state" type="checkbox" name="check" value="" />
                                                <div className="indicator greenButton"></div>
                                            </div>
                                            <label htmlFor="donorComments">Allow donors to add comments</label>
                                            <input type="checkbox" name="optional"/>
                                            <label htmlFor="optional">Optional</label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="column actionMessage">
                                <p>Call to action message</p>
                                <textarea type="text" name="actionMessage" value={actionMessage} onChange={inputing}/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default HigherOrderComponent(DonorPreferences)
