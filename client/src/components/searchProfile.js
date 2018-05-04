import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import axios from 'axios';
import { Link } from "react-router-dom";
import { FormGroup, FormControl, ControlLabel , Glyphicon, Dropdown, Button } from "react-bootstrap";
import './style.css';

class searchProfile extends Component{
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
                console.log(this.state.results)
                this.setState({value:''})
            }else{
                this.setState({results:[]})
                this.setState({value:''})
            }
        })
    }
    generateSearchResults(searchArray){
        if(searchArray.length==0){return ''}
        let searchResults=[]
        searchArray.forEach(element => {
            if(element.length>0){
                console.log(element)
                searchResults.push(<div className='profilecolumn columnleft'>
                    <img src={element[0]['picurl']} className="searchProfile" alt="" style={{textAlign:'center'}}/>
                    <div className="profileName">
                        <p className="profileusername"> {element[0]['firstName']}</p>
                        <div style ={{textAlign: 'center'}} >
                            <Link to={`/follow?id=${element[0]['googleId']}`} className="waves-effect waves-light btn dueit-login-button-inverted">
                                Follow
                            </Link>
                        </div>
                        </div>
                 </div>) 
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
                        <input type='text' placeholder='Enter Friend Name' className='myInput' onChange={this.handleChange}/>
                        <Button type='submit' onClick={this.handleSubmit}><Glyphicon glyph="search" /></Button>
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