import React, { Component } from "react";
import { connect } from "react-redux";
import logo from './resources/logoHeader.png';

class SignUp extends Component{
    render(){
    return(
	        <div className="main-signup-wrap">
	       		<div className="right-div-signup">
			    </div>

			    <div className="left-div-signup">
			    	<img src={logo}  className="logo-signup-div"/>
					<div style ={{textAlign: 'center'}} >
	            		<a className="waves-effect waves-light btn dueit-login-button" href="/auth/google">Login with Google</a>
	        		</div>
			    </div>

			    <div className= "signUpPurpleFooter">
                </div>

			</div>
    )
}
}

function mapStateToProps({ auth }){
    return {auth}
 }


export default connect(mapStateToProps)(SignUp);
