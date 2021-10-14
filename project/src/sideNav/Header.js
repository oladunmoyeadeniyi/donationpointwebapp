import React, { Component } from 'react'
import Dropdown from '../components/Dropdown';

class Header extends Component {
    render() {
        return (
            <div className="heading">
                {this.props.children}
                <div className="sorted_links">
                <Dropdown list='name'></Dropdown>
                <Dropdown list='car'></Dropdown>
                </div>

            </div>
        )
    }
}

export default Header
