import React from 'react';

export default function Smallcompany(props){
    
    return(
        <div className="indivCompany">
            <h2>{props.name}</h2>
            <h4>contact: {props.contact}</h4>
            <p>email: {props.contactEmail} phone: {props.contactPhone}</p>
            <h4>financials:</h4>
            <p>
              S&P Quality: {props.SPValue} TD/CA: {props.DebtToCA} 
              CR: {props.CR} 5YR EPS Growth: {props.fiveYrEPSGrowth} 
            </p>
            <p>
              P/E: {props.PE}  P/BV: {props.PBV} DivPS: {props.DivPS}
            </p>
            <p>old: {props.financials}</p>
            <p>status: {props.status}</p>
        </div>
    );
}
