import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CreateEvent extends Component{
    render(){
    //        console.log(this.props)
        return(
            <div style ={{textAlign: 'center'}}>
                <h1>
                CreateEvent
                </h1>
            </div>
        );
    }
}

export default CreateEvent;
