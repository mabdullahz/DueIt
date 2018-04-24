import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Dashboard extends Component{
    render(){
        return(
        	<div>
	            <h1 className="general-heading">
	                Dashboard! 
	            </h1>

	            <div style ={{textAlign: 'center'}} >
		        	<Link to={"/createevent"} className="waves-effect waves-light btn dueit-login-button-inverted">
		        		Create New Event
		        	</Link>
		        </div>
	        </div>
        );
    }
}

function mapStateToProps({ auth }){
    return {auth}
 }


export default connect(mapStateToProps)(Dashboard);