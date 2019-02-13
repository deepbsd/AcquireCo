import React, { Component } from 'react';
import Smallcompany from './smallcompany';
import {connect} from 'react-redux';

class Listpage extends Component {

    constructor(props){
        super(props);
    }

  render() {
      const companies = this.props.companies.map((company, index) => {
          return (
              <div>
                  <hr />
                  <Smallcompany key={index} {...company} />
                  <button className="EditCompany">Edit Company</button>
                  <button className="EditCompany">Delete Company</button>
              </div>
          )
      })

    return (
      <div className="Listpage">
        <h1>Companies Under Consideration</h1>
        {companies}
        <hr />
        <button className="AddCompany">Add Company</button>
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
