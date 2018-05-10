import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from 'moment';
import * as actions from '../actions';
import BigCalendar from 'react-big-calendar'
// localizer for BigCalendar
BigCalendar.momentLocalizer(moment)
// specifying loaders
require('react-big-calendar/lib/css/react-big-calendar.css')
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
var events =[]
class Dashboard extends Component{
    componentDidMount() {
        this.props.fetchUserInfo();

    }
    constructor () {
        super()
    }

    renderContent(){
        if(this.props.userInfo)
        {
            let eventsArray = this.props.userInfo['eventIDs']
            let count = 0
            events = []
            eventsArray.forEach(eve => {
                let startTimeArray = eve['startTime'].split(' ')
                let endTimeArray = eve['endTime'].split(' ')

                var startDateString = eve['startTime'];
                var startDateObj = new Date(startDateString);
                var startMomentObj = moment(startDateObj);

                var endDateString = eve['endTime'];
                var endDateObj = new Date(endDateString);
                var endMomentObj = moment(endDateObj);

                events.push({
                    id: count,
                    title: eve['eventName'],
                    start: startDateObj,
                    end: endDateObj,
                })
                count = count + 1
            })

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
                                views={allViews}
                                step={60}
                                showMultiDayTimes
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

export default connect(mapStateToProps, actions)(Dashboard)
