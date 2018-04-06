import React from 'react';
import logo from './logo.svg';

class Title extends React.Component {
    render() {
        return(
       <div className="navbar" >
                <div className="right">
                <img src={logo} className="App-logo" alt="logo" />         
                <h1>Movie<span className="text-danger">.</span>NErd</h1>
                </div>
                <h6>A VPN proxy to stream Netflix on any corner of the net.</h6>
            </div>
        )
    }
}

export default Title;