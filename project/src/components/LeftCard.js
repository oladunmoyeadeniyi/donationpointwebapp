import React, { Component } from 'react'
import HigherOrderComponent from './HOComponent';
import "../amountInformation/AmountInformation.css"
import LeftParentAmountInformation from '../amountInformation/LeftParentAmountInformation';
// import LeftParentDonorInformation from '../donorInformation/LeftParentDonorInformation';


class LeftCard extends Component {
    render() {
        const {button,formSubmmit} = this.props
        return (
            <form id="leftCard" onSubmit={formSubmmit}>
                <div className="body">
                    <LeftParentAmountInformation/>
                    {/* <LeftParentDonorInformation/> */}

                </div>
                <div className="nextPage">
                    {
                        <input type="submit" value={button}/>
                        // <input type="button" defaultValue="Publish and view Campaign"/>
                    }
                </div>
            </form>
        )
    }
}

export default HigherOrderComponent(LeftCard)
