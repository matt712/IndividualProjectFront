import React, { Component } from 'react';
import Axios from 'axios';

class DisplayUser extends Component{
    constructor(props){
        super(props)
        this.state={displaySettings:false}
    }
    handleDisplaySettings =()=>{
        this.setState({displaySettings:true});
    }
    deleteAccount =()=>{
        var url = `http://localhost:8080/IndividualProject/api/user/deleteUser/${this.props.username}`;
        Axios.delete(url).then(function(response){
            alert("Account successfully deleted");
        }).catch(function(error){
            alert("Account deletion failed");
        });
        this.props.handleLogout();
    }
    render(){
        if(this.state.displaySettings===false){
            return(
                <div>
                    <p className="DisplayUser">user: {this.props.username}</p>
                    <button className="LogoutButton" type="button" onClick={this.props.handleLogout}>Logout</button>
                    <button className="DeleteButton" type="button" onClick={this.handleDisplaySettings}>Settings</button>
                </div>
            );
        }else{
            return(
                <div>
                    <p className="DisplayUser">user: {this.props.username}</p>
                    <button className="LogoutButton" type="button" onClick={this.props.handleLogout}>Logout</button>
                    <button className="DeleteButton" type="button" onClick={this.deleteAccount}>Delete Account</button>
                </div>
            )
        }
    }
}
export default DisplayUser;