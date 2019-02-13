import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';



class Landing extends Component {
    constructor(props){
        super(props);

        this.state = {
            proceed: false
        }
    }

    proceed = () => {
        this.setState({
            proceed: true
        });
    }


  render() {

      if (this.state.proceed){
          return <Redirect to="/listpage" />;
      }

    return (
      <div className="App">
        <div className="Wrapper">
            <h1>Welcome to AcquireCo!</h1>

            <p>With AcquireCo you can check on your latest company targets for acquisition and check their status, review their
        financials and look up personnel contacts at their company</p>

            <button className="Linkbutton"  onClick={this.proceed}>Proceed</button>

        </div>
      </div>
    );
  }
}

export default Landing;
