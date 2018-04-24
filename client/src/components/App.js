import React, { Component } from 'react';
import { BrowserRouter,Route , Link, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions';

import Header from './Header'
import SignUp from './SignUp';
import Footer from './Footer';
import Dashboard from './Dashboard';
import './style.css';


class App extends Component {


	componentDidMount(){
		this.props.fetchUser();
	}

	renderContent(){
	    if(this.props.auth){
	     	return(Dashboard)
	    }
	    else{
	    	return(SignUp)
	    }
	}

	renderHeader(){
		if(this.props.auth){
			return(Header)
		}
	}
	render(){
		return (
			<div>
				<BrowserRouter>
					<div>
						<Route component={this.renderHeader()} />
						<Route path='/' component={this.renderContent()} />

						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
};

function mapStateToProps({ auth }){
    return {auth}     
}

export default connect(mapStateToProps, actions)(App);