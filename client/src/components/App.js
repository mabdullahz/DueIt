import React, { Component } from 'react';
import { BrowserRouter,Route, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions';
import EventsPage from "./EventsPage"
import Header from './Header'
import SignUp from './SignUp';
import Settings from './Settings';
import Footer from './Footer';
import CreateEvent from './CreateEvent';
import Dashboard from './Dashboard';
import Profile from './Profile';
import searchProfile from './searchProfile';
import Followers from './myFollowers'
import Sent_Requests from './mySentRequests'
import Received_Requests from './myReceivedRequests'
import viewSearchProfile from './viewSearchProfile'
import './style.css';



class App extends Component {


	componentDidMount(){
		this.props.fetchUser();
		this.props.fetchUserInfo();

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
						<Route exact path='/Dashboard' render={() =>(this.props.auth ? (<Dashboard />) : (<Redirect to = '/'/>) )}/>
						<Route exact path='/' render={() =>(this.props.auth ? (<Dashboard />) : (<SignUp />) )}/>
						<Route exact path='/CreateEvent' render={() =>(this.props.auth ? (<CreateEvent />) : (<Redirect to = '/'/>) )}/>
						<Route exact path='/EventsPage' render={() =>(this.props.auth ? (<EventsPage />) : (<Redirect to = '/'/>) )}/>
						<Route exact path='/settings' render={() => (this.props.auth ? (<Settings />) : (<Redirect to='/' />))} />
						<Route exact path='/profile' component={Profile} />
						<Route exact path='/searchProfile' component={searchProfile} />
						<Route exact path='/myfollowers' component={Followers} />
						<Route exact path='/mysentrequests' component={Sent_Requests} />
						<Route exact path='/myreceivedrequests' component={Received_Requests} />
						<Route exact path='/viewsearchprofile' component={viewSearchProfile} />
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
};

function mapStateToProps({ auth, userInfo }){
    return {auth}
}

export default connect(mapStateToProps, actions)(App)
