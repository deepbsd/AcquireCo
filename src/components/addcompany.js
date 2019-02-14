import React, { Component } from 'react';
import Smallcompany from './smallcompany';
import {connect} from 'react-redux';
//import {deleteCompany} from '../actions';
//import store from '../store'

class Addextends Component {

    constructor(props){
        super(props);
        //this.deleteCompany = this.deleteCompany.bind(this);
    }

    //deleteCompany = (ev,company) => {
    //  ev.preventDefault();
    //  store.dispatch(deleteCompany(company));
    //  console.log("companies: ",this.props.companies)
    //}

    render() {
      const companies = this.props.companies.map((company, index) => {
          return (
              <div>
                  <hr />
                  <Smallcompany key={index} {...company} />
                  <button className="listButton">Edit Company</button>
                  <button className="listButton" onClick={(ev) => this.deleteCompany(ev, company)} >Delete Company</button>
              </div>
          )
      })

    return (
      <div className="AddEdit">
        <h1>Companies Under Consideration</h1>
          <button className="AddEdit">Add Company</button>
          {companies}
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
