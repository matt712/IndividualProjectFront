import React, { Component } from 'react';
import Axios from 'axios';
import * as constants from './Constants.js';

class CreateAccount extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            confirmPassword: ""
        };
        this.updateState = (e) =>{
            const value = e.target.value;
            const name = e.target.name;
            this.setState({
                [name]: value
            });
        }
        this.createAcc = (e) =>{
            e.preventDefault();
            var url = constants.URL_START + constants.CREATE_USER;
            var username = this.state.username;
            var password =this.state.password;
            var body = { username, password };
            console.log(body);
            if(this.state.password === this.state.confirmPassword){
                Axios.post(url,body).then(function(response){
                    alert(response.data.message);
                }).catch(function(error){
                    alert("Something went wrong with account creation, \n Try another username");
                });
            }else{
                alert("Passwords do not match");
            }
        }
    }
    render(){
        return(
            <div className="createBox">
            <h2>Sign up</h2>
                <form onSubmit={this.createAcc}>
                    Username: <br/>
                    <input type="text" name="username" value={this.state.username} onChange={this.updateState}/>
                     <br/>Password: <br/>
                    <input type="password" name="password" value={this.state.password} onChange={this.updateState}/>
                    <br/> Confirm password: <br/>
                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.updateState}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
export default CreateAccount;