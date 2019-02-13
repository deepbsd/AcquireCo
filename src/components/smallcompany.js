import React from 'react';
import {Link} from 'react-router-dom';

export default function Smallcompany(props){
    return(
        <div>
            <h1><Link to="/Largecompany" info={props} >{props.name}</Link></h1>
            <h3>contact: {props.contact}</h3>
            <p>financials: {props.financials}</p>
            <p>status: {props.status}</p>
        </div>
    );
}
