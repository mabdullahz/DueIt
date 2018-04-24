import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Header extends Component{
    renderContent(){
        switch (this.props.auth) {
            case null:
                return;

            case false:
                return(
                    <div>
                    <li>
                        <a href="/auth/google">
                            Login With Google
                        </a>
                    </li>
                    <li>
                    <Link to={'/CreateEvent'}>
                        Create Event
                    </Link>
                    </li>
                    </div>
                )

            default:
                return (
                    <div>
                    <li>
                        <a href = "/api/logout">
                            Log Out
                        </a>
                    </li>
                    <li>
                    <Link to={'/CreateEvent'}>
                        Create Event
                    </Link>
                    </li>
                    </div>
                )
        }
    }

    render(){
//        console.log(this.props)
        return(
            <nav>
                <div className = 'nav-wrapper'>
                    <Link to={this.props.auth ? '/surveys' : '/'}
                    className= "brand-logo left"
                    >
                        Due It!
                    </Link>



                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

 //function mapStateToProps(state){
 //   return {auth: state.auth}
 //}
function mapStateToProps({ auth }){
    return {auth}
 }


export default connect(mapStateToProps)(Header);
