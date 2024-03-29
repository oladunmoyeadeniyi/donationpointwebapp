import React, { Component } from 'react'
import '../amountInformation/AmountInformation.css'
import '../donorInformation/DonorInformation.css'
// import CardAmountInformation from '../amountInformation/CardAmoutInformation'
import CardDonorInformation from '../donorInformation/CardDonorInformation'

class RightCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             next: "Next"
        }
    };
    formSubmmit(e){
        e.preventDefault();
    };
    
    render() {
        const {next} = this.state
        return (
            <form onSubmit={this.formSubmmit}>
                <div id="rightCard">
                    <div className="card-header">
                        <h2>Amount information</h2>
                        <div>
                            <input type="radio" name="amount-info"/>
                            <input type="radio" name="amount-info"/>
                            <input type="radio" name="amount-info"/>
                            <input type="radio" name="amount-info"/>
                        </div>
                    </div>
                    <div className="body-content">
                        <div className="body">
                            {/* <CardAmountInformation/> */}
                            <CardDonorInformation/>

                        </div>
                        <div className="next">
                            {
                                <input type="submit" name="next" value={next}/>
                                // <input type="button" defaultValue="Donate"/>
                                // <input type="button" defaultValue="Complete"/>
                            }
                        </div>
                        <div className="footText">
                            <p>`The information provided by [business entity name] (“we,” “us” or “our”) on [website name] (the “Site”) [and our mobile application] is for general informational purposes only. `</p>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default RightCard
