import React from 'react';
import { Link } from 'react-router-dom';


export default function Page404(props) {
  

  return (

        <div >
            <h1>404</h1>
            <br /><br />
            <h3>These are not the droids you are looking for...</h3>
            <br /> <br /> <br />
            <h3><center><Link to="/Listpage">Return to Company Listings</Link></center></h3>
        </div>

    );
}

