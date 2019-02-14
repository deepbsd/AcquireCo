import React, { Component } from 'react';
import Smallcompany from './smallcompany';
import {connect} from 'react-redux';
import store from '../store'

class Listpage extends Component {

    deleteCompany = (ev,id) => {
      ev.preventDefault();
      alert("id: ", id)
    }

    render() {
      const companies = this.props.companies.map((company, index) => {
          return (
              <div>
                  <hr />
                  <Smallcompany key={index} {...company} />
                  <button className="listButton">Edit Company</button>
                  <button className="listButton" onClick={(ev) => this.deleteCompany(company.id)} >Delete Company</button>
              </div>
          )
      })

    return (
      <div className="Listpage">
        <h1>Companies Under Consideration</h1>
          <button className="AddCompany">Add Company</button>
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
