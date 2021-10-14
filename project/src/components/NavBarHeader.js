import React from 'react'


function NavBarHeader() {
    return (
        <div className="header">
            <div className="headerTopWrapper">
                <div className="">
                    {/* the div wrapping the top header  */}
                    <div className="hearder_top">
                        {/* the contents of the top header  */}
                        <div>
                            <span>
                                <i className="">&lt;</i>
                                Back to Campaigns
                            </span>
                        </div>
                        <div>
                            <h2 id="campaignName">Your Campaign Name</h2>
                        </div>
                        <div>
                            <button className="publishBtn" type="button">&#10003; Publish</button>
                            <input type="button" defaultValue="View widget live"></input>
                        </div>

                    </div>
                </div>
            </div>
            <div>
            <div className="headerDownWrapper">
                {/* the div wrapping the progress bars in the header  */}
                <div className="header_down">
                    <form>
                        <div id="amount-infomation">
                            <input type="radio" name="amount-infomation"/>
                            <label htmlFor="amount-infomation">Amount information</label>
                        </div>
                        <span></span>
                        <div id="donor-infomation">
                            <input type="radio" name="donor-infomation"/>
                            <label htmlFor="donor-infomation">Donor information</label>
                        </div>
                        <span></span>
                        <div id="payment-infomation">
                            <input type="radio" name="payment-infomation"/>
                            <label htmlFor="payment-infomation">Payment information</label>
                        </div>
                        <span></span>
                        <div id="thank-you">
                            <input type="radio" name="thank-you"/>
                            <label htmlFor="payment-infomation">Set Thank You message</label>
                        </div> 
                    </form>
                    {/* <div className="flex"> */}
                        <div className="widget">
                            <p>Live Widget Preview</p>
                        </div>
                        <div className="embed">
                            <button>Show Embed Code</button>
                        </div>

                    {/* </div> */}
                </div>
            </div>
            </div>
        </div>
    )
}

export default NavBarHeader
