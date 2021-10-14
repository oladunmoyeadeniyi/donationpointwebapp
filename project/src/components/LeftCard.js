import React, { Component } from 'react'
import "../amountInformation/AmountInformation.css"
import LeftParentAmountInformation from '../amountInformation/LeftParentAmountInformation';
// import LeftParentDonorInformation from '../donorInformation/LeftParentDonorInformation';


class LeftCard extends Component {
    constructor(props) {
        super(props)
        // this.inputRef = React.createRef()
        this.state = {
             button: "Next Page"
        }
    }
    // componentDidMount(){
    //     this.inputRef.current.focus()
    // }
    // formSubmmit(e){
    //     e.preventDefault();
    // };
    
    render() {
        const {button} = this.state
        return (
            <form id="leftCard" onSubmit={this.formSubmmit}>
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

export default LeftCard
