import React, { Component } from 'react';

class DisplayUser extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <p className="DisplayUser">user: {this.props.username}}</p>
                <button className="LogoutButton" type="button" onClick={this.props.handleLogin}>Logout</button>
            </div>
        );
    }
}
export default DisplayUser;