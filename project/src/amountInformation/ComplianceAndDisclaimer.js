import React, { Component } from 'react'
import HigherOrderComponent from '../components/HOComponent';

class ComplianceAndDisclaimer extends Component {
    render() {
        const {disclaimer,inputing} = this.props
        return (
            <div id="complianceAndDisclaimer">
                <p className="title">COMPLIANCE AND DISCLAIMER</p>
                <div>
                    <main className="column">
                        <p htmlFor="disclaimer">Enter a disclamier infrormation</p>
                        <textarea id="disclaimer" name="disclaimer" value={disclaimer} onChange={inputing} rows="4" cols="50"/>
                        <span>Put your tax information if possible</span>
                    </main>

                </div>
            </div>
        )
    }
}

export default HigherOrderComponent(ComplianceAndDisclaimer)
