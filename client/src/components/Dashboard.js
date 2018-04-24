import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Dashboard extends Component{
    render(){
        return(
        	<div>
	            <h1 className="general-heading"style ={{textAlign: 'center'}}>
	                Dashboard! 
	            </h1>

	            <div style ={{textAlign: 'center'}} >
		        	<a className="waves-effect waves-light btn dueit-login-button-inverted" href="/createevent">Create New Event</a>
		        </div>
	        </div>
        );
    }
}

function mapStateToProps({ auth }){
    return {auth}
 }


export default connect(mapStateToProps)(Dashboard);