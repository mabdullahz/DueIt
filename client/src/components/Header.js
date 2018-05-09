import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from './resources/logoHeader.png';
import settings from './resources/settings.png';
import userIco from './resources/user.png';
import clip from './resources/clip.png';
import dropdownIcon from './resources/dropdownIcon.png';
import { DropdownButton, MenuItem, ButtonToolbar, Glyphicon, Dropdown, Button, Popover, OverlayTrigger } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import Followers from './myFollowers'

class Header extends Component{
    popoverBottom(){
        return(
            <Popover id="popover-positioned-bottom" title="">
                <LinkContainer to={this.props.auth ? '/profile' : '/'}>
                        <p> My Profile </p>
                </LinkContainer>
                <LinkContainer to={this.props.auth ? '/myfollowers' : '/'}>
                        <p> Followers </p>
                </LinkContainer>
                <LinkContainer to={this.props.auth ? '/mysentrequests' : '/'}>
                        <p> Sent Requests </p>
                </LinkContainer>
                <LinkContainer to={this.props.auth ? '/myreceivedrequests' : '/'}>
                                        <p> Received Requests </p>
                </LinkContainer>
                <a href='/api/logout'>
                        <p> Log out </p>
                </a>
            </Popover>
        )
    }

    render(){
        return(
            <nav>
                <div className = 'nav-wrapper'>
                    <Link to={this.props.auth ? '/dashboard' : '/'} className= "headerLogo">
                        <img src={logo} className="headerLogo" alt="logo"/>
                    </Link>

                    <Link to={this.props.auth ? '/searchprofile' : '/'} className="waves-effect waves-light btn dueit-login-button">
                        Search
                    </Link>

                    <OverlayTrigger className="header-menu" trigger="click" rootClose placement="bottom" overlay={this.popoverBottom()}>
                        <img className="header-menu-image" src={dropdownIcon} alt="logo"/>
                    </OverlayTrigger>

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
