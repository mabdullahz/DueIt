import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Settings extends Component {
    render(){
        return(
            <div className="settingsDiv">
                <h2>Settings</h2>
                <div>
                    <input placeholder="First Name" type="text" className="settingsInput"></input>
                    <input placeholder="Last Name" type="text" className="settingsInput"></input>
                    <input placeholder="E-mail"  type="text" className="settingsInput"></input>
                    <input placeholder="Password"  type="text" className="settingsInput"></input>
                    <button className="purpleButton"> Change </button>
                </div>
            </div>
        )
    }
}


function mapStateToProps({ auth }) {
    return { auth }
}


export default connect(mapStateToProps)(Settings);