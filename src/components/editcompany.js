import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


class EditCompany extends Component {

    state = {
        toListCompanies: false
    }

    handleEdit = (ev) => {
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
        const fiveYrEPSGrowth = this.getCompanyfiveYrEPSG.value;
        const PE = this.getCompanyPE.value;
        const PBV = this.getCompanyPBV.value;
        const DivPS = this.getCompanyDivPS.value;
        const Status = this.getCompanyStatus.value;
        const comment = this.getCompanyComment.value;

        const company = {
            id: this.props.location.state.thiscompany.id,
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
        //console.log("what's my id? ", this.props.location.state.id)

        this.props.dispatch({type: 'UPDATE_COMPANY', company: company})
    
        //Leave this page...
        this.setState({
            toListCompanies: true
        })
    
    }



    render(){

        if (this.state.toListCompanies){
            return <Redirect to="listpage" />
        }
        //if (true){
        //    let that = this;
        //    setTimeout(function(){
        //        console.log("company? ",that.props.location.state)
        //        console.log("Companies in store: ",that.props.companies)
        //    },1000)
        //}

        return(
          <div className="editCompany">
            <h2>Edit Company</h2>
            <form onSubmit={this.handleEdit} >
               <div className="formGroup">
                   <label className="label" htmlFor="formInput">Name of Company</label><br />
                   <input type="text" ref={(input)=>this.getCompanyName = input}  
                     defaultValue={this.props.location.state.thiscompany.name}      
                   />
               </div>
            

               <fieldset>
               <legend>Company Contact Information</legend>
               <div className="formGroup">
                   <label className="label" htmlFor="formInput">Contact at Company</label><br />
                   <input type="text" ref={(input)=>this.getCompanyContact = input}  
                     defaultValue={this.props.location.state.thiscompany.contact}      
                   />
               </div>
            
               <div className="formGroup">
                   <label className="label" htmlFor="formInput">Contact Email</label><br />
                   <input type="email" ref={(input)=>this.getCompanyContactEmail = input}  
                     defaultValue={this.props.location.state.thiscompany.contactEmail}      
                   />
               </div>
            
               <div className="formGroup">
                   <label className="label" htmlFor="formInput">Contact Phone</label><br />
                   <input type="tel" ref={(input)=>this.getCompanyContactPhone = input}  
                     defaultValue={this.props.location.state.thiscompany.contactPhone}      
                   />
               </div>
               </fieldset>
            
               <fieldset>
               <legend>Company Information</legend>
               <div className="formGroup">
                   <label className="label" htmlFor="formInput">Industry</label><br />
                   <input type="tel" ref={(input)=>this.getCompanyIndustry = input}  
                     defaultValue={this.props.location.state.thiscompany.industry}      
                   />
               </div>
            
               <div className="formGroup">
                   <label className="label" htmlFor="formInput">Position</label><br />
                   <input type="tel" ref={(input)=>this.getCompanyPosition = input}  
                     defaultValue={this.props.location.state.thiscompany.position}      
                   />
               </div>
               </fieldset>
            
               <fieldset>
               <legend>Financial Information</legend>
               <div className="formGroup">
                   <label className="label" htmlFor="formInput">S&P Quality</label><br />
                   <input type="text" ref={(input)=>this.getCompanySPValue = input}  
                     defaultValue={this.props.location.state.thiscompany.SPValue}      
                   />
               </div>

               <div className="formGroup">
                   <label className="label" htmlFor="formInput">Debt To Current Assets</label><br />
                   <input type="text" ref={(input)=>this.getCompanyDebtToCA = input}  
                     defaultValue={this.props.location.state.thiscompany.DebtToCA}      
                   />
               </div>
               
               <div className="formGroup">
                   <label className="label" htmlFor="formInput">Current Ratio</label><br />
                   <input type="text" ref={(input)=>this.getCompanyCR = input}  
                     defaultValue={this.props.location.state.thiscompany.CR}      
                   />
               </div>

               <div className="formGroup">
                   <label className="label" htmlFor="formInput">5 YR EPS Growth</label><br />
                   <input type="text" ref={(input)=>this.getCompanyfiveYrEPSG = input}  
                     defaultValue={this.props.location.state.thiscompany.fiveYrEPSGrowth}      
                   />
               </div>

               <div className="formGroup">
                   <label className="label" htmlFor="formInput">Price to Earnings</label><br />
                   <input type="text" ref={(input)=>this.getCompanyPE = input}  
                     defaultValue={this.props.location.state.thiscompany.PE}      
                   />
               </div>

               <div className="formGroup">
                   <label className="label" htmlFor="formInput">Price to Book Value</label><br />
                   <input type="text" ref={(input)=>this.getCompanyPBV = input}  
                     defaultValue={this.props.location.state.thiscompany.PBV}      
                   />
               </div>

               <div className="formGroup">
                   <label className="label" htmlFor="formInput">Dividend Per Share</label><br />
                   <input type="text" ref={(input)=>this.getCompanyDivPS = input}  
                     defaultValue={this.props.location.state.thiscompany.DivPS}      
                   />
               </div>
               </fieldset>

              <fieldset>
               <legend>Acquireco Status</legend>
               <div className="formGroup">
                   <label className="label" htmlFor="formInput">Status</label><br />
                   <input type="text" ref={(input)=>this.getCompanyStatus = input}  
                     defaultValue={this.props.location.state.thiscompany.Status}      
                   />
               </div>
               
               <div className="formGroup">
                   <label className="label" htmlFor="formInput">Comment</label><br />
                   <textarea type="text" ref={(input)=>this.getCompanyComment = input}  
                     defaultValue={this.props.location.state.thiscompany.comment}      
                   />
               </div>
              </fieldset>


               <button className="Button">Update</button>
            </form>
            
          </div>

        )

    }

}

const mapStateToProps = state => {
    return {
        companies: state.companies
    }
}

export default connect(mapStateToProps)(EditCompany)
