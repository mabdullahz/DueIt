import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Dashboard extends Component{
    render(){
        return(
            <h1 className="headingDashboard">
                Dashboard! 
            </h1>
        );
    }
}

function mapStateToProps({ auth }){
    return {auth}
 }


export default connect(mapStateToProps)(Dashboard);