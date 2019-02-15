import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {Redirect} from 'react-router-dom';


class EditCompany extends Component {

    handleEdit = (ev) => {
        ev.preventDefault();
        const newName = this.getCompanyName.value;
        const newContact = this.getCompanyContact.value;
        const newFinancials = this.getCompanyFinancials.value;
        const newStatus = this.getCompanyStatus.value;

        const company = {
            newName,
            newContact,
            newFinancials,
            newStatus,
            editing: false
        }
        this.props.dispatch({type: 'UPDATE_COMPANY', id: this.props.company.id, company: company})
    }
    render(){

        if (true){
            console.log("company? ",this.props.location.state)
        }

        return(
          <div className="editCompany">
            <h2>Edit Company</h2>
            <form onSubmit={this.handleEdit} >
               <div className="formGroup">
                   <label htmlFor="formInput">Name of Company</label><br />
                   <input type="text" ref={(input)=>this.getCompanyName = input}  
                     defaultValue={this.props.location.state.name}      
                   />
               </div>
            
               <div className="formGroup">
                   <label htmlFor="formInput">Contact at Company</label><br />
                   <input type="text" ref={(input)=>this.getCompanyContact = input}  
                     defaultValue={this.props.location.state.contact}      
                   />
               </div>
            
               <div className="formGroup">
                   <label htmlFor="formInput">Financials</label><br />
                   <input type="text" ref={(input)=>this.getCompanyFinancials = input}  
                     defaultValue={this.props.location.state.financials}      
                   />
               </div>

               <div className="formGroup">
                   <label htmlFor="formInput">Status</label><br />
                   <input type="text" ref={(input)=>this.getCompanyStatus = input}  
                     defaultValue={this.props.location.state.status}      
                   />
               </div>

               <button>Update</button>
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
