import React, { Component } from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"default",
            password:"temp"
        };
        this.updateState = (e) =>{
            this.setState({
                username: e.target.user,
                password: e.target.pass
            })
        }
        this.handleLogin = (e) =>{
            e.preventDefault();
            this.props.handleLogin(e.target.value);
        }
    }
    render(){
        const user = this.props.user;
        return(
            <div className="loginBox">
                <form onSubmit={this.handleLogin} value={user}>
                    username: <br/>
                    <input type="text" name="user" value={this.state.username} onChange={this.updateState}/>
                     <br/>password: <br/>
                    <input type="text" name="pass" value={this.state.password} onChange={this.updateState}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
export default Login;