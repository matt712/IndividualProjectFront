import React, { Component } from 'react';
import Axios from 'axios';

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
            var url = `http://localhost:8080/IndividualProject/api/user/createUser`
            var username = this.state.username;
            var password =this.state.password;
            var body = { username, password };
            if(this.state.password === this.state.confirmPassword){
                Axios.post(url,body).then(function(response){
                    alert("Account created, please log in");
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