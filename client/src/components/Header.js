import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from './resources/logoHeader.png';
import settings from './resources/settings.png';
import userIco from './resources/user.png';
import clip from './resources/clip.png';
import { DropdownButton, MenuItem, ButtonToolbar, Glyphicon, Dropdown, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component{
    render(){
//        console.log(this.props)
        return(
            <nav>
                <div className = 'nav-wrapper'>
                    <Link to={this.props.auth ? '/dashboard' : '/'} className= "headerLogo">
                        <img src={logo} className="headerLogo" alt="logo"/>
                    </Link>

                    <Link to={this.props.auth ? '/EventsPage' : '/'} className= "clipButton">
                        <img src={clip} className="clipButton" alt="user"/>
                    </Link>
                    <div className="header-username">
                        {this.props.auth.username}
                    </div>
                    <Dropdown id="dropdown-header" className="dropdown-header">
                        <Dropdown.Toggle className="dropdown-header-toggle">
                            <Glyphicon glyph="user" className = ""/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <LinkContainer to={this.props.auth ? '/eventspage' : '/'}>
                                <MenuItem eventKey="1">
                                        <p> My Profle </p>
                                </MenuItem>
                            </LinkContainer>
                            <LinkContainer to={this.props.auth ? '/dashboard' : '/'}>
                                <MenuItem eventKey="1">
                                        <p> Followers </p>
                                </MenuItem>
                            </LinkContainer>
                            <MenuItem divider />
                            <MenuItem eventKey="3" href = "/api/logout">
                                Log out
                            </MenuItem>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link to={this.props.auth ? '/settings' : '/'} className= "settingsButton">
                        <img src={settings} className="settingsButton" alt="settings"/>
                    </Link>
                </div>
            </nav>
        );
    }
}

 // function mapStateToProps(state){
 //   return {auth: state.auth}
 //}
function mapStateToProps({ auth }){
    return {auth}
}


export default connect(mapStateToProps)(Header);
