import React, { Component } from 'react'
import HigherOrderComponent from '../components/HOComponent'

export class CardAmoutInformation extends Component {
    render() {
        const {inputing,uploadLogo,amount,comment} = this.props
        return (
            <div id="cardAmountInformation">
                <div>
                    <img src="" id="logoDisplay" alt="Upload Logo"/>
                </div>
                <p className="slogan">Every penny counts</p>
                <h1 className="message">Donor service for iftar charity</h1>
                <main>
                    <div className="period">
                        <input className="" type="button" defaultValue="One Time"/>
                        <input className="active" type="button" defaultValue="Quaterly"/>
                    </div>
                    <div className="row">
                        <select className="currency">
                            <option>USD Dollar</option>
                            <option></option>
                            <option></option>
                        </select>
                        <div>
                            {/* <input type="button" defaultValue="$"/> */}
                            <select className="value" value={amount} name="amount" onChange={inputing}>
                                <option>50</option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className="column comment">
                        <div className="row">
                            <input type="checkbox"/>
                            <label>Add comments</label>
                        </div>
                        <div>
                            <textarea type="text" value={comment} name="comment" onChange={inputing}/>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default HigherOrderComponent(CardAmoutInformation)
