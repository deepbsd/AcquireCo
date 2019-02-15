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
        const financials = this.getCompanyFinancials.value;
        const status = this.getCompanyStatus.value;

        const company = {
            id: this.props.location.state.id,
            name,
            contact,
            financials,
            status
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
            //let that = this;
            //setTimeout(function(){
            //    console.log("company? ",that.props.location.state)
            //    console.log("Companies in store: ",that.props.companies)
            //},1000)
        //}

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
