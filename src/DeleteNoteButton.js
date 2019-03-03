import React, { Component } from 'react';
import Axios from 'axios';

class DeleteNoteButton extends Component{
    constructor(props){
        super(props);
        this.state = {updating: false};
    }
    deleteNote =()=>{
       var url = `http://localhost:8080/IndividualProject/api/MatchUpNote/deleteMatchUpNote/${this.props.id}`
       Axios.delete(url).then(function(response){
            alert("Deletion successful");
       }).catch(function(response){
            alert("Deletion failed, try again");
       });
    }
    handleChange = (e) =>{
        this.setState({updating: true, contents: e.target.value});
    }
    updateNote = (e) =>{
        if(this.state.updating===true){
            e.preventDefault();
            var url = `http://localhost:8080/IndividualProject/api/MatchUpNote/updateMatchupNote/${this.props.id}`;
            var tempCont = this.state.contents;
            Axios.put(url, tempCont).then(function(response){
                alert("note created");
                console.log(response.data);
            }).catch(function(error){
                alert("note creation failed");
            });
            this.setState({updating:false});
        }else{
            this.setState({updating:true});
        }
    }
    render(){
        if(this.state.updating===false){
        return(
            <div>
            <button type="button" onClick={this.deleteNote}>Delete note</button>
            <button type="button" onClick={this.updateNote}>Update Note</button>
            </div>
        )}else{
            return(
                <div>
                    <form onSubmit={this.updateNote}>
                    Note content: <br/>
                    <input type="text" name="contents" onChange={this.handleChange}></input>
                    <input type="submit" value="Submit"/>
                </form>
                </div>
            )
        }
    }
}
export default DeleteNoteButton;