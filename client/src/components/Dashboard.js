import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from 'moment'
import BigCalendar from 'react-big-calendar'
// localizer for BigCalendar
BigCalendar.momentLocalizer(moment)
// specifying loaders
require('react-big-calendar/lib/css/react-big-calendar.css')

class Dashboard extends Component{
    constructor () {
        super()
    }
    render(){
        return(
        	<div>
	            <h1 className="general-heading"style ={{textAlign: 'center'}}>
	                Dashboard!
	            </h1>

                <div style={{ maxWidth:'600px', maxHeight:'300px', color:'white'}}>
                <BigCalendar
                    style={{textAlign:'center', height: '300px'}}
                    events={[]}
                />
                </div>

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
