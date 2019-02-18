import React from 'react';

export default function Smallcompany(props){
    
    return(
        <div className="indivCompany">
            <h2>{props.name}</h2>
            <h4>contact:</h4>
            <table>
            <tbody>
              <tr><th>Name</th><th>Email</th><th>Phone</th></tr>

              <tr><td>{props.contact}</td>
              <td>{props.contactEmail}</td>
              <td>{props.contactPhone}</td>
              </tr>
             </tbody>
            </table>
            <h4>info:</h4>
            <table>
            <tbody>
            <tr><th>industry</th><th>position</th></tr>
            <tr><td>{props.industry}</td><td>{props.position}</td></tr>
            </tbody>
            </table>
            <h4>financials:</h4>
            <table>
             <tbody>
              <tr>
                <th title="Standard and Poors Quality Rating">S&P Quality</th>
                <th title="Total Debt/Current Assets Ratio">TD/CA</th>
                <th title="Current Ratio">CR</th>
                <th title="5 Yr Avg Earnings Per Share Growth Rate">5 YR EPS Gr</th>
              </tr> 
              <tr>
                <td>{props.SPValue}</td>
                <td>{props.DebtToCA}</td>
                <td>{props.CR}</td>
                <td>{props.fiveYrEPSGrowth}</td>
              </tr>
              <tr>
                <th title="Price/Earnings Ratio">P/E</th>
                <th title="Price/Book Value Ratio">P/BV</th>
                <th title="Dividend Paid per Share">DivPS</th>
                <th></th>
              </tr>
              <tr>
                <td>{props.PE}</td>
                <td>{props.PBV}</td>
                <td>{props.DivPS}</td>
                <td>{}</td>
              </tr>
             </tbody>
            </table>

            <h4>status:</h4>
            <p>{props.Status}</p>
            <h4>comment:</h4>
            <p><em>{props.comment}</em></p>
        </div>
    );
}
