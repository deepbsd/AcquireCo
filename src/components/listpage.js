import React, { Component } from 'react';
import Smallcompany from './smallcompany';

class Listpage extends Component {

    constructor(props){
        super(props);
        this.state = {
            companies: [
                {
                    name: "Foo Company",
                    contact: "Joe Foo",
                    financials: "Really Good!",
                    status: "still researching"
                },
                {
                    name: "Bar Company",
                    contact: "Joe Bar",
                    financials: "Pretty Good!",
                    status: "still researching"
                },
                {
                    name: "Baz Company",
                    contact: "Joe Baz",
                    financials: "Not too bad, really",
                    status: "still researching"
                }
            ]
        }
    }

  render() {
      const companies = this.state.companies.map((company, index) => {
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

export default Listpage;
