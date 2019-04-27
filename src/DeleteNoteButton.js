import React, { Component } from 'react';
import Axios from 'axios';
import * as constants from './Constants.js';

class DeleteNoteButton extends Component{
    constructor(props){
        super(props);
        this.state = {updating: false};
    }
    deleteNote =()=>{
       var url = constants.URL_START + constants.DELETE_NOTE + this.props.id;
       Axios.delete(url).then(function(response){
           
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
            var url = constants.URL_START + constants.UPDATE_NOTE + this.props.id;
            var tempCont = this.state.contents;
            Axios.put(url, tempCont).then(function(response){

            }).catch(function(error){
                alert("Note update failed, reverted to original state");
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