import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from './resources/logoHeader.png';
import settings from './resources/settings.png';
import userIco from './resources/user.png';
import clip from './resources/clip.png';
import { DropdownButton, MenuItem, ButtonToolbar, Glyphicon, Dropdown, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import Followers from './myFollowers'

class Header extends Component{
    render(){
//        console.log(this.props)
        return(
            <nav>
                <div className = 'nav-wrapper'>
                    <Link to={this.props.auth ? '/dashboard' : '/'} className= "headerLogo">
                        <img src={logo} className="headerLogo" alt="logo"/>
                    </Link>

                    <Link to={this.props.auth ? '/searchprofile' : '/'} className="waves-effect waves-light btn dueit-login-button">
                        Search
                    </Link>

                    <Dropdown id="dropdown-header" className="dropdown-header">
                        <Dropdown.Toggle className="dropdown-header-toggle">
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <LinkContainer to={this.props.auth ? '/profile' : '/'}>
                                <MenuItem eventKey="1">
                                        <p> My Profle </p>
                                </MenuItem>
                            </LinkContainer>
                            <LinkContainer to={this.props.auth ? '/myfollowers' : '/'}>
                                <MenuItem eventKey="2">
                                        <p> Followers </p>
                                </MenuItem>
                            </LinkContainer>
                            <LinkContainer to={this.props.auth ? '/mysentrequests' : '/'}>
                                <MenuItem eventKey="3">
                                        <p> Sent Requests </p>
                                </MenuItem>
                            </LinkContainer>
                            <LinkContainer to={this.props.auth ? '/myreceivedrequests' : '/'}>
                                <MenuItem eventKey="4">
                                        <p> Received Requests </p>
                                </MenuItem>
                            </LinkContainer>
                            <LinkContainer to={this.props.auth ? '/settings' : '/'}>
                                <MenuItem eventKey="5">
                                        <p> Settings </p>
                                </MenuItem>
                            </LinkContainer>
                            <MenuItem eventKey="6" href = "/api/logout">
                                Log out
                            </MenuItem>
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="header-username">
                        {this.props.auth.username}
                    </div>
                    

                    <Link to={this.props.auth ? '/EventsPage' : '/'} className= "events-button-header">
                        <img src={clip} className="header-events-button-image" alt="user"/>
                    </Link>

                </div>
            </nav>
        );
    }
}

 // function mapStateToProps(state){
 //   return {auth: state.auth}
 //}
function mapStateToProps({ auth, userInfo }){
    return {auth}
}


export default connect(mapStateToProps)(Header);
