import React, { Component } from 'react';
class NotesForChar extends Component{
    constructor(props){
        super(props);
        this.state = {
            character: "Paul",
            notes: "EUARGH!"
        }
        this.handleChange = (e) =>{
            this.setState({
                character: e.target.value
            });
        }
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.character} onChange={this.handleChange}/>
                <p className="CharacterNotes">{this.state.character}</p>
                <p>It should display the notes you've made for the matchup here</p>
            </div>
        )
    }
}
export default NotesForChar;