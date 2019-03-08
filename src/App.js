import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeadText from './HeadText';
import Login from './Login';
import DisplayUser from './DisplayUser';
import CreateAccount from './CreateAccount';
import CharSelectionBox from './CharacterSelectionBox';

import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      loggedIn: false,
      user: "fail"
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogout = () => {
    this.setState({
      loggedIn: false, user: "fail"
    });
  }

  handleLogin =(user2, pass)=>{
    var self = this;
    var url = `http://35.197.226.151:888/IndividualProject/api/user/LoginUser`;
    var body = { username:user2, password:pass };
    console.log(body);
    Axios.post(url, body).then(function(response){
      if(response.data.message === "Correct Password"){
        self.setState({loggedIn: true, user: user2});
      }else{
        alert(response.data.message);
      }
    }).catch(function(error){
      alert("problem");
    });
  }
  render() {
    if(this.state.loggedIn===true){
      return (
        <div className="App">
        <HeadText/>
        <DisplayUser username={this.state.user} handleLogout={this.handleLogout}/>
        <CharSelectionBox username={this.state.user}/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-text">
           Powered by ReactJS
          </p>
        </div>
      </div>
      );
    }else{
      return(
      <div className="App2">
        <HeadText/>
        <Login handleLogin={this.handleLogin}/>
        <CreateAccount/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-text">
           Powered by ReactJS
          </p>
        </div>
      </div>
      );
    }
  }
}
export default App;