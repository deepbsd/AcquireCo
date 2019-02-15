import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class NavItem extends Component {

    //constructor(props){
    //    super(props);
    //}

    //handleClick(ev){
    //    console.log("debug: route target --> ",ev.target)
    //}

    render(){
        return (
              <Link to={{pathname: this.props.href}} >{this.props.link}</Link>
        );
    }

}
