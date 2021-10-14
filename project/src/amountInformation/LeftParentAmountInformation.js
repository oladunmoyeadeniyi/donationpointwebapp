import React, { Component } from 'react'
import GeneralSettings from './GeneralSettings'
import DonorPreferences from './DonorPreferences'
import AmountInformation from './AmountInformation'
import ComplianceAndDisclaimer from './ComplianceAndDisclaimer'

class LeftParentAmountInformation extends Component {
    render() {
        return (
            <>
                <GeneralSettings ref= {this.inputRef}/>
                <DonorPreferences/>
                <AmountInformation/>
                <ComplianceAndDisclaimer/>
            </>
        )
    }
}

export default LeftParentAmountInformation
