import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import Collapsible from './Collapsible';
import { PanelGroup, Panel  } from "react-bootstrap";
import * as actions from '../actions';
import './style.css'

class EventsPage extends Component{
	componentDidMount() {
		this.props.fetchUserInfo();
	}
	createPanelArray(eventsArray){
        let panelArray=[]
        eventsArray.forEach(element => {
            panelArray.push(
                <Panel eventKey={element['_id'].toString()}>
                    <Panel.Heading>
                        <Panel.Title toggle>{element['eventName']}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        {element['description']}
                    </Panel.Body>
                </Panel>
            )
		});
		if (panelArray.length == 0){
            return (<Panel eventKey='1'>
                    <Panel.Heading>
                        <Panel.Title toggle>No Events to Display</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>

                    </Panel.Body>
            </Panel>);
        }else{
            return panelArray;
        }
	}
	renderContent(j,title){
		if(this.props.userInfo){
			return(<div className="mainDiv">
			<div className="leftDiv">
				<h4>{title}</h4>
				<hr />
				<PanelGroup accordion id="accordion-example">
					{this.createPanelArray(this.props.userInfo['eventIDs'])}
				</PanelGroup>
			</div>
			</div>)
		}
	}
	render(){
		return(
        	<div>
                <h3 className="general-heading" style ={{textAlign: 'center'}}>
                    Your Events
                </h3>
				{this.renderContent(0,"Going to")}

				{this.renderContent(1,"Hosted Events")}
			</div>
        );
    }
}

function mapStateToProps({ auth , userInfo }) {
    return { auth : auth,userInfo: userInfo }
}


export default connect(mapStateToProps,actions)(EventsPage);
