import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Input } from 'react-materialize';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateTimePicker from 'material-ui-pickers/DateTimePicker';


class CreateEvent extends Component{
    state = {
        selectedDate: new Date(),
      }

      handleDateChange = (date) => {
        this.setState({ selectedDate: date });
      }
    render(){
            const { selectedDate } = this.state;
        return(

            <div className="div-center-aligned">

                <h2 className="general-heading div-center-aligned">
                    Create Event
                </h2>

                <div className="div-center-aligned">
                    <h5 style={{display: 'inline-block', color:"rgb(235,235,235)", padding: "0px 20px"}}>
                        Event type:
                    </h5>

                    <select  style ={{display: 'inline-block', width:'30%',color: "rgb(82,45,109)"}}>
                        <option value="private">Private Event</option>
                        <option value="public">Public Event</option>
                    </select>
                </div>

                <div className="div-center-aligned">
                    <form className="col s12">

                        <div className="row div-center-aligned" style={{width: "50%"}}>
                            <div className="input-field col s6"  style ={{display: 'inline', color:'rgb(235,235,235)'}}>
                                <input placeholder="Event Name" id="event_name" type="text" className="validate"></input>
                            </div>

                            <div className="input-field col s6"  style ={{display: 'inline', color:'rgb(235,235,235)'}}>
                                <input placeholder="Event Description" id="event_description" type="text" className="validate"></input>
                            </div>

                        </div>

                        <div className="row div-center-aligned" style={{width: "50%"}}>
                            <div className="input-field col s6"  style ={{display: 'inline', color:'rgb(235,235,235)'}}>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DateTimePicker
                                        value={selectedDate}
                                        onChange={this.handleDateChange}
                                    />
                                </MuiPickersUtilsProvider>
                            </div>

                            <div className="input-field col s6"  style ={{display: 'inline', color:'rgb(235,235,235)'}}>
                                <input placeholder="Event location" id="event_location" type="text" className="validate"></input>
                            </div>
                        </div>

                        <div className="row div-center-aligned" style={{width: "50%"}}>

                        </div>
                        <Row>
                        </Row>;
                        <div style ={{textAlign: 'center'}} >
                            <a className="waves-effect waves-light btn dueit-login-button-inverted" href="/dashboard">Create Event</a>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}
//<input placeholder="Event time" id="event_time" type="text" className="validate"></input>
export default CreateEvent;
