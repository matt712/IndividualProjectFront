import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeadText from './HeadText';
import Login from './Login';
import DisplayUser from './DisplayUser';
import NotesForChar from './NotesForChar';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      loggedIn: false,
      username: "fail",
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogout = () => {
    this.setState({
      loggedIn: false, username: "fail"
    });
  }

  handleLogin =(username)=>{
    console.log(username);
    
    if(this.state.loggedIn===false){
    this.setState({loggedIn: true, username});
  }else{
    username = "";
    this.setState({loggedIn:false, username});
  }
  }
  render() {
    if(this.state.loggedIn==true){
      return (
        <div className="App">
        <HeadText/>
        <DisplayUser username={this.state.username} handleLogout={this.handleLogout}/>
        <NotesForChar/>
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
        <Login username={this.state.username}
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