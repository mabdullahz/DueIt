import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import './style.css';


class Profile extends Component{
    componentDidMount() {
        this.props.fetchUserInfo();
    }
    renderContent(){
        if(this.props.userInfo)
        {
            
            return(<div>
                <p>{this.props.userInfo['googleId']}</p>
            </div>)
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