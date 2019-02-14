import React, { Component } from 'react';
//import Smallcompany from './smallcompany';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
//import {deleteCompany} from '../actions';
//import store from '../store'

class AddCompany extends Component {

    state = {
        toListCompanies: false
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const name = this.getCompanyName.value;
        const contact = this.getCompanyContact.value;
        const financials = this.getCompanyFinancials.value;
        const status = this.getCompanyStatus.value;

        const company = {
            id: new Date(),
            name,
            contact,
            financials,
            status
        }

        console.log("Company: ",company)

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
