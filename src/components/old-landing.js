import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import landingImage from '../images/shaking_hands_color.jpg';




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
            <img className="landingImg" src={landingImage} alt="SplashImg" />
            <h1>Welcome to AcquireCo!</h1>

            <p className="IntroPara">

            With AcquireCo you can check on your latest company targets for acquisition and check their status,
            review their financials and look up personnel contacts at their company

            </p>

            <button className="Button"  onClick={this.proceed}>Proceed</button>

        </div>
      </div>
    );
  }
}

export default Landing;
