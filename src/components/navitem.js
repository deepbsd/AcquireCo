import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class NavItem extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev){
        console.log("target: ",ev.target)
    }

    render(){
        return (
              <Link to={{pathname: this.props.href}} onClick={this.handleClick}>{this.props.link}</Link>
        );
    }

}
