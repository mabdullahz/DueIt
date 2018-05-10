import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import axios from 'axios';
import { Link } from "react-router-dom";
import { FormGroup, FormControl, ControlLabel , Glyphicon, Dropdown, Button } from "react-bootstrap";
import './style.css';

class searchProfile extends Component{
    componentDidMount(){
        this.props.fetchUser()
    }
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          results:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        this.state.results =[]
        console.log(this.state.value)
        axios.get(`/api/searchuser?${this.state.value}`).then(data=>{
            if(data.data){
                this.setState({results:data.data})
                // console.log(this.state.results)
                this.setState({value:''})
            }else{
                this.setState({results:[]})
                this.setState({value:''})
            }
        })
    }
    addFriend(event){
        event.preventDefault()
        console.log(event.target.value)
        axios.get(`/api/addfriend?${event.target.value}`).then(data=>{
            console.log(data.data)
            if(data.data==1){
                
            }
        })
    }

    approveFriend(event){
        event.preventDefault()
        console.log(event.target.value)
        axios.get(`/api/approvefriend?${event.target.value}`).then(data=>{
            if(data.data){
                // this.render()
            }
        })
    }
    removeRequest(event){
        event.preventDefault()
        axios.get(`/api/removerequest?${event.target.value}`).then(data=>{
            if(data.data){
                // hashHistory.push(`/searchprofile`)
            }
        })
    }
    viewUser(event){
        event.preventDefault()
        // hashHistory.push("/searchprofile")
    }
    // (this.props.auth.googleId === ele['googleId'])
    generateSearchResults(searchArray){
        if(searchArray.length==0){return ''}
        let searchResults=[]
        searchArray.forEach(element => {
            if(element.length>0){
                console.log(element)
                element.forEach(ele =>{
                    let userid = this.props.userInfo['googleId']
                    let buttonToPlace = <Button className="waves-effect waves-light btn dueit-login-button-inverted" value={ele['googleId']} onClick={this.addFriend}> Follow </Button>
                    if(ele['followTable'].includes(userid)){
                        buttonToPlace =  <Button className="waves-effect waves-light btn dueit-login-button-inverted" value={ele['googleId']} href={`/api/showprofile?${ele['googleId']}`}> View Profile </Button> 
                    }else if(ele['requestSent'].includes(userid)){
                        buttonToPlace = <Button className="waves-effect waves-light btn dueit-login-button-inverted" value={ele['googleId']} onClick={this.approveFriend}> Approve </Button>
                    }else if(ele['requests'].includes(userid)){
                        buttonToPlace = <Button className="waves-effect waves-light btn dueit-login-button-inverted" value={ele['googleId']} onClick={this.removeRequest}> Pending </Button>
                    }
                    searchResults.push(
                        <div className='profilecolumn columnleft'>
                            <img src={ele['picurl']} className="searchProfile" alt="" style={{textAlign:'center'}}/>
                            <div className="profileName">
                                <p className="profileusername"> {ele['firstName']}</p>
                                <div className="search-result-profile-button">
                                    {buttonToPlace}
                                </div>
                            </div>
                        </div>
                 )
                }) 
            }
        });
        if(searchResults.length==0){
            return(<div className="searchprofileMain">
                    No Results Found
            </div>);
        }else{
            return(<div className="searchprofileMain">
                    {searchResults}
            </div>)
        }
    }
    render(){
        return(
            <div className='searchPage'>
                <div className='searchBox'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' placeholder='Search Events and People' className='myInput' onChange={this.handleChange}/>
                        <Button type='submit' className = "waves-effect waves-light btn dueit-login-button-inverted" onClick={this.handleSubmit}><Glyphicon glyph="search" /> Search </Button>
                    </form>
                </div>
                <div >
                    {this.generateSearchResults(this.state.results)}
                </div>
          </div>
      )
    }
}
function mapStateToProps({ auth , userInfo }) {
    return { auth : auth,userInfo: userInfo }
}

export default connect(mapStateToProps, actions)(searchProfile)
