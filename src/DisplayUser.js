import React, { Component } from 'react';
import Axios from 'axios';

class DisplayUser extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            
            <div>
                <p className="DisplayUser">user: {this.props.username}</p>
                <button className="LogoutButton" type="button" onClick={this.props.handleLogout}>Logout</button>
            </div>
        );
    }
}
export default DisplayUser;