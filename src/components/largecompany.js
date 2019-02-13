import React from 'react';

export default function Largecompany(props){
    return(
        <div>
            <h1>{props.info.name}</h1>
            <h3>contact: {props.info.contact}</h3>
            <p>financials: {props.info.financials}</p>
            <p>status: {props.info.status}</p>
        </div>
    );
}
