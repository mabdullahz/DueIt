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
					<a href="/EventsPage"><img src={clip} className="clipButton" /></a>
					<a href="/settings"><img src={settings} className="settingsButton" /></a>
					<a href="/dashboard"><img src={userIco} className="userIco" /></a>
                    <a href = "/api/logout" className="button-logout">
                            Log Out
                    </a>
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
