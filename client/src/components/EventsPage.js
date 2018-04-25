import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CollapsibleComponent, CollapsibleHead, CollapsibleContent } from 'react-collapsible-component'
import './style.css'
class EventsPage extends Component{
    render(){
        return(
            <div>
                <h2>Onging Events </h2>
                <CollapsibleComponent>
                    <CollapsibleHead>SE Exam</CollapsibleHead>
                    <CollapsibleContent >
                        Parh Lo
                    </CollapsibleContent>

                    <CollapsibleHead >SE Demo</CollapsibleHead>
                    <CollapsibleContent >
                        Kar lo
                    </CollapsibleContent>

                    <h2>Upcoming Events </h2>
                    <CollapsibleHead>CS300 Exam</CollapsibleHead>
                    <CollapsibleContent >
                        Code Kar Lo
                    </CollapsibleContent>

                    <CollapsibleHead >Data Mining Project</CollapsibleHead>
                    <CollapsibleContent >
                        Mining Kar Lo
                    </CollapsibleContent>
                </CollapsibleComponent>

                <div class="row">
                    <div class="col s12 m6">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">My Feed</span>
                                <p>You have no feed.</p>
                            </div>
                            <div class="card-action">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">Hangout</span>
                                <p>Abdullah is free after SE exam from 9:00pm to 11:00pm </p>
                            </div>
                            <div class="card-action">
                            </div>
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


export default connect(mapStateToProps)(EventsPage);