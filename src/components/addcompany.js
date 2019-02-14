import React, { Component } from 'react';
//import Smallcompany from './smallcompany';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
//import {deleteCompany} from '../actions';
//import store from '../store'

class AddCompany extends Component {

    handleSubmit = (ev) => {
        ev.preventDefault();
        const name = this.getCompanyName.value;
        const contact = this.getCompanyContact.value;
        const financials = this.getCompanyFinancials.value;
        const status = this.getCompanyStatus.value;

        const companyData = {
            id: new Date(),
            name,
            contact,
            financials,
            status
        }
        this.props.dispatch({
            type: 'ADD_COMPANY',
            companyData
        });
       
        // reset the default values...
        this.getCompanyName = '';
        this.getCompanyContact = '';
        this.getCompanyFinancials = '';
        this.getCompanyStatus = '';
        
        //Leave this page...
        return <Redirect to="/listpage" />
    }

    render() {

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
               <label htmlFor="formInput">Financials</label><br />
               <input type="text"  ref={(input)=>this.getCompanyFinancials = input} />
           </div>

           <div className="formGroup">
               <label htmlFor="formInput">Status</label><br />
               <input type="text"  ref={(input)=>this.getCompanyStatus = input} />
           </div>
           <button>
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
