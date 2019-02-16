import React from 'react';

export default function Smallcompany(props){
    
    return(
        <div className="indivCompany">
            <h2>{props.name}</h2>
            <h4>contact:</h4>
            <table>
              <tr><th>Name</th><th>Email</th><th>Phone</th></tr>

              <tr><td>{props.contact}</td>
              <td>{props.contactEmail}</td>
              <td>{props.contactPhone}</td>
              </tr>
            </table>
            <h4>financials:</h4>
            <table>
              <tr>
                <th>S&P Quality</th>
                <th>TD/CA</th>
                <th>CR</th>
                <th>5YR EPS Gr</th>
              </tr> 
              <tr>
                <td>{props.SPValue}</td>
                <td>{props.DebtToCA}</td>
                <td>{props.CR}</td>
                <td>{props.fiveYrEPSGrowth}</td>
              </tr>
              <tr>
                <th>P/E</th>
                <th>P/BV</th>
                <th>DivPS</th>
                <th></th>
              </tr>
              <tr>
                <td>{props.PE}</td>
                <td>{props.PBV}</td>
                <td>{props.DivPS}</td>
                <td>{}</td>
              </tr>
            </table>

            <p>old: {props.financials}</p>
            <h4>status:</h4>
            <p>{props.status}</p>
            <h4>comment:</h4>
            <p><emph>{props.comment}</emph></p>
        </div>
    );
}
