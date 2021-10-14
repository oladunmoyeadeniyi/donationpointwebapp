import React, { Component } from 'react'
import './Page.css'
import LeftCard from './LeftCard'
import NavBarHeader from './NavBarHeader'
import RightCard from './RightCard'
import DonationBar from './DonationBar'

class Page extends Component {
    render() {
        
        return (
            <div id="page">
                <div >
                        <NavBarHeader></NavBarHeader>
                </div>
                <div className="bodyWrapper">
                    <div className="page">
                        <div className="pageBody">
                            <LeftCard/>
                            <div>
                                <DonationBar/>
                                <RightCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page
