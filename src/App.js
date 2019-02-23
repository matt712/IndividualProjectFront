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
      loggedIn:false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(){
    this.setState(prevState =>({
      loggedIn: !prevState.loggedIn
    }));
  }
  render() {
    if(this.state.loggedIn===true){
      return (
        <div className="App">
        <HeadText/>
        <DisplayUser handleLogin={this.handleLogin}/>
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
        <Login handleLogin={this.handleLogin}/>
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