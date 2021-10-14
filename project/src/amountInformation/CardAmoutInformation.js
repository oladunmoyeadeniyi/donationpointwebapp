import React, { Component } from 'react'

export class CardAmoutInformation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            amount: 50,
            comment: "This charity is for me and my family.",
        }
        this.inputing = this.inputing.bind(this)
    }
    inputing=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    render() {
        const {amount,comment} = this.state
        return (
            <div id="cardAmountInformation">
                <div>
                    <img src="" alt="logo" id="logo"/>
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
                            <select className="value" value={amount} name="amount" onChange={this.inputing}>
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
                            <textarea type="text" value={comment} name="comment" onChange={this.inputing}/>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default CardAmoutInformation
