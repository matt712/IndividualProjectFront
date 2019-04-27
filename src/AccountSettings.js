import React, { Component } from 'react';
import Axios from 'axios';
import * as constants from './Constants.js';

class AccountSettings extends Component{
    constructor(props){
        super(props)
        this.state = { password: ""}
        this.updateState = (e) =>{
            const value = e.target.value;
            const name = e.target.name;
            this.setState({
                [name]: value
            });
        }
    }
    deleteAccount =()=>{
        var url = constants.URL_START + constants.DELETE_USER + this.props.user;
        Axios.delete(url).then(function(response){
            alert(response.data.message);
        }).catch(function(error){
            alert("Account deletion failed");
        });
        this.props.handleLogout();
    }
    updateAccount = (e)=>{
        e.preventDefault();
        var url = constants.URL_START + constants.UPDATE_PASSWORD + this.props.user;
        var password = this.state.password;
        if(password === this.state.confirmPassword){
            Axios.put(url, password).then(function(response){
                alert(response.data.message);
            }).catch(function(error) {
                alert("Update failed, \n Try a different username");
            });
        }else{
            alert("Passwords do not match")
        }
    }
    render(){
        return(
            <div className="accountSettings"> 
            <button type="button" onClick={this.props.handleDisplaySettings}>Hide account settings</button><br/>
            <button type="button" onClick={this.deleteAccount}>Delete this account</button><br/>
            <form onSubmit={this.updateAccount}>
                Change Password
                <br/>New password: <br/>
                <input type="password" name="password" value={this.state.password} onChange={this.updateState}/>
                <br/> Confirm new password: <br/>
                <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.updateState}/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            </div>
        )
    }
}
export default AccountSettings ;