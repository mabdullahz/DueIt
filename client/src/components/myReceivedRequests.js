import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
// import axios from 'axios';
import { Link } from "react-router-dom";
import { FormGroup, FormControl, ControlLabel , Glyphicon, Dropdown, Button } from "react-bootstrap";
import './style.css';

class Received_Requests extends Component{
    componentDidMount() {
        this.props.fetchUserInfo();
    }
    makeFollowersDiv(followersArray){
        let followerDiv =[]
        followersArray.forEach(ele=>{
            followerDiv.push(<div className='profilecolumn columnleft'>
                    <img src={ele['picurl']} className="searchProfile" alt="" style={{textAlign:'center'}}/>
                    <div className="profileName">
                        <p className="profileusername"> {ele['firstName']}</p>
                        <div className="search-result-profile-button">
                            <Button className="waves-effect waves-light btn dueit-login-button-inverted" value={ele['googleId']} onClick={this.addFriend}> 
                                Approve
                            </Button>
                        </div>
                    </div>
                </div>)
            }
        )
        if (followerDiv.length == 0){
            return "Nothing to Display"
        }
        return followerDiv
    }
    renderContent(){
        if(this.props.userInfo){
            return(
                <div>
                    <h1 className="general-heading"style ={{textAlign: 'center'}}>
                        Received Requests
                    </h1>
                    <div className="searchprofileMain">
                        {this.makeFollowersDiv(this.props.userInfo.requests)}
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

export default connect(mapStateToProps, actions)(Received_Requests)