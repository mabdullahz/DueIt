import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from './resources/logoHeader.png';
import settings from './resources/settings.png';
import userIco from './resources/user.png';
import clip from './resources/clip.png';

class Header extends Component{
    render(){
//        console.log(this.props)
        return(
            <nav>
                <div className = 'nav-wrapper'>
                    <Link to={this.props.auth ? '/dashboard' : '/'} className= "headerLogo">
                        <img src={logo} className="headerLogo"/>
                    </Link>

                    <Link to={this.props.auth ? '/EventsPage' : '/'} className= "clipButton">
                        <img src={clip} className="clipButton"/>
                    </Link>
                    
                    <a href = "/api/logout" className="button-logout">
                            Log Out
                    </a>

                    <Link to={this.props.auth ? '/settings' : '/'} className= "settingsButton">
                        <img src={settings} className="settingsButton"/>
                    </Link>

                    <Link to={this.props.auth ? '/dashboard' : '/'} className= "userIco">
                        <img src={userIco} className="userIco"/>
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
