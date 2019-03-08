import React, { Component } from 'react';
import Axios from 'axios';
import AccountSettings from './AccountSettings';

class DisplayUser extends Component{
    constructor(props){
        super(props)
        this.state={displaySettings:false}
    }
    handleDisplaySettings =()=>{
        if(this.state.displaySettings===false){
        this.setState({displaySettings:true});
        }else{
            this.setState({displaySettings:false});
        }
    }
    deleteAccount =()=>{
        var url = `http://localhost:8080/IndividualProject/api/user/deleteUser/${this.props.username}`;
        Axios.delete(url).then(function(response){
            alert(response.data.message);
        }).catch(function(error){
            alert("Account deletion failed");
        });
        this.props.handleLogout();
    }
    handleLogout = ()=>{
        this.props.handleLogout();
    }
    render(){
        if(this.state.displaySettings===false){
            return(
                <div>
                    <p className="DisplayUser">USER: {this.props.username}</p>
                    <button className="LogoutButton" type="button" onClick={this.props.handleLogout}>Logout</button>
                    <button className="SettingsButton" type="button" onClick={this.handleDisplaySettings}>Settings</button>
                </div>
            );
        }else{
            return(
                <div>
                    <p className="DisplayUser">user: {this.props.username}</p>
                    <button className="LogoutButton" type="button" onClick={this.props.handleLogout}>Logout</button>
                    <AccountSettings handleLogout={this.handleLogout} handleDisplaySettings={this.handleDisplaySettings} user={this.props.username}/>
                </div>
            )
        }
    }
}
export default DisplayUser;