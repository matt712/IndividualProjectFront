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
                username: e.target.value,
                password: e.target.value
            })
        }
    }
    render(){
        return(
            <div className="loginBox">
                <form onSubmit={this.props.handleLogin}>
                    username: <br/>
                    <input type="text" value={this.state.username} onChange={this.updateState}/>
                     <br/>password: <br/>
                    <input type="text" value={this.state.password} onChange={this.updateState}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
export default Login;