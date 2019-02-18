import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class AddCompany extends Component {

    state = {
        toListCompanies: false
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const name = this.getCompanyName.value;
        const contact = this.getCompanyContact.value;
        const contactEmail = this.getCompanyContactEmail.value;
        const contactPhone = this.getCompanyContactPhone.value;
        const industry = this.getCompanyIndustry.value;
        const position = this.getCompanyPosition.value;
        const SPValue = this.getCompanySPValue.value;
        const DebtToCA = this.getCompanyDebtToCA.value;
        const CR = this.getCompanyCR.value;
        const fiveYrEPSGrowth = this.getFiveYrEPSGrowth.value;
        const PE = this.getCompanyPE.value;
        const PBV = this.getCompanyPBV.value;
        const DivPS = this.getCompanyDivPS.value;
        const Status = this.getCompanyStatus.value;
        const comment = this.getCompanyComment.value;

        const company = {
            id: new Date(),
            name,
            contact,
            contactEmail,
            contactPhone,
            industry,
            position,
            SPValue,
            DebtToCA,
            CR,
            fiveYrEPSGrowth,
            PE,
            PBV,
            DivPS,
            Status,
            comment
        }

        //console.log("Company: ",company)

        this.props.dispatch({
            type: 'ADD_COMPANY',
            company
        });
       
        //Leave this page...
        this.setState({
            toListCompanies: true
        })
    }

    render() {
        if (this.state.toListCompanies){
            return <Redirect to="listpage" />
        }

    return (
      <div className="AddCompany">
        <h1>Add a New Company</h1>
        <form className="addCompanyForm" onSubmit={this.handleSubmit}>
           <div className="formGroup">
               <label htmlFor="formInput">Name of Company</label><br />
               <input type="text" ref={(input)=>this.getCompanyName = input}  />
           </div>

           <div className="formGroup">
               <label htmlFor="formInput">Contact at Company</label><br />
               <input type="text"  ref={(input)=>this.getCompanyContact = input} />
           </div>

           <div className="formGroup">
               <label htmlFor="formInput">Contact Email</label><br />
               <input type="text"  ref={(input)=>this.getCompanyContactEmail = input} />
           </div>
           
           <div className="formGroup">
               <label htmlFor="formInput">Contact Phone</label><br />
               <input type="text"  ref={(input)=>this.getCompanyContactPhone = input} />
           </div>
               
           <div className="formGroup">
               <label className="label" htmlFor="formInput">Industry</label><br />
               <input type="tel" ref={(input)=>this.getCompanyIndustry = input}  />
           </div>
           <div className="formGroup">
               <label className="label" htmlFor="formInput">Position</label><br />
               <input type="tel" ref={(input)=>this.getCompanyPosition = input}  />
           </div>
            
           <div className="formGroup">
               <label htmlFor="formInput">S&P Value Rating</label><br />
               <input type="text"  ref={(input)=>this.getCompanySPValue = input} />
           </div>

           <div className="formGroup">
               <label htmlFor="formInput">Debt to Current Assets</label><br />
               <input type="text"  ref={(input)=>this.getCompanyDebtToCA = input} />
           </div>
           
           <div className="formGroup">
               <label htmlFor="formInput">Current Ratio</label><br />
               <input type="text"  ref={(input)=>this.getCompanyCR = input} />
           </div>

           <div className="formGroup">
               <label htmlFor="formInput">5 YR EPS Growth</label><br />
               <input type="text"  ref={(input)=>this.getFiveYrEPSGrowth = input} />
           </div>

           <div className="formGroup">
               <label htmlFor="formInput">Price to Earnings</label><br />
               <input type="text"  ref={(input)=>this.getCompanyPE = input} />
           </div>

           <div className="formGroup">
               <label htmlFor="formInput">Price to Book Value</label><br />
               <input type="text"  ref={(input)=>this.getCompanyPBV = input} />
           </div>

           <div className="formGroup">
               <label htmlFor="formInput">Dividend Per Share</label><br />
               <input type="text"  ref={(input)=>this.getCompanyDivPS = input} />
           </div>

           <div className="formGroup">
               <label htmlFor="formInput">Status</label><br />
               <input type="text"  ref={(input)=>this.getCompanyStatus = input} />
           </div>
           
        <div className="formGroup">
               <label htmlFor="formInput">Comment</label><br />
               <textarea type="text"  ref={(input)=>this.getCompanyComment = input} />
           </div>
           <button className="Button">
              Submit
           </button>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        companies: state.companies
    }
}


export default connect(mapStateToProps)(AddCompany)
