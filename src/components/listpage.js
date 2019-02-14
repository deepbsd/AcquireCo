import React, { Component } from 'react';
import Smallcompany from './smallcompany';
import {connect} from 'react-redux';
import {deleteCompany} from '../actions';
import {AddCompany} from './addcompany';
//import {Redirect} from 'react-router-dom';
import store from '../store';

class Listpage extends Component {

    constructor(props){
        super(props);
        this.deleteCompany = this.deleteCompany.bind(this);
        this.addCompanyRoute = this.addCompanyRoute.bind(this);
    }

    deleteCompany = (ev,company) => {
      ev.preventDefault();
      store.dispatch(deleteCompany(company));
      console.log("companies: ",this.props.companies)
    }

    // I wonder if this resets state from the store??
    addCompanyRoute(){
        let path = `addcompany`;
        this.props.history.push(path);
    }

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
      <div className="Listpage">
        <h1>Companies Under Consideration</h1>
          <button className="AddCompany" onClick={this.addCompanyRoute}>Add Company</button>
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


export default connect(mapStateToProps)(Listpage)
