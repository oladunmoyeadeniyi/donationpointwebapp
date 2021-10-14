import React, { Component } from 'react'

class GeneralSettings extends Component {
    constructor(props) {
        super(props)
        this.state = {
             campaignName: "",
             language: "English",
             goalAmount: 290,
             colorPalette: "#6A2776",
             logoFile: "",
             slogan: "",
        }
        this.inputing = this.inputing.bind(this)
    }
    inputing=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    render() {
        const {campaignName,language,goalAmount,colorPalette,logoFile,slogan} = this.state

        function uploadLogo(input) {
            input = document.querySelector("#logo")
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    let logo = document.querySelector("#logoDisplay");
                    logo.setAttribute('src', e.target.result);
                    let logoStyle = {display: "flex", width: "inherit", height: "inherit"};
                    Object.assign(logo.style,logoStyle);
                    document.querySelector(".placeHolder").style.display = "none";
                    e.preventDefault();
                };
                return reader.readAsDataURL(input.files[0]);
            }
        };


        return (
            <div id="generalSettings">
                <p className="title">GENERAL SETTINGS</p>
                <div>
                    <main>
                        <div>
                            <div className="row">
                                <div className="campaign">
                                    <p htmlFor="text">Campaign name</p>
                                    <input ref= {this.inputRef} type="text" name="campaignName" value={campaignName} 
                                    onChange={this.inputing} placeholder="Your campaign name"/>
                                </div>
                                <div className="language">
                                    <p htmlFor="text">Form Language</p>
                                    <select value={language} name="language" onChange={this.inputing} 
                                    className="languageInput">
                                        <option>English</option>
                                        <option>French</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column goalAmount">
                                    <p htmlFor="number">Goal Amount</p>
                                    <div>
                                        {/* <select>
                                            <option>$</option>
                                            <option>&#8358;</option>
                                            <option>&euro;</option>
                                        </select> */}
                                        <input type="number" name="goalAmount" value={goalAmount} 
                                        onChange={this.inputing} placeholder="Goal Amount"/>
                                    </div>
                                    <div className="radio">
                                        <label className="label">
                                            <div className="toggle darkBackground">
                                                <input className="toggle-state" type="checkbox" name="check" />
                                                <div className="indicator darkButton"></div>
                                            </div>
                                            <label>Hide goal amount</label>
                                        </label>
                                    </div>
                                </div>
                                <div className="column widget">
                                    <p>Widget Color</p>
                                    <div className="row">
                                        <input type="color" value={colorPalette} name="colorPalette" onChange={this.inputing}/>
                                        <input type="text" className="colorCode" value={colorPalette.toLocaleUpperCase()} 
                                        name="colorPalette" onChange={this.inputing}></input>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="logo">
                            <p>Add your brand logo and slogan</p>
                            <div className="row">
                                <div className="column">
                                    <div>
                                        <input type="checkbox" defaultChecked/>
                                        <span>Add Brand logo</span>    
                                    </div>
                                    <div id="logoUpload" className="">
                                        <img src="" id="logoDisplay" alt="Upload Logo"/>
                                        <p className="placeHolder"><span>Upload</span> Logo</p>
                                        <input type="file" id="logo" accept="image/gif, image/jpeg, image/jpg, image/png"
                                        onChange={()=>uploadLogo(this.props.input)}
                                        placeholder="Upload Logo" value={logoFile} name="logoFile"/>
                                    </div>
                                </div>
                                <div className="column">
                                    <div>
                                        <input type="checkbox" defaultChecked/>
                                        <span>Slogan</span>    
                                    </div>
                                    <div>
                                        <input type="text" id="slogan" value={slogan} name="slogan" 
                                        onChange={this.inputing} placeholder="Input your slogan"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default GeneralSettings