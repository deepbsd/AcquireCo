import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
//import landingImage from '../images/shaking_hands_color.jpg';

import shakingHands from '../images/shaking_hands_color.jpg';
import tugBoat from '../images/shipyard_tugboat.jpg';
import miningWork from '../images/mining_work.jpg';
import solvingProblems from '../images/solving_problems_color.jpg';

import Slideshow from 'react-slidez';


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
    
      const slides = [
          shakingHands,
          tugBoat,
          miningWork,
          solvingProblems
      ];

    return (
      <div className="App">
        <div className="Wrapper">

        
          <div className="separator">
                   <Slideshow
                     showArrows={false}
                     autoplay
                     defaultIndex={1}
                     effect={'fade'}
                     slideInterval={5000}
                     slides={slides}
                     height={'100%'}
                     width={'100%'} >
                   </Slideshow>
          </div>
        </div>

           <div className="landing">

           <h1 className="landingHdr">Welcome to AcquireCo!</h1>

            <p className="IntroPara">
        
                With AcquireCo you can check on your latest company targets for acquisition and check their status, review their
                financials and look up personnel contacts at their company.
        
            </p>
            <p className="IntroPara">
        
                The planet runs on the hard work of countless people.  AcquireCo's mission is to ensure its partners
                have strong financial performance so those workers can continue doing their invaluable work every day.
        
            </p>

            <button className="Button"  onClick={this.proceed}>Proceed</button>


        </div>
      </div>
    );
  }
}

export default Landing;

