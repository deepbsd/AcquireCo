import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class NavItem extends Component {


    render(){
        return (
              <Link to={{pathname: this.props.href}} >{this.props.link}</Link>
        );
    }

}
