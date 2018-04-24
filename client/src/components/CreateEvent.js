import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CreateEvent extends Component{
    render(){
    //        console.log(this.props)
        return(
            <div>
                <h1 style ={{color: 'purple'}}>
                Create  Event
                </h1>

                <select  style ={{display: 'inline', width:'30%',color: 'purple'}}>
                    <option value="private">Private Event</option>
                    <option value="public">Public Event</option>
                </select>

                <div class="row">
                    <form class="col s12">

                        <div class="row">
                            <div class="input-field col s6"  style ={{display: 'inline', width:'20%'}}>
                                <input placeholder="Event Name" id="event_name" type="text" class="validate"></input>
                            </div>

                            <div class="input-field col s6"  style ={{display: 'inline', width:'40%'}}>
                                <input placeholder="Event Description" id="event_description" type="text" class="validate"></input>
                            </div>

                        </div>


                        <div class="row">
                            <div class="input-field col s6"  style ={{display: 'inline', width:'20%'}}>
                                <input placeholder="Event time" id="event_time" type="text" class="validate"></input>
                            </div>

                            <div class="input-field col s6"  style ={{display: 'inline', width:'20%'}}>
                                <input placeholder="Event location" id="event_location" type="text" class="validate"></input>
                            </div>

                            <a className="waves-effect waves-light btn" style ={{backgroundColor: 'green'}}>Create Event</a>
                        </div>

                    </form>
                </div>

            </div>
        );
    }
}

export default CreateEvent;
