import React, { Component } from 'react';
import DeleteNoteButton from './DeleteNoteButton';
import Axios from 'axios';


class DisplayCharNotes extends Component{
    constructor(props){
        super(props);
        this.state = ({notes: ""});
    }
    async getNotes(){
        var url = `http://35.197.226.151:8888/IndividualProject/api/MatchUpNote/getUsersNoteForMatchup/${this.props.username}&${this.props.character}`;
        console.log(url);
        var self = this;
        var tempNotes ="";
        console.log(this.props.character);
        await Axios.get(url).then(function(response){
            var tempNotes = response.data;
            console.log(tempNotes);
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