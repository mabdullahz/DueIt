import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import Collapsible from './Collapsible';
import { PanelGroup, Panel  } from "react-bootstrap";
import './style.css'

class EventsPage extends Component{
    render(){
        return(
        	<div>
				<div className="mainDiv">
					<div className="leftDiv">
						<h4>Hosted Events</h4>
						<hr />
						<PanelGroup accordion id="accordion-example">
							<Panel eventKey="1">
								<Panel.Heading>
									<Panel.Title toggle>Musical Contest</Panel.Title>
								</Panel.Heading>
								<Panel.Body collapsible>
									Event description
								</Panel.Body>
							</Panel>
							<Panel eventKey="2">
								<Panel.Heading>
									<Panel.Title toggle>Justice League with friends</Panel.Title>
								</Panel.Heading>
								<Panel.Body collapsible>
									Event description
								</Panel.Body>
							</Panel>
							<Panel eventKey="3">
								<Panel.Heading>
									<Panel.Title toggle>Friends hangout</Panel.Title>
								</Panel.Heading>
								<Panel.Body collapsible>
									Event description
								</Panel.Body>
							</Panel>
						</PanelGroup>
					</div>
				</div>

				<div className="mainDiv">
					<div className="leftDiv">
						<h4>Going To</h4>
						<hr />
						<PanelGroup accordion id="accordion-example">
							<Panel eventKey="1">
								<Panel.Heading>
									<Panel.Title toggle>Musical Contest</Panel.Title>
								</Panel.Heading>
								<Panel.Body collapsible>
									Event description
								</Panel.Body>
							</Panel>
							<Panel eventKey="2">
								<Panel.Heading>
									<Panel.Title toggle>Justice League with friends</Panel.Title>
								</Panel.Heading>
								<Panel.Body collapsible>
									Event description
								</Panel.Body>
							</Panel>
							<Panel eventKey="3">
								<Panel.Heading>
									<Panel.Title toggle>Friends hangout</Panel.Title>
								</Panel.Heading>
								<Panel.Body collapsible>
									Event description
								</Panel.Body>
							</Panel>
						</PanelGroup>
					</div>
				</div>
			</div>
        );
    }
}

function mapStateToProps({ auth }){
    return {auth}
 }


export default connect(mapStateToProps)(EventsPage);