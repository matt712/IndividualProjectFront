import React, { Component } from 'react';
import Axios from 'axios';

class DeleteNoteButton extends Component{
    constructor(props){
        super(props);
    }
    deleteNote =()=>{
       var url = `http://localhost:8080/IndividualProject/api/MatchUpNote/deleteMatchUpNote/${this.props.id}`
       Axios.delete(url).then(function(response){
            alert("Deletion successful");
       }).catch(function(response){
            alert("Deletion failed, try again");
       });
     }
    render(){
        return(
            <div>
            <button type="button" onClick={this.deleteNote}>Delete note</button>
            <button type="button" onClick={this.updateNote}>Update Note</button>
            </div>
        )
    }
}
export default DeleteNoteButton;