import React, { Component } from 'react';
import Axios from 'axios';
import DisplayCharNotes from './DisplayCharNotes';

class CharSelectionBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            character: "",
            contents:""
        }
        this.handleChange = (e) =>{
            const value = e.target.value;
            const name = e.target.name;
            this.setState({[name]: value});
        }
        this.createNote = (e) =>{
            e.preventDefault();
            var url = constants.URL_START + constants.CREATE_NOTE;
            var tempCharacter = this.state.character;
            var tempCont = this.state.contents;
            var tempUser = this.props.username;
            var body = { vsCharacter: tempCharacter, contents: tempCont, username: tempUser};
            Axios.post(url, body).then(function(response){
                
            }).catch(function(error){
                alert("Note creation error: server error");
            });
        }
    }
    render(){

        return (
            <div className="charSelectBox">
                <p>Type matchup below</p>
                <input type="text" name="character" placeholder="Enter a matchup here" value={this.state.character} onChange={this.handleChange}/>
                <form onSubmit={this.createNote}>
                    New note content: <br/>
                    <input type="text" name="contents" onChange={this.handleChange}></input>
                    <input type="submit" value="Submit"/>
                </form>
                <DisplayCharNotes character={this.state.character} username={this.props.username}/>
            </div>
        )
    }
}
export default CharSelectionBox;