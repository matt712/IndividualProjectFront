import React, { Component } from 'react';
import Axios from 'axios';

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
        var url = `http://localhost:8080/IndividualProject/api/user/deleteUser/${this.props.user}`;
        Axios.delete(url).then(function(response){
            alert(response.data.message);
        }).catch(function(error){
            alert("Account deletion failed");
        });
        this.props.handleLogout();
    }
    updateAccount = (e)=>{
        e.preventDefault();
        var url = `http://localhost:8080/IndividualProject/api/user/updateUserPassword/${this.props.user}`;
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