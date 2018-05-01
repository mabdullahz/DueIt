import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Collapsible from './Collapsible';
import './style.css'
class LeftDiva extends Component{
	render(){
		return (
			<div className="mainDiv">
				<div className="leftDiv">
					<h4>Hosted Events</h4>
					<hr />
					<Collapsible trigger="Musical Contest" className="myCollapsible">
						<p>Here comes the event description</p>
					</Collapsible>
					<hr />
					<Collapsible trigger="Justice League with friends" className="myCollapsible">
						<p>Here comes the event description</p>
					</Collapsible>
					<hr />
					<Collapsible trigger="Friends hangout" className="myCollapsible">
						<p>Here comes the event description</p>
					</Collapsible>
				</div>
			</div>
		);	
	}
}
class LeftDivb extends Component{
	render(){
		return(
			<div className="mainDiv">
				<div className="leftDiv">
					<h4>Going To</h4>
					<hr />
					<Collapsible trigger="Musical Contest" className="myCollapsible">
						<p>Here comes the event description</p>
					</Collapsible>
					<hr />
					<Collapsible trigger="Justice League with friends" className="myCollapsible">
						<p>Here comes the event description</p>
					</Collapsible>
					<hr />
					<Collapsible trigger="Family time" className="myCollapsible">
						<p>Here comes the event description</p>
					</Collapsible>
				</div>
			</div>
		);	
	}
}
class EventsPage extends Component{
    render(){
        return(
			<div>	
				<LeftDiva />
				<LeftDivb />
			</div>
        );
    }
}

function mapStateToProps({ auth }){
    return {auth}
 }


export default connect(mapStateToProps)(EventsPage);