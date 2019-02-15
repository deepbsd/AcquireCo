import React, { Component } from 'react';
import Smallcompany from './smallcompany';
import {connect} from 'react-redux';
import {deleteCompany} from '../actions';
import store from '../store';



class Listpage extends Component {

    constructor(props){
        super(props);
        this.deleteCompany = this.deleteCompany.bind(this);
        this.editCompanyRoute = this.editCompanyRoute.bind(this);
        this.addCompanyRoute = this.addCompanyRoute.bind(this);

        this.state = {
            editing: false
        }
    }

    deleteCompany = (ev,company) => {
      ev.preventDefault();
      store.dispatch(deleteCompany(company));
    }
    
    // can I pass the company.id to the editCompany component?
    editCompanyRoute = (ev,company) => {
      ev.preventDefault();
      //console.log("Company: ",company)
      this.props.history.push({
          pathname: '/editcompany',
          state: { thiscompany: company }
      })
    }

    addCompanyRoute(ev, company){
        let path = `addcompany`;
        this.props.history.push(path);
    }

    render() {
      const companies = this.props.companies.map((company, index) => {
          return (
                  <div key={index}>
                      <hr />
                      <Smallcompany key={index} {...company} />
                      <button className="Button" onClick={(ev) => this.editCompanyRoute(ev, company)}>Edit Company</button>
                      <button className="Button" onClick={(ev) => this.deleteCompany(ev, company)} >Delete Company</button>
                  </div>
          )
      })

    return (
      <div className="Listpage">
        <h1>Companies Under Consideration</h1>
          <button className="Button" onClick={this.addCompanyRoute}>Add A Company</button>
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
