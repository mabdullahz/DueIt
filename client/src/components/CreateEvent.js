import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Row, Input } from 'react-materialize';
import axios from 'axios';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import TimePicker from 'material-ui-pickers/TimePicker';
import DatePicker from 'material-ui-pickers/DatePicker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';
import purple from 'material-ui/colors/purple';


const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: purple['900'],
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
         backgroundColor: purple['900'],
         color: 'white',
      },
    },
    MuiPickersDay: {
      day: {
        color: purple['900'],
      },
      selected: {
        backgroundColor: purple['400'],
      },
      current: {
        color: purple['900'],
      },
    },
    MuiPickersModal: {
      dialogAction: {
        '& > button': {
          color: purple['400'],
        },
      },
    },
  },
})



class CreateEvent extends Component{

state = {
        eventName: "",
        startDate: new Date(),
        endDate: new Date(),
        eventLocation: "",
        eventDescription: "",
        accessKind: "private"
    }

      handleStartDateChange = (date) => {
        this.setState({ startDate: date });
      }

      handleEndDateChange = (date) => {
        this.setState({ endDate: date });
      }

      handleEventNameChange = (name) => {
        this.setState({ eventName: name.target.value });
      }

      handleEventLocationChange = (location) => {
        this.setState({ eventLocation: location.target.value });
      }

      handleEventDescriptionChange = (location) => {
        this.setState({ eventDescription: location.target.value });
      }

      handleAccessChange = (acc) => {
        this.setState({ accessKind: acc.target.value });
      }

      createEventClick = (event) => {
          if(!this.state.eventName)
          {
              alert("Please Give Event Name")
          }
          else if(!this.state.eventDescription)
          {
              alert("Please Give Event Description")
          }
          else if(!this.state.eventLocation)
          {
              alert("Please Give Event Location")
          }
          else
          {
              axios.get(`/api/newEventCreated/${this.state.eventName}/${this.state.startDate}/${this.state.endDate}/${this.state.eventLocation}/${this.state.eventDescription}/${this.state.accessKind}`).then(res => {
              alert("Event Created Successfully");
              this.props.history.push('/dashboard');
              })
          }
      }

    render(){

        return(

            <div className="div-center-aligned">

                <h2 className="general-heading div-center-aligned">
                    Create Event
                </h2>

                <div className="div-center-aligned">
                    <h5 style={{display: 'inline-block', color:"rgb(235,235,235)", padding: "0px 20px"}}>
                        Event type:
                    </h5>

                    <select onChange={this.handleAccessChange} style ={{display: 'inline-block', width:'30%',color: "rgb(82,45,109)"}}>
                        <option value="private">Private Event</option>
                        <option value="public">Public Event</option>
                    </select>
                </div>

                <div className="div-center-aligned">
                    <form className="col s12">
                        <div className="row div-center-aligned" style={{width: "50%"}}>
                            <div className="input-field col s6"  style ={{display: 'inline', color:'rgb(235,235,235)'}}>
                                <input onChange={this.handleEventNameChange} placeholder="Event Name" id="event_name" type="text" className="validate"></input>
                            </div>

                            <div className="picker"  style ={{}}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <div style ={{}}>
                                      Start Time
                                    </div>
                                    <MuiThemeProvider theme={materialTheme}>
                                      <DatePicker maxDate={this.state.endDate} value={this.state.startDate} onChange={this.handleStartDateChange} />
                                      <TimePicker maxDate={this.state.endDate} value={this.state.startDate} onChange={this.handleStartDateChange} />
                                      <div style ={{marginTop: '20px'}}>
                                          End Time
                                      </div>
                                      <DatePicker minDate={this.state.startDate} value={this.state.endDate} onChange={this.handleEndDateChange} />
                                      <TimePicker minDate={this.state.startDate} value={this.state.endDate} onChange={this.handleEndDateChange} />
                                    </MuiThemeProvider>
                                </MuiPickersUtilsProvider>
                            </div>
                        </div>
                        <div className="row div-center-aligned" style={{width: "50%"}}>
                            <div className="input-field col s6"  style ={{display: 'inline', color:'rgb(235,235,235)'}}>
                                <input onChange={this.handleEventDescriptionChange} placeholder="Event Description" id="event_description" type="text" className="validate"></input>
                            </div>
                        </div>
                        <div className="row div-center-aligned" style={{width: "50%"}}>
                            <div className="input-field col s6"  style ={{display: 'inline', color:'rgb(235,235,235)'}}>
                                <input onChange={this.handleEventLocationChange} placeholder="Event location" id="event_location" type="text" className="validate"></input>
                            </div>
                        </div>

                        <div className="row div-center-aligned" style={{width: "50%"}}>
                        </div>

                        <div style ={{textAlign: 'center'}} >
                            <a onClick={this.createEventClick} className="waves-effect waves-light btn dueit-login-button-inverted">Create Event</a>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}
//<input placeholder="Event time" id="event_time" type="text" className="validate"></input>
export default withRouter(CreateEvent);
