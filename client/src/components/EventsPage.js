import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './style.css'
class EventsPage extends Component{
    render(){
        return(
			<h1 className="general-heading"style ={{textAlign: 'center'}}>
				myEventPage 
			</h1>	
        );
    }
}

function mapStateToProps({ auth }){
    return {auth}
 }


export default connect(mapStateToProps)(EventsPage);