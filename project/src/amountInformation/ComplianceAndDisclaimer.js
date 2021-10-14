import React, { Component } from 'react'

class ComplianceAndDisclaimer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             disclaimer: "This is a disclaimer box"
        }
        this.inputing = this.inputing.bind(this)
    }
    inputing=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    
    render() {
        const {disclaimer} = this.state
        return (
            <div id="complianceAndDisclaimer">
                <p className="title">COMPLIANCE AND DISCLAIMER</p>
                <div>
                    <main className="column">
                        <p htmlFor="disclaimer">Enter a disclamier infrormation</p>
                        <textarea id="disclaimer" name="disclaimer" value={disclaimer} onChange={this.inputing} rows="4" cols="50"/>
                        <span>Put your tax information if possible</span>
                    </main>

                </div>
            </div>
        )
    }
}

export default ComplianceAndDisclaimer
