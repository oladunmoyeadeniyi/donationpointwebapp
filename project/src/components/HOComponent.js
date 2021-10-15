import React from "react";

const HigherOrderComponent = (WrappedComponent) => {
    class HOComponent extends React.Component {
        constructor(props) {
            super(props)
            // this.inputRef = React.createRef()
        //This is the initial states for all the input elements on the form page
        this.state = {
            //GeneralSettings
            campaignName: "",language: "English",goalAmount: 290,colorPalette: "#6A2776",logoFile: "",slogan: "",
            //CardAmountInformation
            amount: 50,comment: "This charity is for me and my family.",
            //RightCard
            next: "Next",
            //LeftCard
            button: "Next Page",
            //AmountInformation
            minimumAmount: 290,
            //ComplianceAndDislaimer
            disclaimer: "This is a disclaimer box",
            //DonorPreferences
            period: "Quarterly",currency: "USD Dollar",actionMessage: "Donor service for iftar charity",
            //EmploymentInformation
            customElement: "",addCustomElement: "+ Add a new custom field",
        }
        this.inputing = this.inputing.bind(this);
        this.uploadLogo = this.uploadLogo.bind(this);
        this.formSubmmit = this.formSubmmit.bind(this)
    }
    //This sets state on input change to all input element in the form
    inputing=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    //This is the upload logo function
    uploadLogo = (input) => {
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
    //Form default beheviour prevention
    formSubmmit = (e) => {
        e.preventDefault();
    };
    //Element reference focus
    componentDidMount () {
        // this.inputRef.current.focus()
        // console.log(this.inputRef.current);
    }




        render(){
            const {campaignName,language,goalAmount,colorPalette,logoFile,slogan,amount,comment,
                next,button,minimumAmount,disclaimer,period,currency,actionMessage,customElement,addCustomElement,
            } = this.state
            return (
                <WrappedComponent inputing={this.inputing} uploadLogo={this.uploadLogo} formSubmmit={this.formSubmmit} 
                campaignName={campaignName} language={language} goalAmount={goalAmount} colorPalette={colorPalette} logoFile={logoFile} slogan={slogan}
                amount={amount} comment={comment} next={next} button={button} minimumAmount={minimumAmount} disclaimer={disclaimer} period={period}
                currency={currency} actionMessage={actionMessage} customElement={customElement} addCustomElement={addCustomElement}  {...this.props}
                />
            )
        }
    }
    return HOComponent
}
export default HigherOrderComponent