import React, { Component } from 'react'
import DonorInformation from './DonorInformation'
import EmploymentInformation from './EmploymentInformation'

class LeftParentDonorInformation extends Component {
    render() {
        return (
            <>
                <DonorInformation/>
                <EmploymentInformation/>
            </>
        )
    }
}

export default LeftParentDonorInformation
