import React, { Component } from 'react'
import HigherOrderComponent from '../components/HOComponent'

class AmountInformation extends Component {
    render() {
        const {minimumAmount,inputing} = this.props
        
        return (
            <div id="amountInformation">
                <p className="title">AMOUNT INFORMATION</p>
                <main>
                    <div className="row">
                        <div className="column">
                            <div className="minimumAmount">
                                <p>Minimum Amount</p>
                                <div>
                                    <input type="checkbox" name="minimum-amount" defaultChecked/>
                                    <label htmlFor="minimum-amount">Enter a minimum amount you want to collect</label>
                                </div>
                            </div>
                            {/* <div>
                                <select>
                                <option>$</option>
                                <option>&#8358;</option>
                                <option>&euro;</option>
                                </select>
                            </div>   */}
                            <input type="number" name="minimumAmount" value={minimumAmount} onChange={inputing} placeholder="Your campaign name"/>
                        </div>
                        <div className="column">
                            <p>Processing fee</p>
                            <div className="radio">
                                <label className="label">
                                    <div className="toggle greenBackground">
                                        <input className="toggle-state" type="checkbox" name="check" defaultChecked/>
                                        <div className="indicator greenButton"></div>
                                    </div>
                                    <label htmlFor="donor-processing-fee">Donor covers fees</label>
                                </label>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default HigherOrderComponent(AmountInformation)
