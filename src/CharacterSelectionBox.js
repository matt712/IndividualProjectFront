import React, { Component } from 'react';
import DisplayCharNotes from './DisplayCharNotes';
import Axios from 'axios';

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
            console.log(this.state.character);
            this.getNotes();
        }
        this.createNote = (e) =>{
            e.preventDefault();
            var url = `http://localhost:8080/IndividualProject/api/MatchUpNote/createMatchupNote`;
            var tempCharacter = this.state.character;
            var tempCont = this.state.contents;
            var tempUser = this.props.username;
            var body = { vsCharacter: tempCharacter, contents: tempCont, username: tempUser};
            Axios.post(url, body).then(function(response){
                console.log(response);
                alert(response.data.message);
            }).catch(function(error){
                alert("Note creation error: server error");
            });
        }
    }
    getNotes(){
        var url = `http://localhost:8080/IndividualProject/api/MatchUpNote/getUsersNoteForMatchup/${this.props.username}&${this.state.character}`;
        var self = this;
        console.log(this.state.character);
        Axios.get(url).then(function(response){
            var tempNotes = response.data;
            self.setState({notes: tempNotes});
        }).catch(function(error){
            console.log("problem");
        });
    }
    render(){

        return (
            <div className="charSelectBox">
                <p>Type matchup below</p>
                <input type="text" name="character" value={this.state.character} onChange={this.handleChange}/>
                <form onSubmit={this.createNote}>
                    New note content: <br/>
                    <input type="text" name="contents" onChange={this.handleChange}></input>
                    <input type="submit" value="Submit"/>
                </form>
                <DisplayCharNotes notes={this.state.notes}/>
            </div>
        )
    }
}
export default CharSelectionBox;