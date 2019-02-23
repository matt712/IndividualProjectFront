import React, { Component } from 'react';

class DisplayUser extends Component{
    constructor(){
        super()
        this.state ={ username:"placeholder"};
    }
    render(){
        return(
            <div>
                <p className="DisplayUser">user: {this.state.username}</p>
                <button className="LogoutButton" type="button" onClick={this.props.handleLogin}>Logout</button>
            </div>
        );
    }
}
export default DisplayUser;