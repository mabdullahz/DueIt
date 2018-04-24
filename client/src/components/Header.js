import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from './resources/logoHeader.png';


class Header extends Component{
    render(){
//        console.log(this.props)
        return(
            <nav>
                <div className = 'nav-wrapper'>
                    <Link to={this.props.auth ? '/dashboard' : '/'}  
                    className= "brand-logo left"
                    >
                    <img src={logo}  className="headerLogo"/>
                    </Link>
                    <a href = "/api/logout" className="button-logout ">
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