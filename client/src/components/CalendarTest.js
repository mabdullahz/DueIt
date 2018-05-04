import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SimpleReactCalendar from 'simple-react-calendar';

class CalendarTest extends Component{
    render(){
        return(
        	<div>
                <SimpleReactCalendar
                    activeMonth={new Date()}
                />
	        </div>
        );
    }
}

function mapStateToProps({ auth }){
    return {auth}
 }

export default connect(mapStateToProps)(CalendarTest);
