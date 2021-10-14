import React from 'react'
import Campaign from './Campaign'
import CampaignList from './CampaignList'

function createCampaign(camps){
    return (
    <Campaign
    company={camps.company}
    raised={camps.raised}
    donation={camps.donation}
    />
    )
}
function Campaigns() {
    return (
        <div id="campaigns">
            {CampaignList.map(createCampaign)}
        </div>
    )
}

export default Campaigns
