import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeadText from './HeadText';
import Login from './Login';
import DisplayUser from './DisplayUser';
import NotesForChar from './NotesForChar';
import CreateAccount from './CreateAccount';
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

  handleLogin =(username, password)=>{
    var self = this;
    var url = `http://localhost:8080/IndividualProject/api/user/getAUser/${username}`;
    Axios.get(url).then(function(response){
      var user2 = response.data.username;
      if(password === response.data.password){
        self.setState({loggedIn:true, user:user2});
      }else{
        alert("Wrong password");
      }
    }).catch(function(error){
      alert("Wrong username");
    });
  }
  render() {
    if(this.state.loggedIn===true){
      return (
        <div className="App">
        <HeadText/>
        <DisplayUser username={this.state.user} handleLogout={this.handleLogout}/>
        <NotesForChar username={this.state.user}/>
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
        <Login 
        handleLogin={this.handleLogin}/>
        <CreateAccount
        handleLogin={this.handleLogin}/>
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