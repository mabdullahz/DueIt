import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
            start: new Date(2018, 4, 8, 9, 30 , 0),
            end: new Date(2018, 4, 10, 12, 45 , 0),
            }
        ]
class Dashboard extends Component{
    constructor () {
        super()
    }
    render(){
        return(
        	<div style={{padding:'1% 3%'}}>
                <div style={{width:'70%', float: 'left'}}>
                    <div className='dashboardUpperDiv'>
        	            <h3 className="general-heading" style ={{textAlign: 'center', float: 'left'}}>
        	               Current Schedule
        	            </h3>
                        <div>
                            <Link to={"/createevent"} className="waves-effect waves-light btn dueit-login-button-inverted" style={{margin: '2.1% 0% 1% 0%', float: 'right'}}>
                                Create New Event
                            </Link>
                        </div>
                    </div>
                    <div className="calendarDashboard">
                        <div>
                            <BigCalendar
                                selectable
                                views={allViews}
                                step={60}
                                showMultiDayTimes
                                onSelectEvent={event => alert(event.title)}
                                style={{align:'center', height: '420px'}}
                                events={events}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }){
    return {auth}
 }


export default connect(mapStateToProps)(Dashboard);
