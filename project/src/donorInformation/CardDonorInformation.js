import React, { Component } from 'react'
import Countries from '../components/Countries'

class CardDonorInformation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address: "",
            postalCode: "",
            zipCode: "",
            stateProvince: "",
            employer: "",
            occupation: ""
        };
        this.inputing = this.inputing.bind(this);
    }
    inputing=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {firstName,lastName,email,phoneNumber,address,postalCode,zipCode,stateProvince,employer,occupation,} = this.state;
        return (
            <div id="cardDonorInformation">
                <main>
                    <div className="row">
                        <input type="text" name="firstName" value={firstName} onChange={this.inputing} placeholder="First Name"/>
                        <input type="text" name="lastName" value={lastName} onChange={this.inputing} placeholder="Last Name"/>
                    </div>
                    <div className="row">
                        <input className="big" name="email" type="email" value={email} onChange={this.inputing} placeholder="Email Address"/>
                    </div>
                    <div className="row">
                        <input type="tel" name="phoneNumber" value={phoneNumber} onChange={this.inputing} placeholder="Phone Number"/>
                        <Countries></Countries>
                    </div>
                    <div className="row">
                        <input className="big" type="text" name="address" value={address} onChange={this.inputing} placeholder="Your Address"/>
                    </div>
                    <div className="row">
                        <input type="text" name="postalCode" value={postalCode} onChange={this.inputing} placeholder="Postal code"/>
                        <input type="text" name="zipCode" value={zipCode} onChange={this.inputing} placeholder="Zipcode"/>
                    </div>
                    <div className="row">
                        <input className="big" name="stateProvince" type="text" value={stateProvince} onChange={this.inputing} placeholder="State/Province"/>
                    </div>
                    <div className="column">
                        <p>Are you currently employed</p>
                        <div className="row">
                            <div className="row yes">
                                <input type="radio" name="status"/>
                                <label htmlFor="status">Yes</label>
                            </div>
                            <div className="row no">
                                <input type="radio" name="status"/>
                                <label htmlFor="status">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <input type="text" name="employer" value={employer} onChange={this.inputing} placeholder="Employer"/>
                        <input type="text" name="occupation" value={occupation} onChange={this.inputing} placeholder="Occupation"/>
                    </div>
                    <div className="row subscriptionBox">
                        <input type="checkbox"/>
                        <label>Subscribe to our mailing list to receive updates from us, you can unsubscribe anytime</label>
                    </div>
                    <div className="row subscriptionBox">
                        <input type="checkbox"/>
                        <label>By Donating on this form, you agree to our terms of conditions and privacy Policy</label>
                    </div>

                    

                </main>
            </div>
        )
    }
}

export default CardDonorInformation
