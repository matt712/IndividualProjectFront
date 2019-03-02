import React, { Component } from 'react';
import Axios from 'axios';
class NotesForChar extends Component{
    constructor(props){
        super(props);
        this.state = {
            character: "",
            notes: " "
        }
        this.handleChange = (e) =>{
            this.setState({ character: e.target.value });
            console.log(this.state.character);
            var tempChar = this.state.character;
            console.log(tempChar);
            var self = this;
            var storeNote = "";
            var url = `http://localhost:8080/IndividualProject/api/MatchUpNote/getUsersNoteForMatchup/${this.props.username}&${this.state.character}`;
            Axios.get(url).then(function(response){
                console.log(response);
                for(let i=0; i<response.data.length; i++){
                storeNote  = storeNote + response.data[i].contents + " ";
                }
                self.setState({ notes: storeNote});
                console.log(this.state.character);
            }).catch(function(error){
                console.log("no notes available");
            });
            console.log(this.state.character);
        }
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.character} onChange={this.handleChange}/>
                <p className="CharacterNotes">{this.state.character}</p>
                <p>{this.state.notes}</p>
            </div>
        )
    }
}
export default NotesForChar;