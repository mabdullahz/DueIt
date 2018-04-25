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
					<h2>Hosted Events</h2>
					<hr />
					<Collapsible trigger="Event1" className="myCollapsible">
						<p>This is the collapsible content. It can be any element or React component you like.</p>
						<p>It can even be another Collapsible component. Check out the next section!</p>
					</Collapsible>
					<hr />
					<Collapsible trigger="Event2" className="myCollapsible">
						<p>This is the collapsible content. It can be any element or React component you like.</p>
						<p>It can even be another Collapsible component. Check out the next section!</p>
					</Collapsible>
					<hr />
					<Collapsible trigger="Event3" className="myCollapsible">
						<p>This is the collapsible content. It can be any element or React component you like.</p>
						<p>It can even be another Collapsible component. Check out the next section!</p>
					</Collapsible>
					<hr />
					<Collapsible trigger="Event4" className="myCollapsible">
						<p>This is the collapsible content. It can be any element or React component you like.</p>
						<p>It can even be another Collapsible component. Check out the next section!</p>
					</Collapsible>
					<hr />
					<Collapsible trigger="Event5" className="myCollapsible">
						<p>This is the collapsible content. It can be any element or React component you like.</p>
						<p>It can even be another Collapsible component. Check out the next section!</p>
					</Collapsible>
					<hr />
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
					<h2>Going To</h2>
					<hr />
					<Collapsible trigger="Event1" className="myCollapsible">
						<p>This is the collapsible content. It can be any element or React component you like.</p>
						<p>It can even be another Collapsible component. Check out the next section!</p>
					</Collapsible>
					<hr />
					<Collapsible trigger="Event2" className="myCollapsible">
						<p>This is the collapsible content. It can be any element or React component you like.</p>
						<p>It can even be another Collapsible component. Check out the next section!</p>
					</Collapsible>
					<hr />
					<Collapsible trigger="Event3" className="myCollapsible">
						<p>This is the collapsible content. It can be any element or React component you like.</p>
						<p>It can even be another Collapsible component. Check out the next section!</p>
					</Collapsible>
					<hr />
					<Collapsible trigger="Event4" className="myCollapsible">
						<p>This is the collapsible content. It can be any element or React component you like.</p>
						<p>It can even be another Collapsible component. Check out the next section!</p>
					</Collapsible>
					<hr />
					<Collapsible trigger="Event5" className="myCollapsible">
						<p>This is the collapsible content. It can be any element or React component you like.</p>
						<p>It can even be another Collapsible component. Check out the next section!</p>
					</Collapsible>
					<hr />
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