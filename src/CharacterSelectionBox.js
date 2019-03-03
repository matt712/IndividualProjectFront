import React, { Component } from 'react';
import DisplayCharNotes from './DisplayCharNotes';
import Axios from 'axios';

class CharSelectionBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            character: ""
        }
        this.handleChange = (e) =>{
            this.setState({ character: e.target.value });
            this.getNotes();
        }
    }
    getNotes(){
        var url = `http://localhost:8080/IndividualProject/api/MatchUpNote/getUsersNoteForMatchup/${this.props.username}&${this.state.character}`;
        var self = this;
        Axios.get(url).then(function(response){
            console.log(response);
            var tempNotes = response.data;
            self.setState({notes: tempNotes});
        }).catch(function(error){
            console.log("problem");
        });
    }
    render(){
        console.log(this.state.notes);
        return (
            <div>
                <input type="text" value={this.state.character} onChange={this.handleChange}/>
                <DisplayCharNotes notes={this.state.notes}/>
            </div>
        )
    }
}
export default CharSelectionBox;