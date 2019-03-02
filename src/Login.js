import React, { Component } from 'react';
import Axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"Matt",
            password:"eggs"
        };
        this.updateState = (e) =>{
            const value = e.target.value;
            const name = e.target.name;
            this.setState({
                [name]: value
            });
        }
        this.handleLogin = (e) =>{
            e.preventDefault();
            this.props.handleLogin(this.state.username, this.state.password);
        }
    }
    render(){
        const user = this.props.user;
        return(
            <div className="loginBox">
                <form onSubmit={this.handleLogin}>
                    username: <br/>
                    <input type="text" name="username" value={this.state.username} onChange={this.updateState}/>
                     <br/>password: <br/>
                    <input type="password" name="password" value={this.state.password} onChange={this.updateState}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
export default Login;