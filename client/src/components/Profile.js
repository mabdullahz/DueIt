import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import { Link } from "react-router-dom";
import { PanelGroup, Panel  } from "react-bootstrap";
import './style.css';


class Profile extends Component{
    componentDidMount() {
        this.props.fetchUserInfo();
    }
    renderContent(){
        if(this.props.userInfo)
        {

            return(
            <div className="profileMain">
                <div className="profilerow">
                    <div className="profilecolumn profileleft">
                        <img src={this.props.auth.pictureURL} className="profileImage" alt="" />
                        <div className="profileName">
                            <p className="profileusername"> {this.props.userInfo['firstName']}</p>
                            <div style ={{textAlign: 'center'}} >
            		        	<Link to={"/createevent"} className="waves-effect waves-light btn dueit-login-button-inverted">
            		        		Follow
            		        	</Link>
            		        </div>
                        </div>
                    </div>
                    <div className="profilecolumn profileright">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVu9QRe5_N0UmDFYdaOz1DCHeHpIFaDDGPTUN9SSKsXvYj9bgH" alt="" />
                        <div className="profileName">
                            <p className="profileusername">Schedule Details</p>
                        </div>
                    </div>
                </div>

                <div className='profilerow'>
                    <div className="profilecolumn profileleft">
                            <h4>Hosted Events</h4>
                            <hr />
                            <PanelGroup accordion id="accordion-example">
                                <Panel eventKey="1">
                                    <Panel.Heading>
                                        <Panel.Title toggle>Musical Contest</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        Event description
                                    </Panel.Body>
                                </Panel>
                                <Panel eventKey="2">
                                    <Panel.Heading>
                                        <Panel.Title toggle>Justice League with friends</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        Event description
                                    </Panel.Body>
                                </Panel>
                                <Panel eventKey="3">
                                    <Panel.Heading>
                                        <Panel.Title toggle>Friends hangout</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        Event description
                                    </Panel.Body>
                                </Panel>
                            </PanelGroup>
                        </div>
                        <div className="profilecolumn profileright">
                            <h4>Going To</h4>
                            <hr />
                            <PanelGroup accordion id="accordion-example">
                                <Panel eventKey="1">
                                    <Panel.Heading>
                                        <Panel.Title toggle>Musical Contest</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        Event description
                                    </Panel.Body>
                                </Panel>
                                <Panel eventKey="2">
                                    <Panel.Heading>
                                        <Panel.Title toggle>Justice League with friends</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        Event description
                                    </Panel.Body>
                                </Panel>
                                <Panel eventKey="3">
                                    <Panel.Heading>
                                        <Panel.Title toggle>Friends hangout</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        Event description
                                    </Panel.Body>
                                </Panel>
                            </PanelGroup>
                        </div>
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

export default connect(mapStateToProps, actions)(Profile)
