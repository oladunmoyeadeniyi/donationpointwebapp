import React, { Component } from 'react'
import './DonorInformation.css'
import '../amountInformation/AmountInformation.css'


class EmploymentInformation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            customElement: "",
            addCustomElement: "+ Add a new custom field",
        }
        this.inputing = this.inputing.bind(this);
    }
    inputing=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    render() {
        const {customElement,addCustomElement} = this.state
        const customFieldElement=(e)=>{
            if(e.target.name === "addCustomElement"){
                let ul = document.querySelector("ul#customField")
                let li = document.createElement("li")
                let input = document.createElement("input")
                input.type = "text";
                input.value = `${customElement}`;
                input.placeholder = "Enter your field name";
                input.name = "customElement"
                input.setAttribute = ("onChange",this.inputing);
                let span = document.createElement('span')
                span.className = "delete"
                span.innerHTML = '<i className="">&times;</i>'
                li.appendChild(input);
                li.appendChild(span);         
                ul.appendChild(li);
            };
            if(e.target.parentElement.classList.contains("delete")){
                e.target.parentElement.parentElement.remove()
            };
            e.preventDefault();
        };
        return (
            <div id="employmentInformation">
                <p className="title">EMPLOYMENT INFORMATION</p>
                <div>
                    <main>
                        <div>
                            <input type="checkbox"/>
                            <label>Enable company donation</label>
                        </div>
                        <div>
                            <label className="label">
                                <div className="toggle greenBackground">
                                    <input className="toggle-state" type="checkbox" name="employeeInformation" value="" />
                                    <div className="indicator greenButton"></div>
                                </div>
                                <label htmlFor="employeeInformation">Collect Employee information</label>
                                <input type="checkbox" name="optionalemployeeInformation"/>
                                <label htmlFor="optionalemployeeInformation">Optional</label>
                            </label>
                        </div>
                    </main>
                    <main>
                        <div>
                            <input type="checkbox" name="custom-field"/>
                            <label htmlFor="custom-field">Add a custom field</label>
                        </div>
                        <ul id="customField" onClick={customFieldElement}>
                            <li id="holder">
                                <input type="text" name="customElement" value={customElement} 
                                onChange={this.inputing} placeholder="Enter your field name"/>
                                <span className="delete">
                                    <i className="">&times;</i>
                                </span>
                            </li>
                        </ul>
                        <div>
                            <input type="button" name="addCustomElement" value={addCustomElement} onClick={customFieldElement}/>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default EmploymentInformation
