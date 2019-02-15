import React from 'react';

export default function Smallcompany(props){
    
    return(
        <div className="indivCompany">
            <h2>{props.name}</h2>
            <h4>contact: {props.contact}</h4>
            <p>financials: {props.financials}</p>
            <p>status: {props.status}</p>
        </div>
    );
}
