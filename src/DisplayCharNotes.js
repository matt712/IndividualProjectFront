import React, { Component } from 'react';
import DeleteNoteButton from './DeleteNoteButton';
import Axios from 'axios';
import * as constants from './Constants.js';


class DisplayCharNotes extends Component{
    constructor(props){
        super(props);
        this.state = ({notes: ""});
    }
    getNotes(){
        var url = constants.URL_START + constants.GET_NOTES + this.props.username + "&" + this.props.character;
        var self = this;
        var tempNotes ="";
        Axios.get(url).then(function(response){
            var tempNotes = response.data;
            self.setState({notes:tempNotes});
        }).catch(function(error){
            console.log("problem");
            return "Please enter something";
        });
    }
    render(){
        this.getNotes();
        try{
        return(
        <dl className="noteDisplay">
                    {this.state.notes.map(item =>(
                        <ul className="displayIndividualNote">
                            <p>Against: {item.vsCharacter}</p>
                            <p>{item.contents}</p>
                            <DeleteNoteButton id={item.noteID}/>
                        </ul>    
                    ))}
                </dl>
        );
        }catch(error){
            return(
                <p>Please enter letters</p>
            );
        }
    }
}
export default DisplayCharNotes;