import React, { Component } from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        };
        this.updateState = this.updateState.bind(this);
        this.handleLogin = (e) =>{
            e.preventDefault();
            this.props.handleLogin(this.state.username, this.state.password);
        }
    }
    updateState = (e) =>{
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }
    render(){
        return(
            <div className="loginBox">
            <h2>Log in</h2>
                <form onSubmit={this.handleLogin}>
                    username: <br/>
                    <input type="text" name="username" placeholder="Enter username here" value={this.state.username} onChange={this.updateState}/>
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