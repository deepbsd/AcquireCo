import React from 'react';

export default function Smallcompany(props){

    return(
        <div>
            <h1>{props.name}</h1>
            <h3>contact: {props.contact}</h3>
            <p>financials: {props.financials}</p>
            <p>status: {props.status}</p>
        </div>
    );
}
