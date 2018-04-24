import React, { Component } from 'react';
import { BrowserRouter,Route , Link, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions';
import EventsPage from "./EventsPage"
import Header from './Header'
import SignUp from './SignUp';
import Footer from './Footer';
import CreateEvent from './CreateEvent';
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
						<Route exact path='/dashboard' component={this.renderContent()} />
						<Route exact path='/' component={this.renderContent()} />
						<Route exact path='/CreateEvent' component={CreateEvent} />
						<Route exact path='/EventsPage' component={EventsPage} />
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

export default connect(mapStateToProps, actions)(App)
