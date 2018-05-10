import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import { Link } from "react-router-dom";
import { PanelGroup, Panel  } from "react-bootstrap";
import './style.css';
import moment from 'moment'
import BigCalendar from 'react-big-calendar'
// localizer for BigCalendar
BigCalendar.momentLocalizer(moment)
// specifying loaders
require('react-big-calendar/lib/css/react-big-calendar.css')
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
var events =[
            {
            id: 0,
            title: 'Computer Vision',
            start: new Date(2018, 4, 8),
            end: new Date(2018, 4, 10),
            }
        ]

class Profile extends Component{
    componentDidMount() {
        this.props.fetchUserInfo();
    }
    createPanelArray(eventsArray){
        let panelArray=[]
        eventsArray.forEach(element => {
            panelArray.push(
                <Panel eventKey={element['eventKey'].toString()}>
                    <Panel.Heading>
                        <Panel.Title toggle>{element['Title']}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        {element['Description']}
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
    renderContent(){
        if(this.props.userInfo)
        {

            return(
            <div className="profileMain">
                <div className="profilerow">
                    <div className="profilecolumn profileleft">
                        <img src={this.props.auth.pictureURL} className="profileImage" alt="" />
                        <div className="profileName">
                            <p className="profileusername"> {this.props.userInfo['firstName']}</p>
                            <div style ={{textAlign: 'center'}} >
            		        	<Link to={"/createevent"} className="waves-effect waves-light btn dueit-login-button-inverted">
            		        		Follow
            		        	</Link>
            		        </div>
                        </div>
                    </div>
                    <div className="profilecolumn profileright">

                        <div style={{ maxWidth:'600px', maxHeight:'300px', color:'rgb(82,45,109)'}}>
                        <BigCalendar
                            selectable
                            views={allViews}
                            step={60}
                            showMultiDayTimes
                            onSelectEvent={event => alert(event.title)}
                            style={{align:'center', height: '300px'}}
                            events={events}
                        />
                        </div>

                        <div className="profileName">
                            <p className="profileusername" style={{ color:'rgb(82,45,109)'}}>Schedule Details</p>
                        </div>
                    </div>
                </div>

                <div className='profilerow'>
                    <div className="profilecolumn profileright">
                            <h4>Hosted Events</h4>
                            <hr />
                            <PanelGroup accordion id="accordion-example">
                                {this.createPanelArray(this.props.userInfo['eventIDs'][0])}
                            </PanelGroup>
                        </div>
                        <div className="profilecolumn profileright">
                            <h4>Going To</h4>
                            <hr />
                            <PanelGroup accordion id="accordion-example">
                                {this.createPanelArray(this.props.userInfo['eventIDs'][1])}
                            </PanelGroup>
                        </div>
                    </div>
            </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

function mapStateToProps({ auth , userInfo }) {
    return { auth : auth,userInfo: userInfo }
}

export default connect(mapStateToProps, actions)(Profile)
